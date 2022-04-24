import os
import glob
import jinja2
import pandas as pd
from config import EDITIONS
from slugify import slugify

os.makedirs('./html', exist_ok=True)
for x in glob.glob('./html/*.html'):
    os.unlink(x)

templateLoader = jinja2.FileSystemLoader(searchpath=".")
templateEnv = jinja2.Environment(loader=templateLoader)

files = glob.glob('./templates/static/*.html')

for x in files:
    template = templateEnv.get_template(x)
    _, tail = os.path.split(x)
    with open(f'./html/{tail}', 'w') as f:
        f.write(template.render({"objects": {}}))

df = pd.read_csv(EDITIONS).head(-1)
objects = df.to_dict(orient='records')
labels = {slugify(x): x for x in df.keys()}
df.columns = labels.keys()
template = templateEnv.get_template('./templates/edition.html')
for i, x in enumerate(df.to_dict(orient='records')):
    f_name = f"entry-{i+1:003}.html"
    with open(f"html/{f_name}", 'w') as f:
        f.write(template.render(x))

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