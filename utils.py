""" some helper functions """


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
