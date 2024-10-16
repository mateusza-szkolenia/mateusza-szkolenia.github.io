# Lekcja 3

## Zadania

1. Napisać program przetwarzający bazę geolokalizacji IPv4 <https://datahub.io/core/geoip2-ipv4>

Dla wskazanej listy państw stworzyć osobne pliki typu `ipset` zawierające listy sieci przypisanych do danego kraju.

Policzyć szacowaną liczbę adresów przydzieloną danemu krajowi i udział w całej przestrzeni adresowej (32-bitowej).

    ```python
    #!/usr/bin/env python3
    
    """Napisać program przetwarzający bazę geolokalizacji IPv4 <https://datahub.io/core/geoip2-ipv4>
    
    Dla wskazanej listy państw stworzyć osobne pliki typu `ipset` zawierające listy sieci przypisanych do danego kraju.
    
    Policzyć szacowaną liczbę adresów przydzieloną danemu krajowi i udział w całej przestrzeni adresowej (32-bitowej).
    
    """
    

    ```

2. Napisać program przetwarzający lotnisk <https://datahub.io/core/airport-codes>

Dla dwóch wskazanych lotnisk (wg kodów IATA, czyli np. WAW, GDN) podać:
- informację o lotniskach
- ich współrzędne
- przybliżoną odległość w linii prostej między lotniskami (funkcja Haversine)

    ```python
    #!/usr/bin/env python3
    
    """Napisać program przetwarzający lotnisk <https://datahub.io/core/airport-codes>
    
    Dla dwóch wskazanych lotnisk (wg kodów IATA, czyli np. WAW, GDN) podać:
    - informację o lotniskach
    - ich współrzędne
    - przybliżoną odległość w linii prostej między lotniskami (funkcja Haversine)
    """
    
    import math
    import csv

    ```

