import os
import glob
import jinja2
import pandas as pd
from slugify import slugify

from config import (
    EDITIONS,
    INSTITUTIONS,
    TS_CLIENT,
    TS_SCHEMA_NAME,
    MANDATORY_FIELDS,
    FACET_FIELDS,
    NO_SEARCH_FIELDS,
)

from utils import make_schema, delete_and_create_schema, create_ts_documents

templateLoader = jinja2.FileSystemLoader(searchpath=".")
templateEnv = jinja2.Environment(loader=templateLoader)


print('hallo, lets start building')

os.makedirs('./html', exist_ok=True)
for x in glob.glob('./html/*.html'):
    os.unlink(x)
    # print(f'removing {x}')


files = glob.glob('./templates/static/*.j2')

print('building static content')
for x in files:
    template = templateEnv.get_template(x)
    _, tail = os.path.split(x)
    # print(f'rendering {tail}')
    with open(f'./html/{tail.replace(".j2", ".html")}', 'w') as f:
        f.write(template.render({"objects": {}}))

print(f"fetching {EDITIONS}")
df = pd.read_csv(EDITIONS).head(-1)
df = df.astype('str')
df = df.replace(['nan', ''], 'not provided')
objects = df.to_dict(orient='records')
labels = {slugify(x): x for x in df.keys()}
df.columns = labels.keys()

print(f"fetching {INSTITUTIONS}")
inst_df = pd.read_csv(INSTITUTIONS).head(-1)
inst_df = inst_df.astype('str')
inst_df = inst_df.replace(['nan', ''], 'not provided')

template = templateEnv.get_template('./templates/institution.j2')
for i, inst_objects in enumerate(inst_df.to_dict(orient='records')):

    f_name = f"institution-{i+1:003}.html"
    item = {
        key: {
            'label': key,
            'data': value
        }
        for key, value in inst_objects.items()
    }
    previous_entry = None
    next_entry = None
    if i > 0:
        previous_entry = f"institution-{i:003}.html"
    if i + 1 < len(inst_df):
        next_entry = f"institution-{i+2:003}.html"

    with open(f"html/{f_name}", 'w') as f:
        f.write(
            template.render(
                {
                    "object": item,
                    "title": inst_objects['Institution Name'],
                    "previous_entry": previous_entry,
                    "next_entry": next_entry
                }
            )
        )

if os.environ.get('BUILD_INDEX'):

    print('Typesense Index')
    print(f'defining Typesense collection schema with name: {TS_SCHEMA_NAME}')
    ts_schema = make_schema(df, TS_SCHEMA_NAME, MANDATORY_FIELDS, FACET_FIELDS)

    print(f'creating Typesnses Collection with schema {TS_SCHEMA_NAME}')
    cur_schema = delete_and_create_schema(
        TS_CLIENT, TS_SCHEMA_NAME, ts_schema
    )
    print(f"schema created at {cur_schema['created_at']}")
    print("create documents to index")
    documents = create_ts_documents(df, FACET_FIELDS)
    print(f"created {len(documents)} documents to index")

    index = TS_CLIENT.collections[TS_SCHEMA_NAME].documents.import_(documents, {'action': 'create'})
    print(f"status of index-process: {index[0]}")

template = templateEnv.get_template('./templates/edition.j2')
for i, object in enumerate(df.to_dict(orient='records')):
    f_name = f"entry-{i+1:003}.html"
    item = {
        key: {
            'label': labels[key],
            'data': value
        }
        for key, value in object.items()
    }
    previous_entry = None
    next_entry = None
    if i > 0:
        previous_entry = f"entry-{i:003}.html"
    if i + 2 <= len(df):
        next_entry = f"entry-{i+2:003}.html"
    with open(f"html/{f_name}", 'w') as f:
        f.write(
            template.render(
                {
                    "object": item,
                    "title": object['edition-name'],
                    "previous_entry": previous_entry,
                    "next_entry": next_entry
                }
            )
        )
facets = []
for key, value in labels.items():
    if key not in NO_SEARCH_FIELDS:
        facets.append(
            (key, value)
        )
template = templateEnv.get_template('./templates/editions.j2')
with open("./html/editions.html", 'w') as f:
    f.write(
        template.render(
            {
                'objects': facets,
            }
        )
    )

template = templateEnv.get_template('./templates/search.j2')
with open("./html/js/search.js", 'w') as f:
    f.write(
        template.render(
            {
                'objects': facets,
                'ts_search_key': os.environ.get('TYPESENSE_SEARCH_KEY', 'xyz'),
                'ts_host': os.environ.get('TYPESENSE_HOST', 'xyz'),
                'ts_port': os.environ.get('TYPESENSE_PORT', '8108'),
                'ts_protocol': os.environ.get('TYPESENSE_PROTOCOL', 'http')
            }
        )
    )
