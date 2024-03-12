# Lekcja 1

## Tematy

- Pierwszy program.
- Funkcja `print()`
- Operacje arytmetyczne
  - dodawania, odejmowanie, mnożenie, dzielenie
  - potęgowanie (np. `2 ** 16`)
  - pierwiastkowanie (jako potęgowanie do odwrotności) `64 ** (1/2)`
  - dzielenie z resztą (np. `100 % 3`)
  - dzielenie całkowite (np. `100 // 3`)
  - kolejność działań i nawiasy
  - notacja liczb
    - dziesiętnych (np. `123.5`)
    - w postaci wykładniczej (np. `2.3e30`)
    - dużych (np. `8_000_000_000`)
- Komentarze w kodzie
- Zmienne
  - nazwy zmiennych - zasady poprawności i konwencje
  - operacja przypisania
  - typy danych
- Cechy wyróżniające Pythona od innych popularnych języków programowania (np. C, C++, Java, JavaScript, PHP)

## Zadania

1. Napisać program wyświetlający wynik dzielenia $\frac{355}{113}$. Porównać obliczoną wartość ze znanym sobie przybliżeniem liczby $\pi$.
2. Napisać program wyświetlający 1000 razy słowo `python`
3. Napisać program wyświetlający wartość liczby ${17}^{123}$
4. Napisać program pozwalający stwierdzić, która wartość jest większa: ${50}^{50}$ czy ${49}^{51}$ i ile razy.
5. Napisać program wyliczający przybliżoną wartość liczby $e$ wg wzoru: $e \approx \left ( 1 + {1 \over n} \right )^{n}$ dla różnych wartości $n$, np. `1`, `2`, `3`, `5`, `10`, `100`, `1000`, etc.
6. Napisać program obliczający rozwiązania równania kwadratowego[^1] $ax^2 + bx + c = 0$ na podstawie zmiennych $a, b, c$ i wg wzoru: $x={\frac {-b\pm {\sqrt {b^{2}-4ac}}}{2a}}$ (Dwa wyniki!)
7. Napisać program obliczający jaką godzinę wskazuje zegar 12345 sekund po północy.
8. Napisać program obliczający ile sekund ma rok przestępny[^2].
9. Napisać program obliczający ile wiader farby potrzeba do pomalowania ścian prostokątnego pomieszczenia o wymiarach `4m` na `5m` i wysokości `2.5m`. Litr farby wystarcza na `9` metrów kwadratowych a farba sprzedawana jest w wiadrach `2L`. Otwory drzwiowe i okienne mają łącznie `3.5` metra kwadratowego.
10. Napisać program obliczający wyniki prostych działań arytmetycznych:
    - $0.1 + 0.7$
    - $0.1 + 0.2$
    - ${100}^{80}$
    - ${100.0}^{80}$
    - $4\ 111\ 111\ 111 + 0.299\ 999\ 9$
    - $\frac{10\ 000\ 000\ 000}{3} - 3\ 333\ 333\ 333$

    Co ciekawego[^3] można tu zaobserwować?
11. Napisać program obliczający wartość wielomianu[^4] $(x-7)(x-\sqrt{3})(x-\frac{1}{2})^{7}(x+5)$ dla kilku wybranych wartości $x$.
12. Które z poniższych nazw zmiennych są poprawne w języku Python?
    - `imie = "Mateusz"`
    - `imię = "Mateusz"`
    - `име = 'Mateusz'`
    - `rok urodzenia = 1985`
    - `rok-urodzenia = 1985`
    - `rok_urodzenia = 1985`
    - `rokUrodzenia = 1985`
    - `RokUrodzenia = 1985`
    - `ROK_URODZENIA = 1985`
    - `Rok_Urodzenia = 1985`
    - `rok ur. = 1985`
    - `rok_ur. = 1985`
    - `brat1 = "Maciej"`
    - `brat 2 = "Tomasz"`
    - `1brat = "Maciej"`
    - `2gi_brat = "Tomasz"`
    - `brat_2 = "Tomasz"`
    - `brat.2 = "Tomasz"`
    - `ocena :-) = 10`
    - `_firma = "ALX"`
    - `.firma = "ALX"`
    - `-firma = "ALX"`
    - `szkolenie:python = 10`
    - `❤system = "Linux"`
    - `liczba🦷 = 32`
13. Sprawdzić jak dużą liczbę i jak duży napis można przypisać do zmiennej bez zawieszenia komputera. **OSTROŻNIE**

## Pytania

Bez uruchamiania poniższych poleceń, spróbuj przewidzieć jaki będzie wynik ich wykonania. (Wynikiem może być też komunikat o błędzie.)

1. `print(AL + X)`
2. `print("AL" + "X")`
3. `print("10" + "20")`
4. `print(10 + 20)`
5. `print("10" + 20)`
6. `print(2 + 2 * 2)`
7. `print(20 * "3")`
8. `print("20" * 30)`
9. `print("20" * "3")`
10. `print("Mam " + 20 + " lat")`

[^1]: [Równanie kwadratowe](https://pl.wikipedia.org/wiki/R%C3%B3wnanie_kwadratowe)

[^2]: [Rok przestępny](https://pl.wikipedia.org/wiki/Rok_przest%C4%99pny)

[^3]: [IEEE 754 - Standard zapisu liczb zmiennoprzecinkowych](https://pl.wikipedia.org/wiki/IEEE_754)

[^4]: [Wielomian](https://pl.wikipedia.org/wiki/Wielomian)

