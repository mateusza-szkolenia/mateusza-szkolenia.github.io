# Lekcja 4

## Tematy

- System binarny
  - reprezentacja binarna `bin()`
  - literały binarne `0b11110000`
  - liczenie bitów jedynkowych `.bit_count()`
  - długość bitowa `.bit_length()`
- Operacje bitowe
  - bitowe AND `&`
  - bitowe OR `|`
  - bitowe XOR `^`
  - przesuwanie bitowe `>>` i `<<`
- System szesnastkowy
  - reprezentacja heksadecymalna `hex()`
  - literały szesnastkowe `0x1234cdef`
- Inne systemy pozycyjne
  - ósemkowy (`0o777`, `oct()`)

- Operacje na napisach
  - Sprawdzanie zawierania (`in`)
  - Liczenie wystąpień (`.count()`)
  - Sprawdzanie początku i końca (`.startswith()`, `.endswith()`)
  - Zmiana wielkości liter (`.capitalize()`, `.title()`)
  - Wycinanie fragmentów (`[a:b]`, `[a:]`, `[:b]`, `[a:b:c]`)
  - Napis wspak (`[::-1]`)
  - Opcjonalne usuwanie początku lub końca (`.removesuffix()`, `.removeprefix()`)

## Zadania

1. Napisać program, który zapyta o imię i sprawdzi, czy jest napisane z wielkiej litery.
2. Napisać program, który zapyta o adres email i sprawdzi, czy jest w domenie `.com` lub `.pl`
3. Napisać program, który zapyta o adres strony internetowej i usunie z niego początek `www.`
