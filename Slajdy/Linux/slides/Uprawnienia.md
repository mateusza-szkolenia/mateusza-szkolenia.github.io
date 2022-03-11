# 30: Uprawnienia w Linuksie
------
<!-- .slide: data-autofragments -->
## Uprawnienia

- 3 operacje
- 3 obszary (ang. *scopes*)
- 3 × 3 = 9 bitów
---
## Operacje

<div style='display: flex; justify-content: space-around; flex-wrap: wrap;'>
<div style='width: 30%' class=fragment>
<span style='font-size: 5em'>R</span><br>
read<br>
(odczyt)
</div>
<div style='width: 30%' class=fragment>
<span style='font-size: 5em'>W</span><br>
write<br>
(zapis)
</div>
<div style='width: 30%' class=fragment>
<span style='font-size: 5em'>X</span><br>
execute<br>
(uruchomienie)
</div>
</div>
---
## Obszary
<div style='display: flex; justify-content: space-around; flex-wrap: wrap;'>
<div style='width: 30%' class=fragment>
<span style='font-size: 5em' class='fa fa-user'></span><br>
owner<br>
(właściciel)
</div>
<div style='width: 30%' class=fragment>
<span style='font-size: 5em' class='fa fa-users'></span><br>
group<br>
(grupa)
</div>
<div style='width: 30%' class=fragment>
<span style='font-size: 5em' class='fa fa-globe'></span><br>
others<br>
(inni)
</div>
</div>
---
## Uprawnienia
<div style='display: flex; justify-content: space-around; flex-wrap: wrap;'>
<div style='width: 30%' class=fragment>
<code style='font-size: 2em'>RWX</code><br>
właściciel
</div>
<div style='width: 30%' class=fragment>
<code style='font-size: 2em'>R--</code><br>
grupa
</div>
<div style='width: 30%' class=fragment>
<code style='font-size: 2em'>---</code><br>
inni
</div>
</div>
---
<!-- .slide: data-autofragments -->
## Przykładowe uprawnienia

- `rw-r--r--`
- `rwxr-xr-x`
- `r--r--r--`
- `r--------`
- `rw-rw----`
---
## X - uruchomienie

<div style='display: flex; justify-content: space-around;'>
<div style='width: 45%; text-align: center' class=fragment>
  <h3 class='fab fa-windows'></h3>
  <p><i class='fa fa-file'></i> <code>program.exe</code></p>
  <ul>
  <li>rozszerzenie <code>exe</code></li>
  </ul>
</div>
<div style='width: 45%; text-align: center;' class=fragment>
  <h3 class='fab fa-linux'></h3>
  <p><i class='fa fa-file'></i> <code>program</code></p>
  <ul>
  <li>brak rozszerzenia</li>
  <li>prawo dostępu <code>X</code></li>
  </ul>
</div>
</div>
------
## Zmiana uprawnień

<code style='font-size:4em;'>chmod</code>
---
<!-- .slide: data-autofragments -->
## Dodawanie praw

- `chmod +x plik` (dodaj prawo `x` każdemu)
- `chmod u+x plik` (dodaj prawo `x` właścicielowi)
- `chmod ug+w plik` (dodaj prawo `w` właścicielowi i grupie)
- `chmod o+r plik` (dodaj prawo `r` wszystkim innym)
---
<!-- .slide: data-autofragments -->
## Zabieranie praw

- `chmod -x plik` (zabierz prawo `x` każdemu)
- `chmod u-x plik` (zabierz prawo `x` właścicielowi)
- `chmod ug-w plik` (zabierz prawo `w` właścicielowi i grupie)
- `chmod o-r plik` (zabierz prawo `r` wszystkim innym)
---
<!-- .slide: data-autofragments -->
## Ustawianie praw

- `chmod =x plik` (`--x--x--x`)
- `chmod u=rwx plik` (ustaw `rwx` właścicielowi)
- `chmod ug=rw plik` (ustaw `rw` właścicielowi i grupie)
- `chmod o=r plik` (ustaw `r` wszystkim innym)
------
## Wartości liczbowe

<div style='display: flex; justify-content: space-around; flex-wrap: wrap;'>
<div style='width: 30%' class=fragment>
<span style='font-size: 5em'>R</span><br>
(4)
</div>
<div style='width: 30%' class=fragment>
<span style='font-size: 5em'>W</span><br>
(2)
</div>
<div style='width: 30%' class=fragment>
<span style='font-size: 5em'>X</span><br>
(1)
</div>
</div>

(system ósemkowy)
---
<!-- .slide: data-autofragments -->
## Pojedynczy obszar

- `rwx` 7
- `rw-` 6
- `r--` 4
- `r-x` 5
- `--x` 1
- `---` 0
---
<!-- .slide: data-autofragments -->
## Pełne wartości

- `rwxr-xr-x` (755)
- `rw-r--r--` (644)
- `rw-r-----` (640)
- `rwx--x--x` (711)
