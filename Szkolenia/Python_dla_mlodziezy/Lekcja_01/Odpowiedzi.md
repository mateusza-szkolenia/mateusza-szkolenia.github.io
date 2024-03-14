# Lekcja 1

## Zadania

1. Napisać program wyświetlający wynik dzielenia $\frac{355}{113}$. Porównać obliczoną wartość ze znanym sobie przybliżeniem liczby $\pi$.

    ```python
    x = 355/113
    pi = 3.14159

    print("Wartość ułamka:", x)
    print(x/pi)
    ```

    ### wynik

    ```
    Wartość ułamka: 3.1415929203539825
    1.000000929578329
    ```

    Jest to całkiem dobre przybliżenie liczby $\pi$


2. Napisać program wyświetlający 1000 razy słowo `python`

    ```python
    print(1000 * 'python ')
    ```

    ### wynik

    ```
    python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python python ...
    ```

3. Napisać program wyświetlający wartość liczby ${17}^{123}$

    ```python
    print(17 ** 123)
    ````

    ### wynik

    ```
    22142024630120207359320573764236957523345603216987331732240497016947292822996637496750906355872025391170927994632063938187990037220685580536286573569713
    ```

4. Napisać program pozwalający stwierdzić, która wartość jest większa: ${50}^{50}$ czy ${49}^{51}$ i ile razy.

    ```python
    a = 50**50
    b = 49**51

    print(a / b)
    print(b / a)
    ```

    ### wynik

    ```
    0.056040259201216476
    17.844314324268737
    ```

    Wynika z tego, że druga liczba jest prawie 18 razy większa.

5. Napisać program wyliczający przybliżoną wartość liczby $e$ wg wzoru: $e \approx \left ( 1 + {1 \over n} \right )^{n}$ dla różnych wartości $n$, np. `1`, `2`, `3`, `5`, `10`, `100`, `1000`, etc.


    ```python
    n = 1
    e = (1 + 1 / n) ** n
    print(e)

    n = 2
    e = (1 + 1 / n) ** n
    print(e)

    n = 100
    e = (1 + 1 / n) ** n
    print(e)

    n = 10000
    e = (1 + 1 / n) ** n
    print(e)

    ...
    ```

    ### wynik

    ```
    2.0
    2.25
    2.7048138294215285
    2.7181459268249255
    ```

    Jest to dobre przybliżenie liczby $e \approx 2.718281828459045$

6. Napisać program obliczający rozwiązania równania kwadratowego[^1] $ax^2 + bx + c = 0$ na podstawie zmiennych $a, b, c$ i wg wzoru: $x={\frac {-b\pm {\sqrt {b^{2}-4ac}}}{2a}}$ (Dwa wyniki!)

    ```python
    # TODO
    ```

7. Napisać program obliczający jaką godzinę wskazuje zegar 12345 sekund po północy.

    ```python
    czas = 12345

    godziny = czas // 3600
    minuty = czas // 60 % 60
    sekundy = czas % 60

    print(godziny, ":", minuty, ":", sekundy)
    ```

    ### wynik

    ```
    3 : 25 : 45
    ```

8. Napisać program obliczający ile sekund ma rok przestępny[^2].

    ```python
    ile_sekund = 366 * 24 * 60 * 60

    print(ile_sekund)
    ```

    ### wynik

    ```
    31622400
    ```

9. Napisać program obliczający ile wiader farby potrzeba do pomalowania ścian prostokątnego pomieszczenia o wymiarach `4m` na `5m` i wysokości `2.5m`. Litr farby wystarcza na `9` metrów kwadratowych a farba sprzedawana jest w wiadrach `2L`. Otwory drzwiowe i okienne mają łącznie `3.5` metra kwadratowego.

    ```python
    dlugosc = 4
    szerokosc = 5
    wysokosc = 2.5
    powierzchnia_otworow = 3.5
    wydajnosc_litra = 9
    pojemnosc_wiadra = 2

    powierzchnia_scian = 2 * (dlugosc + szerokosc) * wysokosc
    powierzchnia_malowania = powierzchnia_scian - powierzchnia_otworow

    ile_litrow = powierzchnia_malowania / wydajnosc_litra
    ile_wiader = ile_litrow / pojemnosc_wiadra

    print(ile_wiader)
    ```

    ### wynik

    ```
    2.3055555555555554
    ```

10. Napisać program obliczający wyniki prostych działań arytmetycznych:
    - $0.1 + 0.7$

        ```python
        print(0.1 + 0.7)
        ```

        ### wynik

        ```
        0.7999999999999999
        ```

    - $0.1 + 0.2$

        ```python
        print(0.1 + 0.2)
        ```

        ### wynik

        ```
        0.30000000000000004
        ```

    - ${100}^{80}$

        ```python
        print(100 ** 80)
        ```

        ### wynik

        ```
        10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
        ```

    - ${100.0}^{80}$

        ```python
        print(100.0 ** 80)
        ```

        ### wynik

        ```
        1e+160
        ```

        Ten zapis oznacza: $1.0 \times 10^{160}$

    - $4\ 111\ 111\ 111 + 0.299\ 999\ 9$

        ```python
        print(4_111_111_111 + 0.299_999_9)
        ```

        ### wynik

        ```
        4111111111.2999997
        ```

    - ${10\ 000\ 000\ 000 \over 3} - 3\ 333\ 333\ 333$

        ```python
        print(10_000_000_000 / 3 - 3_333_333_333)
        ```

        ### wynik

        ```
        0.33333349227905273
        ```

    - Co ciekawego[^3] można tu zaobserwować?

      Wszystkie powyższe obliczenia dają wynik obarczony widocznym błędem arytmetycznym (przybliżenie).

11. Napisać program obliczający wartość wielomianu[^4] $(x-7)(x-\sqrt{3})(x-\frac{1}{2})^{7}(x+5)$ dla kilku wybranych wartości $x$.

    ```python
    x = 6.99
    wynik = (x - 7) * (x - 3**(1/2)) * ((x - 0.5)**7) * (x + 5)
    print(wynik)

    x = 7.0
    wynik = (x - 7) * (x - 3**(1/2)) * ((x - 0.5)**7) * (x + 5)
    print(wynik)

    x = 7.01
    wynik = (x - 7) * (x - 3**(1/2)) * ((x - 0.5)**7) * (x + 5)
    print(wynik)
    ```

    ### wynik

    ```
    -305737.31404356635
    0.0
    314105.2046371644
    ```

12. Które z poniższych nazw zmiennych są poprawne w języku Python?

| przypisanie do zmiennej | poprawność | uwagi |
|-----------------------|-----|---------------------------------------------------------|
| `imie = "Mateusz"` | ✅ |
| `imię = "Mateusz"` | ✅ | użycie polskich liter jest niewskazane
| `име = 'Mateusz'` | ✅ | użycie innych alfabetów jest niewskazane
| `rok urodzenia = 1985` | 🚫 | spacja w nazwie
| `rok-urodzenia = 1985` | 🚫 | minus w nazwie (oznacza odejmowanie)
| `rok_urodzenia = 1985` | ✅ |
| `rokUrodzenia = 1985` | ✅ | `camelCase` nie jest właściwym stylem w Pythonie
| `RokUrodzenia = 1985` | ✅ | `PascalCase` nie jest właściwym stylem w Pythonie
| `ROK_URODZENIA = 1985` | ✅ | zapis stosowany dla stałych
| `Rok_Urodzenia = 1985` | ✅ | nie jest to właściwy styl w Pythonie
| `rok ur. = 1985` | 🚫 | spacja i kropka w nazwie
| `rok_ur. = 1985` | 🚫 | kropka w nazwie
| `brat1 = "Maciej"` | ✅ |
| `brat 2 = "Tomasz"` | 🚫 | spacja w nazwie
| `1brat = "Maciej"` | 🚫 | cyfra na początku
| `2gi_brat = "Tomasz"` | 🚫 | cyfra na początku
| `brat_2 = "Tomasz"` | ✅ |
| `brat.2 = "Tomasz"` | 🚫 | kropka w nazwie
| `ocena :-) = 10` | 🚫 | spacja i znaki interpunkcyjne w nazwie
| `_firma = "ALX"` | ✅ |
| `.firma = "ALX"` | 🚫 | kropka na początku
| `-firma = "ALX"` | 🚫 | minus na początku
| `szkolenie:python = 10` | 🚫 | dwukropek w nazwie
| `❤system = "Linux"` | 🚫 | symbol Unicode (serce) w nazwie
| `liczba🦷 = 32` | 🚫 | symbol Unicode (emoji ząb) w nazwie

13. Sprawdzić jak dużą liczbę i jak duży napis można przypisać do zmiennej bez zawieszenia komputera. **OSTROŻNIE**

    Wielkość liczby czy napisu nie posiada żadnych narzuconych ograniczeń. Można próbować przypisać dowolnie dużą wartość, o ile zmieści się w dostepnej pamięci. W przypadku przekroczenia dostępnej pamięci, program zostanie zakończony przez system operacyjny, ale może to wpłynąć na stabilność całego systemu.

## Pytania

Bez uruchamiania poniższych poleceń, spróbuj przewidzieć jaki będzie wynik ich wykonania. (Wynikiem może być też komunikat o błędzie.)

1. `print(AL + X)`

    ❗ Zmienne `AL` i `X` nie są zadeklarowane.

2. `print("AL" + "X")`

    `ALX`

3. `print("10" + "20")`

    `1020`

4. `print(10 + 20)`

    `30`

5. `print("10" + 20)`

    ❗ Nie można dodać napisu do liczby.

6. `print(2 + 2 * 2)`

    `6` (uwaga na kolejność działań!)

7. `print(20 * "3")`

    `33333333333333333333`

8. `print("20" * 3)`

    `202020`

9. `print("20" * "3")`

    ❗ Nie można pomnożyć napisu przez napis.

10. `print("Mam " + 20 + " lat")`

    ❗ Nie można dodać napisu do liczby.


[^1]: [Równanie kwadratowe](https://pl.wikipedia.org/wiki/R%C3%B3wnanie_kwadratowe)

[^2]: [Rok przestępny](https://pl.wikipedia.org/wiki/Rok_przest%C4%99pny)

[^3]: [IEEE 754 - Standard zapisu liczb zmiennoprzecinkowych](https://pl.wikipedia.org/wiki/IEEE_754)

[^4]: [Wielomian](https://pl.wikipedia.org/wiki/Wielomian)

