#!/usr/bin/env python3

"""Napisać program przetwarzający lotnisk <https://datahub.io/core/airport-codes>

Dla dwóch wskazanych lotnisk (wg kodów IATA, czyli np. WAW, GDN) podać:
- informację o lotniskach
- ich współrzędne
- przybliżoną odległość w linii prostej między lotniskami (funkcja Haversine)
"""

import math
import csv
