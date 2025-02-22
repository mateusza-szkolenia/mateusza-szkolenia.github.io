# Lekcja 5

## Zadania

### Zadanie 1

Napisać program wczytujący listę nowych serwerów z pliku
i przydzielający im adresy z dostępnej puli.

Przydzielone adresy muszą zostać przypisane w Netboksie
a następnie musi zostać utworzony plik inventory w formacie ansible

````````python
#!/usr/bin/env python3

"""Napisać program wczytujący listę nowych serwerów z pliku
i przydzielający im adresy z dostępnej puli.

Przydzielone adresy muszą zostać przypisane w Netboksie
a następnie musi zostać utworzony plik inventory w formacie ansible"""

...

````````
### Zadanie 2

Napisać program wczytujące listę adresów IP z pliku z logami
i generujący raport z liczbą połączeń wg państw.

Wykorzystać moduły
- python-geoip
- python-geoip-geolite2

````````python
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

````````
