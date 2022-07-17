import os
import glob
import jinja2
import pandas as pd
from slugify import slugify

from config import (
    EDITIONS,
    TS_CLIENT,
    TS_SCHEMA_NAME,
    MANDATORY_FIELDS,
    FACET_FIELDS
)

from utils import make_schema, delete_and_create_schema, create_ts_documents

templateLoader = jinja2.FileSystemLoader(searchpath=".")
templateEnv = jinja2.Environment(loader=templateLoader)


print('hallo, lets start building')

os.makedirs('./html', exist_ok=True)
for x in glob.glob('./html/*.html'):
    os.unlink(x)
    # print(f'removing {x}')


files = glob.glob('./templates/static/*.html')

print('building static content')
for x in files:
    template = templateEnv.get_template(x)
    _, tail = os.path.split(x)
    # print(f'rendering {tail}')
    with open(f'./html/{tail}', 'w') as f:
        f.write(template.render({"objects": {}}))

print(f"fetching {EDITIONS}")
df = pd.read_csv(EDITIONS).head(-1)
df = df.astype('str')
df = df.replace(['nan', ''], 'not provided')
objects = df.to_dict(orient='records')
labels = {slugify(x): x for x in df.keys()}
df.columns = labels.keys()

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

template = templateEnv.get_template('./templates/edition.html')
for i, object in enumerate(df.to_dict(orient='records')):
    f_name = f"entry-{i+1:003}.html"
    item = {
        key: {
            'label': labels[key],
            'data': value
        }
        for key, value in object.items()
    }
    with open(f"html/{f_name}", 'w') as f:
        # print(f"rendering {f_name}")
        f.write(
            template.render(
                {
                    "object": item,
                    "title": object['edition-name']
                }
            )
        )

template = templateEnv.get_template('./templates/editions.html')
with open("./html/editions.html", 'w') as f:
    f.write(
        template.render(
            {
                'objects': objects,
                'rows': list(labels.values())
            }
        )
    )
