# dig-ed-cat-static

A static version of https://github.com/acdh-oeaw/dig_ed_cat 

## install/development

* clone the repo
* create a virtual environment and install the needed packages `pip install -r requirements`
* run `python build.py` to build the static pages
* to see the static-website, change directory into `./html` and start e.g. the default python server `python -m http.server`

## what and how

The build script `build.py` fetches data from https://github.com/gfranzini/digEds_cat and renders the data with the help of [Jinja2](https://jinja.palletsprojects.com) as HTML-Sites which can be served via e.g. Github-Pages.
All content/templates within the `./templates/static` are processed with `build.py` and stored as `./html/{filename.html}`.