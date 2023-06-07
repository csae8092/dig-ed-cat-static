import typesense
import os
import json


client = typesense.Client(
    {
        "api_key": os.environ.get("TYPESENSE_API_KEY"),
        "nodes": [
            {
                "host": os.environ.get("TYPESENSE_HOST"),
                "port": os.environ.get("TYPESENSE_PORT"),
                "protocol": os.environ.get("TYPESENSE_PROTOCOL"),
            }
        ],
        "connection_timeout_seconds": 2,
    }
)

result = client.collections["dig-ed-cat"].documents.search(
            {
                "q": "Saint Patrick's Confessio",
                "query_by": "edition-name",
                "per_page": 10,
                "page": 1,
            }
        )

with open("hansi.json", "w") as f:
    json.dump(result, f)
print(result["hits"][0])