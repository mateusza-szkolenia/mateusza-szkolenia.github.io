# 00: Podstawowe pojęcia
------
## Bit
------
## System binarny
------
## System dziesiętny
------
## System szesnastkowy
------
## System ósemkowy
------
## Bajt

* 8 bitów

(256 wartości)
------
## Kilobajt (1kB)

* 1024 B?
* 1000 B?

*Różnica: 2.4%*
---
## Dlaczego 1024?

2<sup>10</sup> = 1024 ≈ 1000
---
## 1000 vs 1024

<div style='display: flex'>
<div style='width: 49%' class=fragment>
  <h4>1000</h4>
  <ul>
  <li>system dziesiętny</li>
  <li>przedrostki z układu SI</li>
  </ul>
</div>

<div style='width: 49%' class=fragment>
  <h4>1024</h4>
  <ul>
  <li>system binarny</li>
  <li>symetria budowy</li>
  <li>adresowalność</li>
  </ul>
</div>
</div>
------
## Megabajt (1MB)

* 1024 × 1024 = 1048576 B? 
* 1000 × 1000 B?
* 1000 × 1024 B?

*Różnica: 4.85%*
------
## Gigabajt (1GB)

* 1024 × 1024 × 1024 = 1073741824 B?
* 1000 × 1000 × 1000 B?

*Różnica: 7.3%*
------
## System SI

| jednostka| symbol |wartość | wartość |
|----------|--------|-------:|--------:|
| bajt     | B      |     1 B | 1 B |
| kilobajt | kB     |  1000 B | 1000 B |
| megabajt | MB     | 1000 kB | 1000000 B |
| gigabajt | GB     | 1000 MB | 1000000000 B |
| terabajt | TB     | 1000 GB | 1000000000000 B |
| petabajt | PB     | 1000 TB | 1000000000000000 B |
<style>
#system-si + table { font-size: 0.8em; }
</style>
---
## System "informatyczny"

| jednostka| symbol |wartość | wartość |  
|----------|--------|-------:|--------:|
| bajt     | B      |     1 B | 1 B |
| kibibajt | kiB    |  1024 B | 1024 B |
| mebibajt | MiB    | 1024 kiB | 1048576 B |
| gibibajt | GiB    | 1024 MiB | 1073741824 B |
| tebibajt | TiB    | 1024 GiB | 1099511627776 B |
| pebibajt | PiB    | 1024 TiB | 1125899906842624 B |
<style>
#system-informatyczny + table { font-size: 0.8em; }
</style>
------
## Na co dzień

- Używa się wartości przybliżonych
- Obu systemów używa się przemiennie
- Precyzyjny rozmiar podaje się w bajtach
------
## Pojemność dysków i zużycie miejsca

Brak możliwości precyzyjnego pomiaru.
- struktura systemu plików
- wielkość bloku
- kompresja i pliki rzadkie
- dodatkowe mechanizmy (snapshoty, COW)

