import os
import typesense

GITHUB_BASE = "https://raw.githubusercontent.com/gfranzini/digEds_cat/master"

EDITIONS = f"{GITHUB_BASE}/digEds_cat.csv"
INSTITUTIONS = f"{GITHUB_BASE}/institutions_places_enriched.csv"

TS_CLIENT = typesense.Client(
    {
        'nodes': [
            {
                'host': os.environ.get('TYPESENSE_HOST', 'localhost'),
                'port': os.environ.get('TYPESENSE_PORT', '8108'),
                'protocol': os.environ.get('TYPESENSE_PROTOCOL', 'http')
            }
        ],
        'api_key': os.environ.get('TYPESENSE_API_KEY', 'xyz'),
        'connection_timeout_seconds': 2
    }
)


TS_SCHEMA_NAME = 'dig-ed-cat'


MANDATORY_FIELDS = [
    'edition-name',
    'url'
]

FACET_FIELDS = [
    'language',
    'writing-support',
    'manager-or-editor',
    'institution-s',
    'audience',
    'source-text-translation',
    'language',
    'ocr-or-keyed',
    'repository-of-source-material-s',
    'place-of-origin-of-source-material-s',
    'sponsor-funding-body',
    'infrastructure',
]

NO_SEARCH_FIELDS = [
    'edition-name',
    'url',
    'handle-pid',
    'budget-rough',
    'ride-review',
]

M2M = {
    'Institution(s)': 'Institution Name',
}
