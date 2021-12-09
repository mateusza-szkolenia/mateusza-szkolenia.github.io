#!/usr/bin/env python3

"""
Pobierz plik zip z geoportalu.
"""

URL = 'https://opendata.geoportal.gov.pl/prng/PRNG_MIEJSCOWOSCI_GML.zip'
LOCALFILE = 'PRNG_MIEJSCOWOSCI_GML.zip'

import os
import urllib.request

try:
    os.mkdir('tmp')
except:
    pass

os.chdir('tmp')
urllib.request.urlretrieve(URL, LOCALFILE)

