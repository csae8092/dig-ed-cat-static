""" some helper functions """
import typesense


def make_schema(df, ts_schema_name, mandatory_fields, facet_fields):
    TS_SCHEMA = {
        "name": ts_schema_name,
        "fields": []
    }
    for key in df.keys():
        if key in mandatory_fields:
            TS_SCHEMA['fields'].append(
                {
                    'name': key,
                    'type': 'string'
                }
            )
        elif key in facet_fields:
            TS_SCHEMA['fields'].append(
                {
                    'name': key,
                    'type': 'string[]',
                    'facet': True,
                    'optional': True
                }
            )
        else:
            TS_SCHEMA['fields'].append(
                {
                    'name': key,
                    'type': 'string',
                    'facet': True,
                    'optional': True
                }
            )
    return TS_SCHEMA


def delete_and_create_schema(ts_client, ts_schema_name, ts_schema):
    try:
        ts_client.collections[ts_schema_name].delete()
    except typesense.api_call.ObjectNotFound:
        pass
    created = ts_client.collections.create(ts_schema)
    return created


def create_ts_documents(df, facet_fields):
    documents = []
    for i, row in df.iterrows():
        doc = {
            'id': f"{i+1}"
        }
        for key in df.keys():
            if key in facet_fields:
                doc[key] = [x.strip() for x in row[key].split(';').strip()]
            else:
                doc[key] = row[key]
        documents.append(doc)
    return documents
