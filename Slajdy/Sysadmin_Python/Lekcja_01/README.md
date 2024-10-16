# Lekcja 1

## Slajdy

[Pokaz slajdów](Slajdy.html) • [Treść](Slajdy.md)

## Tematy

- Przegląd składni
- Przegląd typów danych
- Przegląd standardowych modułów: `sys`, `os`, `glob` i innych
- Operacje na plikach

## Zadania

1. Napisać program podający *uptime* systemu w godzinach, z dokładnością do dziesiątej części.
2. Napisać program wyświetlający prawa dostępu i datę modyfikacji pliku podanego jako argument
3. Napisać program wyświetlający ile czasu minęło między dwoma datami.
4. Napisać program do sprawdzania, ile wolnego miejsca jest na danym dysku (wg. punktu montowania.)

Program ma kończyć się kodem błędu, jeśli ilość wolnego miejsca, wyrażona w procentach lub bajtach jest mniejsza od podanego progu.

Przykładowe uruchomienie programu:

$ ./wolne_miejsce.py / 10%
$ ./wolne_miejsce.py /home 1G
$ ./wolne_miejsce.py /var/log 100M


## Rozwiązania

[Rozwiązania zadań](Rozwiazania.md)