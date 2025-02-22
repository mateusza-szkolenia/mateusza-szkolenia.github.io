#!/usr/bin/env python3

"""Napisać program wczytujące listę adresów IP z pliku z logami
i generujący raport z liczbą połączeń wg państw.

Wykorzystać moduły
- python-geoip
- python-geoip-geolite2
"""

from geoip import geolite2
match = geolite2.lookup('17.0.0.1')

...
