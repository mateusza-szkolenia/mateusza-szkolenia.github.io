# Lekcja 4

## Slajdy

[Pokaz slajdów](Slajdy.html) • [Treść](Slajdy.md)

## Tematy

- Import i eksport danych: CSV
- Bazy SQL: SQLite, MySQL, Postgresl
- Eksport danych: Excel

## Zadania

### Zadanie 1

Napisać program przetwarzający bazę geolokalizacji IPv4 <https://datahub.io/core/geoip2-ipv4>

Dla wskazanej listy państw stworzyć osobne pliki kompatybilne z narzędziem `ipset` zawierające listy sieci ulokowanych w danym kraju.

Policzyć szacowaną liczbę adresów przydzieloną danemu krajowi i udział w całej przestrzeni adresowej (32-bitowej).

### Zadanie 2

Napisać program przetwarzający lotnisk <https://datahub.io/core/airport-codes>

Dla dwóch wskazanych lotnisk (wg kodów IATA, czyli np. WAW, GDN) podać:
- informację o lotniskach
- ich współrzędne
- przybliżoną odległość w linii prostej między lotniskami (funkcja Haversine)

### Zadanie 3

W oparciu o zrzut bazy danych Sqlite zawierający dane kandydatóœ w Wyborach Samorządowych
<https://mateusza-szkolenia.github.io/Programowanie/Zbiory_danych/Wybory_Samorzadowe/>
stworzyć prosty skrypt, który wyświetli (w trybie tekstowym) wykres popularności
danego imienia na przestrzeni lat. (Wg roczników urodzenia kandydatów)



## Rozwiązania

[Rozwiązania zadań](Rozwiazania.md)