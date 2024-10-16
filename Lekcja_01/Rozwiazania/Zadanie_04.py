#!/usr/bin/env python3

"""Napisać program do sprawdzania, ile wolnego miejsca jest na danym dysku (wg. punktu montowania.)

Program ma kończyć się kodem błędu, jeśli ilość wolnego miejsca, wyrażona w procentach lub bajtach jest mniejsza od podanego progu.

Przykładowe uruchomienie programu:

$ ./wolne_miejsce.py / 10%
$ ./wolne_miejsce.py /home 1G
$ ./wolne_miejsce.py /var/log 100M

"""

from os import statvfs
