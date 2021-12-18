# System plików w Linuksie
------
## Struktura składowania danych

<div style='display: flex; justify-content: space-around;'>
<div style='width: 30%' class=fragment>
  <i class='fa fa-file'></i><br>
  plik
</div>
<div style='width: 30%' class=fragment>
  <i class='fa fa-folder'></i><br>
  katalog (folder)
</div>
</div>
---
<!-- .slide: data-autofragments -->
## Drzewo katalogów

- pliki i katalogi mają unikalne nazwy
- katalogi mogą zawierać inne pliki i katalogi
---
<!-- .slide: data-autofragments -->
## Pliki

- typy:
  - *dokumenty*, dane
  - obrazki, zdjęcia, multimedia
  - programy
- rozmiar (bajty)
- znaczniki czasu i inne meta-dane
---
<!-- .slide: data-autofragments -->
## Katalogi

- służą organizacji danych
------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Różnice <i class='fab fa-linux'></i> vs <i class='fab fa-windows'></i>

- wielkość liter
- dozwolone znaki i nazwy
- ścieżki: dysk i ukośniki
- rozszerzenia i typy plików
- uprawnienia i pliki ukryte
- pliki specjalne
------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Wielkość liter

<div style='display: flex'>
<div style='width: 49%' class=fragment>
  <i class='fab fa-windows'></i><br>
  bez znaczenia
</div>
<div style='width: 49%' class=fragment>
  <i class='fab fa-linux'></i><br>
  ma znaczenie
</div>
</div>
---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
### Przykład

<div style='display: flex; justify-content: space-around; padding-bottom: 2em;'>
<div style='width: 20%' class=fragment>
<i class='fa fa-file'></i> ala.txt
</div>
<div style='width: 20%' class=fragment>
<i class='fa fa-file'></i> ALA.txt
</div>
<div style='width: 20%' class=fragment>
<i class='fa fa-file'></i> Ala.txt
</div>
<div style='width: 20%' class=fragment>
<i class='fa fa-file'></i> Ala.TXT
</div>
</div>

<div style='display: flex; justify-content: space-around;'>
<div style='width: 49%; text-align: center'>
  <h3 class='fragment fab fa-windows'></h3>
  <ul>
  <li>ta sama nazwa</li>
  <li>nie mogą być w jednym katalogu</li>
  </ul>
</div>
<div style='width: 49%; text-align: center;'>
  <h3 class='fragment fab fa-linux'></i></h3>
  <ul>
  <li>4 różne nazwy</li>
  <li>mogą być w jednym katalogu</li>
  </ul>
</div>
</div>
------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Dozwolone znaki

<div style='display: flex; justify-content: space-around;'>
<div style='width: 40%; text-align: center'>
  <h3 class='fragment fab fa-windows'></h3>
  <p>sporo zastrzeżonych:<br> <code>/ \ * : < > ? %</code></p>
</div>
<div style='width: 40%; text-align: center;'>
  <h3 class='fragment fab fa-linux'></i></h3>
  <p>jeden zastrzeżony:<br> <code>/</code></p>
</div>
</div>
------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Dozwolone nazwy

<div style='display: flex; justify-content: space-around;'>
<div style='width: 40%; text-align: center'>
  <h3 class='fragment fab fa-windows'></h3>
  <p>sporo zastrzeżonych:<br>
  <code>con</code><br>
  <code>nul</code><br>
  <code>com1</code><br>
  <code>lpt1</code><br>
  ...
  </p>
</div>
<div style='width: 40%; text-align: center;'>
  <h3 class='fragment fab fa-linux'></i></h3>
  <p>brak ograniczeń</p>
</div>
</div>
------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Dyski

<div style='display: flex; justify-content: space-around;'>
<div style='width: 40%; text-align: center'>
  <h3 class='fragment fab fa-windows'></h3>
  <p><i class='fa fa-hdd'></i> C:</p>
  <p><i class='fa fa-hdd'></i> D:</p>
  <p><i class='fa fa-hdd'></i> E:</p>
  </p>
</div>
<div style='width: 40%; text-align: center;'>
  <h3 class='fragment fab fa-linux'></i></h3>
  <p><i class='fa fa-hdd'></i> /dev/sda</p>
  <p><i class='fa fa-hdd'></i> /dev/sda2</p>
  <p>wymagają montowania...</p>
