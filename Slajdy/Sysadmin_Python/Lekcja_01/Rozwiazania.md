# Lekcja 1

## Zadania

1. Napisać program podający *uptime* systemu w godzinach, z dokładnością do dziesiątej części.

    ```python
    #!/usr/bin/env python3
    
    """Napisać program podający *uptime* systemu w godzinach, z dokładnością do dziesiątej części."""
    
    
    PROC_UPTIME = '/proc/uptime'
    
    with open(PROC_UPTIME, 'r', encoding='utf-8') as uptime_f:
        uptime_line = uptime_f.read()
    
    uptime = float(uptime_line.split(" ")[0])
    
    print(f"Uptime: {uptime / 60 / 60:.1f}h")

    ```

2. Napisać program wyświetlający prawa dostępu i datę modyfikacji pliku podanego jako argument

    ```python
    #!/usr/bin/env python3
    
    """Napisać program wyświetlający prawa dostępu i datę modyfikacji pliku podanego jako argument"""
    
    from os import stat
    from sys import argv
    
    ...

    ```

3. Napisać program wyświetlający ile czasu minęło między dwoma datami.

    ```python
    #!/usr/bin/env python3
    
    """Napisać program wyświetlający ile czasu minęło między dwoma datami."""
    
    from datetime import datetime, date
    
    ...

    ```

4. Napisać program do sprawdzania, ile wolnego miejsca jest na danym dysku (wg. punktu montowania.)

Program ma kończyć się kodem błędu, jeśli ilość wolnego miejsca, wyrażona w procentach lub bajtach jest mniejsza od podanego progu.

Przykładowe uruchomienie programu:

$ ./wolne_miejsce.py / 10%
$ ./wolne_miejsce.py /home 1G
$ ./wolne_miejsce.py /var/log 100M

    ```python
    #!/usr/bin/env python3
    
    """Napisać program do sprawdzania, ile wolnego miejsca jest na danym dysku (wg. punktu montowania.)
    
    Program ma kończyć się kodem błędu, jeśli ilość wolnego miejsca, wyrażona w procentach lub bajtach jest mniejsza od podanego progu.
    
    Przykładowe uruchomienie programu:
    
    $ ./wolne_miejsce.py / 10%
    $ ./wolne_miejsce.py /home 1G
    $ ./wolne_miejsce.py /var/log 100M
    
    """
    
    from os import statvfs

    ```

