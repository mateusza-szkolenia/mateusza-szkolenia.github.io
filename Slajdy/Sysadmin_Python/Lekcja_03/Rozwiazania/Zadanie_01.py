#!/usr/bin/env python3

"""Napisać program wczytujący bazę lotnisk w formacie JSON
pobraną ze strony: <https://datahub.io/core/airport-codes>

Znaleźć na liście wszystkie duże lotniska (`"type": "large_airport"`)
i zapisać je w pliku JSON jako tablicę słowników postaci:

```
{
  "name": "Warsaw Chopin Airport",
  "continent": "EU",
  "iso_country": "PL",
  "municipality": "Warsaw",
  "iata_code": "WAW",
  "icao_code": "EPWA",
  "gps": [52.165699, 20.9671]
}
```
"""

import json
import math

...
