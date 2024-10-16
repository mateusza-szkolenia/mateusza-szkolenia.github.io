<!-- .slide: data-background="../assets/fundacja-sysops-devops-polska-bg-gray.png" -->
Python dla sysadminów

# Lekcja 9

Mateusz Adamowski

------
<!-- .slide: data-autofragments -->
# Różnice

- Python 2.x
- Python 3.x

------
# Wydania Pythona 3.x

| Wersja | Data wydania | Koniec wsparcia | What's New |
|--------|--------------|-----------------|------------|
| 3.13   | 2024-10-07   |         2029-10 | [link](https://docs.python.org/3/whatsnew/3.13.html) |
| 3.12   | 2023-10-02   |         2028-10 | [link](https://docs.python.org/3/whatsnew/3.12.html) |
| 3.11   | 2022-10-24   |         2027-10 | [link](https://docs.python.org/3/whatsnew/3.11.html) |
| 3.10   | 2022-10-24   |         2026-10 | [link](https://docs.python.org/3/whatsnew/3.10.html) |
| 3.9    | 2021-10-04   |         2025-10 | [link](https://docs.python.org/3/whatsnew/3.9.html)  |
| 3.8    | 2020-10-04   |         2024-10 | [link](https://docs.python.org/3/whatsnew/3.8.html)  |
| 3.0    | 2008         |                 |

<style>
#wydania-pythona-3x + table { font-size: .7em; }
</style>

------

<!-- .slide: data-autofragments -->
# Linia Python 2.x?

- 2.0 - (rok 2000)
- 2.5 - (rok 2006)
- 2.6 - (rok 2008, razem z 3.0)
- 2.7 - (rok 2009, razem z 3.1)
  - ostatnie wydanie
  - wspierane do 2020

------
# Istotne różnice między 2.x i 3.x

---
## Operator dzielenia

```python
wynik = 10 / 3
```

<div class="cols cols-2">
<div>
  <h3>Python 2.x</h3>
  <code>3 (int)</code>
</div>
<div>
  <h3>Python 3.x</h3>
  <code>3.3333 (float)</code>
</div>
</div>

---
## Print

<div class="cols cols-2">
<div>
  <h3>Python 2.x</h3>
  <pre>
  print 2 + 2
  </pre>
  <i>Instrukcja (słowo kluczowe)</i>
</div>
<div>
  <h3>Python 3.x</h3>
  <pre>
  print(2 + 2)
  </pre>
  <i>Funkcja.</i>
</div>
</div>

---
## string (unicode) vs bytes

<div class="cols cols-2">
<div>
  <h3>Python 2.x</h3>
  <p>string = bajty</p>
  <p>osobny typ <code>unicode</code></p>
</div>
<div>
  <h3>Python 3.x</h3>
  <p>string ≠ bajty</p>
  <p><code>string = unicode</code></p>
</div>
</div>

---
## input

<div class="cols cols-2">
<div>
  <h3>Python 2.x</h3>
  <p>pobiera wyrażenie</p>
  <p>zwraca wynik ewaluacji</p>
  <p>osobna funkcja <code>raw_input</code></p>
</div>
<div>
  <h3>Python 3.x</h3>
  <p>zwraca string</p>
</div>
</div>


---
## setki innych zmian

- działanie podstawowych funkcji np.
  `range`, `zip`, `map`, `filter`
- składnia obsługi wyjątków
- porównywanie niezgodnych typów
- uniwersalny typ `int` (zamiast `long`)
- model obiektowy i dziedziczenie
