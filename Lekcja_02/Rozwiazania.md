# Lekcja 2

## Zadania

### Zadanie 1

Napisać program wyświetlający zmienne środowiskowe danego procesu.

````````python
#!/usr/bin/env python3

"""Napisać program wyświetlający zmienne środowiskowe danego procesu."""

import sys

def get_proc_env(pid: int) -> dict:
    """Get ENV vars for given pid"""
    path = f'/proc/{pid}/environ'

    with open(path, 'rb') as file:
        data = file.read()

    envvars = data.split(b'\x00')

    result = {}

    for envvar in envvars:
        name, _, value = envvar.decode().partition('=')
        if name == '':
            continue
        result[name] = value

    return result


def main():
    """Main"""

    pids = [int(p) for p in sys.argv[1:]]

    if len(pids) == 0:
        print(f"usage: {sys.argv[0]} PID [PID...]")
        sys.exit(0)

    for pid in pids:
        print(f"=========== { pid } =============")
        for k, v in get_proc_env(pid).items():
            print(f" {k}: {v}")


if __name__ == "__main__":
    main()

````````
### Zadanie 2

Napisać program podający adresy IP (v4 i v6) danego interfejsu sieciowego.

````````python
#!/usr/bin/env python3

"""Napisać program podający adresy IP (v4 i v6) danego interfejsu sieciowego."""

import subprocess
import re

...

````````
### Zadanie 3

Napisać program, rysujący wykres (ASCII lub ANSI) przedstawiający
zmieniające się zużycie pamięci oraz obciążenie systemu.

Użyć danych z /proc/meminfo, /proc/loadavg

````````python
#!/usr/bin/env python3

"""Napisać program, rysujący wykres (ASCII lub ANSI) przedstawiający
zmieniające się zużycie pamięci oraz obciążenie systemu.

Użyć danych z /proc/meminfo, /proc/loadavg"""

...

````````
### Zadanie 4

Napisać program wyświetlający listę interfejsów sieciowych, ich prędkość, stan kabla oraz stan połączenia.

````````python
#!/usr/bin/env python3

"""Napisać program wyświetlający listę interfejsów sieciowych, ich prędkość, stan kabla oraz stan połączenia."""

from os import listdir

NET_PATH = '/sys/class/net'

def read_iface_param(interface: str, param_name: str) -> str:
    """Wczytaj własność interfejsu z pliku /sys/class/net/INTERFACE/NAZWA"""
    path = f'{NET_PATH}/{interface}/{param_name}'
    with open(path, 'r', encoding='UTF-8') as file:
        try:
            data = file.read().strip()
        except OSError:
            data = ""
        return data

def get_all_interfaces() -> list[str]:
    """Podaj listę interfejsów"""

    return listdir(NET_PATH)

for iface in get_all_interfaces():
    speed = read_iface_param(iface, 'speed')
    operstate = read_iface_param(iface, 'operstate')
    carrier = read_iface_param(iface, 'carrier')

    connected = "connected" if int(carrier) > 0 else "disconnected"
    print(f'{iface:20} {speed:10} {operstate:10} {connected:10}')

````````