</div>
</div>
------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Separatory

<p><i class='fab fa-linux'></i> slash <code> / </code></p>
<p><i class='fab fa-windows'></i> backslash <code> \ </code></p>
---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Ścieżki

<p><i class='fab fa-linux'></i> <code>/home/mateusz/Desktop</code></p>
<p><i class='fab fa-windows'></i> <code>C:\Users\mateusz\Desktop</code></p>
---
<!-- .slide: data-autofragments -->
### Uwagi dot. slasha i backslasha

- w Windows można użyć slasha zamiast backslasha
- `C:/Windows/System32` zadziała
---
<!-- .slide: data-autofragments -->
### Zastosowanie slasha `/`:

- ścieżki w Linuksie, Uniksach, macOS
- URL-e:  
  `https://alx.pl/`
- zamykanie znaczników HTML:  
  `<h1>Tytuł</h1>`
- znak dzielenia:  
  `1/3`
---
<!-- .slide: data-autofragments -->
### Zastosowanie backslasha `\`:

- ścieżki w Windows (oraz Symbian i UEFI)
- *eskejpowanie*
- znacznika LaTeX-a:  
  `\begin{article}`
------
<!-- .slide: data-autofragments -->
## Rozszerzenia i typy plików

<div style='display: flex; justify-content: space-around; flex-wrap: wrap;'>
<div style='width: 30%' class=fragment>
<i class='fa fa-file-audio'></i><br>piosenka.mp3
</div>
<div style='width: 30%' class=fragment>
<i class='fa fa-file-pdf'></i><br>raport.pdf
</div>
<div style='width: 30%' class=fragment>
<i class='fa fa-file-word'></i><br>cv.docx
</div>
<div style='width: 30%' class=fragment>
<i class='fa fa-file-image'></i><br>wakacje.jpg
</div>
<div style='width: 30%' class=fragment>
<i class='fa fa-file-archive'></i><br>różne.zip
</div>
<div style='width: 30%' class=fragment>
<i class='fa fa-file-excel'></i><br>wydatki.xlsx
</div>
</div>
---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Nazwa i rozszerzenie

<div style='display: flex; justify-content: space-around;'>
<div style='width: 49%; text-align: center'>
  <h3 class='fragment fab fa-windows'></h3>
  <ul>
  <li>rozszerzenie i nazwa to dwie odrębne części</li>
  <li>znane rozszerzenia domyślnie ukryte</li>
  </ul>
</div>
<div style='width: 49%; text-align: center;'>
  <h3 class='fragment fab fa-linux'></i></h3>
  <ul>
  <li>brak formalnego podziału</li>
  <li>kropka - dozwolony znak w nazwie</li>
  <li>rozszerzenia zawsze widoczne</li>
  </ul>
</div>
</div>
---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Rozszerzenia i typy plików

<i class='fa fa-file-audio'></i> piosenka.mp3
---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Interpretacja Windowsowa

<i class='fa fa-file-audio'></i> piosenka

- nazwa pliku: `piosenka`
- rozszerzenie: `mp3` (niewidoczne)
- typ pliku: muzyka
- (typ wynika z rozszerzenia)
---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Interpretacja Linuksowa

<i class='fa fa-file-audio'></i> piosenka.mp3

- nazwa pliku: `piosenka.mp3`
- rozszerzenie: `.mp3` (umowne)
- typ pliku: muzyka
- (typ wynika z zawartości)
---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## "Nietypowe" nazwy plików w Linuksie

<i class='fa fa-file'></i> `hosts` -- brak rozszerzenia

<i class='fa fa-file'></i> `.bash_history` -- kropka na początku

<i class='fa fa-file'></i> `archiwum.tar.bz2` -- kilka rozszerzeń

<i class='fa fa-file'></i> `libpng15.so.15.13.0` -- rozszerzenie `.so` w środku
---
<!-- .slide: data-autofragments -->
## Przenośność plików

Ograniczenia w Windows:
- nie są ograniczeniami systemu plików
- zaimplementowane niekonsekwentnie
- mogą powodować dziwne zachowanie systemu
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

