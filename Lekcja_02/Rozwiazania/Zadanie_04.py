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
