# Lekcja 2

## Zadania

1. Napisać program, który pyta o imię i podaje liczbę liter.

    ```python
    imie = input("Podaj imię: ")

    dlugosc = len(imie)

    print(f"Długość imienia: {dlugosc}")
    ```

2. Napisać program, który pyta o imię i nazwisko i wypisuje inicjały osoby.

    ```python
    imie = input("Podaj imię: ")
    nazwisko = input("Podaj nazwisko: ")

    inicjaly = imie[0] + "." nazwisko[0] + "."

    print(f"Inicjały: {inicjaly}")
    ```

3. Napisać program, który pyta o rok urodzenia i podaje wiek osoby.

    ```python
    BIEZACY_ROK = 2024

    rok_ur = int(input("Podaj rok urodzenia: "))

    wiek = BIEZACY_ROK - rok_ur

    print(f"Wiek: {wiek}")
    ```

4. Napisać program, który pyta o temperaturę w °C i przelicza ją na °F i K.

    ```python
    temp_c = float(input("Podaj temperaturę w °C: "))

    temp_f = temp_c * 1.8 + 32

    temp_k = temp_c + 273.15

    print(f"Temperatura {temp_c}°C = {temp_f:.1f}°F = {temp_k.2f}K")
    ```

5. Napisać program, który pyta o wagę i wzrost i oblicza BMI.

    ```python
    waga = float(input("Podaj wagę w kg: "))
    wzrost = float(input("Podaj wzrost w m: "))

    bmi = waga / wzrost**2

    print(f"BMI: {bmi:.1f}")
    ```

6. Napisać program, który pyta o wzrost w cm i podaje go w jednostkach imperialnych (stopy i cale).

    ```python
    wzrost = float(input("Podaj wzrost w cm: "))

    wzrost_cale = wzrost / 2.54

    wzrost_stopy, wzrost_cale = divmod(wzrost_cale, 12)

    print(f"Wzrost: {wzrost_stopy} ft {wzrost_cale:.0f} in")
    ```

7. Napisać program, który pyta o kwotę w PLN i przelicza ją na USD i EUR (wg dzisiejszego kursu NBP).

    ```python
    kurs_EUR = 4.31
    kurs_USD = 3.95

    kwota_PLN = float(input("Podaj kwotę w PLN: "))

    kwota_EUR = kwota_PLN / kurs_EUR
    kwota_USD = kwota_PLN / kurs_USD

    print(f"{kwota_PLN:.2f} PLN = {kwota_USD:.2f} USD = {kwota_EUR:.2f} EUR")
    ```

8. Napisać program, który pyta o bok kwadratu i oblicza jego obwód, pole i przekątną.

    ```python
    bok = float(input("Podaj bok kwadratu: "))

    obwod = 4 * bok
    pole = bok**2
    przekatna = bok * 2**(1/2)

    print(f"Wymiary kwadratu:")
    print(f"{obwod = }")
    print(f"{pole = }")
    print(f"{przekatna = :.2f}")
    ```

9. Napisać program, który pyta o promień koła i oblicza jego obwód i pole.

    ```python
    PI = 3.14159

    promien = float(input("Podaj promień koła: "))

    obwod = 2 * PI * promien
    pole = PI * promien**2

    print(f"Wymiary koła: {obwod = :.1f} {pole = :.1f}")
    ```

10. Napisać program, który pyta o boki prostkąta i oblicza jego obwód, pole i przekątną.
11. Napisać program, który pyta o promień podstawy i wysokość stożka[^8] i oblicza jego powierzchnię całkowitą i objętość.
12. Napisać program, który pyta o odległość między dwoma miastami, czas podróży i oblicza średnią prędkość[^9].
13. Napisać program, który pyta o masę i objętość przedmiotu i oblicza jego średnią gęstość[^10].
14. Napisać program, który pyta o napięcie w V i prąd w mA i oblicza rezystancję[^11] w kΩ.
15. Napisać program, który pyta o częstotliwość fali radiowej[^12] w Hz i oblicza jej długość (w próżni).
16. Napisać program, który pyta o wartości dwóch oporników połączonych równolegle i oblicza ich opór zastępczy[^13].
17. Napisać program, który pyta o liczbę dzieci i dorosłych i oblicza całkowitę cenę biletów[^14].
18. Napisać program, który pyta o liczbę wierzchołków wielokąta i oblicza jego liczbę przekątnych[^15].
