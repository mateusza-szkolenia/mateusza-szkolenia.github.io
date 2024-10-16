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
