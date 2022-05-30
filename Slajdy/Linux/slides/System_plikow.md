# 30: System plików w Linuksie

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

- katalogi zawierają pliki i katalogi
- obiekty w katalogu mają unikalne nazwy

---
Uwaga: *(prawie) wszystko jest plikiem*

---
<!-- .slide: data-autofragments -->
## Pliki

- zwykłe
- *niezwykłe* (specjalne)
  - rurki (pipe)
  - gniazda (socket)
  - łącza symboliczne (symlink)
  - urządzenia (device)

---
<!-- .slide: data-autofragments -->
## Pliki zwykłe

- przechowują:
  - *dokumenty*, dane
  - obrazki, zdjęcia, multimedia
  - programy
- mają rozmiar (bajty)
- znaczniki czasu i inne meta-dane

---
<!-- .slide: data-autofragments -->
## pipe (rurka)

- inna nazwa: FIFO
- kolejka
- komunikacja 1-do-1 między procesami
- zerowy rozmiar
- brak buforowania

---
<!-- .slide: data-autofragments -->
## socket (gniazdo)

- komunikacja 1-do-wielu
- odpowiednik łączności TCP/IP, ale bez stosu sieciowego
- zerowy rozmiar
- brak buforowania

---
<!-- .slide: data-autofragments -->
## device (urządzenie)

- komunikacja między procesami a urządzeniami obsługiwanymi przez sterownik kernela
- tylko w katalogu `/dev/`
- zerowy rozmiar
- identyfikacja urządzeń:
  - dwie liczby całkowite (*major*, *minor*)

---
<!-- .slide: data-autofragments -->
## symbolic link

- może wskazywać na plik lub katalog
- przypomina "Skrót" z Windows
- rozmiar: długość stringa ze ścieżką

---
<!-- .slide: data-autofragments -->
## katalogi

- służą organizacji danych
- mogą zawierać inne pliki i katalogi
- mogą być *wirtualne*

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
- znak końca linii w plikach tekstowych
- operacje i mechnizmy blokowania

------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Wielkość liter

<div style='display: flex'>
<div style='width: 49%' class=fragment>
  <i class='fab fa-windows fa-3x'></i><br>
  bez znaczenia
</div>
<div style='width: 49%' class=fragment>
  <i class='fab fa-linux fa-3x'></i><br>
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
## Niedozwolone znaki

<div style='display: flex; justify-content: space-around;'>
<div style='width: 40%; text-align: center'>
  <h3 class='fragment fab fa-windows fa-3x'></h3>
  <p>drukowalne:<br> <code style='font-size: 0.7em;'>/ \ | * : < > ? "</code></p>
  <p>niedrukowalne:<br> <code>ASCII 0-31</code></p>
</div>
<div style='width: 40%; text-align: center;'>
  <h3 class='fragment fab fa-linux fa-3x'></i></h3>
  <p>drukowalne:<br> <code>/</code></p>
  <p>niedrukowalne:<br> <code>ASCII 0</code></p>
</div>
</div>

------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Zastrzeżone nazwy

<div style='display: flex; justify-content: space-around;'>
<div style='width: 40%; text-align: center'>
  <h3 class='fragment fab fa-windows fa-3x'></h3>
  <p style='font-size: 0.5em;'>
  <code>con</code><br>
  <code>nul</code><br>
  <code>com1</code><br>
  <code>lpt1</code><br>
  (również z dowolnym rozszerzeniem)
  </p>
</div>
<div style='width: 40%; text-align: center;'>
  <h3 class='fragment fab fa-linux fa-3x'></i></h3>
  <p>brak ograniczeń</p>
</div>
</div>

------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## Drzewo katalogów

<div style='display: flex; justify-content: space-around;'>
<div style='width: 40%; text-align: center'>
  <h3 class='fragment fab fa-windows'></h3>
  <p>osobne dla każdego dysku</p>
  <p>rzeczywiste pliki</p>
  <p>ew. dyski sieciowe</p>
</div>
<div style='width: 40%; text-align: center;'>
  <h3 class='fragment fab fa-linux'></i></h3>
  <p>jedno wirtualne drzewo (VFS)</p>
  <p>rzeczywiste pliki tylko w niektórych gałęziach</p>
  <p>również pliki i katalogi wirtualne</p>
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
### Zastosowanie slasha `/`

- ścieżki w Linuksie, Uniksach, macOS
- URL-e:  
  `https://alx.pl/`
- zamykanie znaczników HTML:  
  `<h1>Tytuł</h1>`
- znak dzielenia:  
  `1/3`

---
<!-- .slide: data-autofragments -->
### Zastosowanie backslasha `\`

- ścieżki w Windows (oraz Symbian i UEFI)
- *eskejpowanie*
- znaczniki LaTeX-a:  
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
  <li>znane rozszerzenia domyślnie niewidoczne</li>
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
- (typ może też wynikać z zawartości)

------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->
## "Nietypowe" nazwy plików w Linuksie

<table style='font-size: 0.8em;'>
<tr class=fragment>
<th>nazwa pliku</th>
<th>uwagi</th>
</tr>
<tr class=fragment>
<td><i class='fa fa-file'></i> <code>hosts</code></td>
<td>brak rozszerzenia</td>
</tr>
<tr class=fragment>
<td><i class='fa fa-file'></i> <code>.bash_history</code></td>
<td>kropka na początku</td>
</tr>
<tr class=fragment>
<td><i class='fa fa-file'></i> <code>archiwum.tar.bz2</code></td>
<td>kilka rozszerzeń</td>
</tr>
<tr class=fragment>
<td><i class='fa fa-file'></i> <code>libpng15.so.15.13.0</code></td>
<td>rozszerzenie <code>.so</code> w środku</td>
</tr>
</table>

------
<!-- .slide: data-autofragments -->
## Przenośność plików

Ograniczenia w Windows:
- nie zawsze są ograniczeniami systemu plików
- zaimplementowane niekonsekwentnie
- mogą powodować dziwne zachowanie systemu

------
<!-- .slide: data-autofragments -->
## Tłumaczone nazwy katalogów w Windows

<div style='display: flex'>
<div style='width: 49%' class=fragment>
  <i class='fa fa-folder fa-2x'></i><br>
  nazwa wyświetlana w GUI

  `C:\Użytkownicy\Mateusz\Pulpit`
</div>

<div style='width: 49%' class=fragment>
  <i class='fa fa-terminal fa-2x'></i><br>
  rzeczywista nazwa  

  `C:\Users\Mateusz\Desktop`
</div>
</div>

------
<!-- .slide: data-autofragments -->
## Nazwy 8.3

Ograniczenia klasycznego FAT:
- nazwa do 8 liter
- rozszerzenia do 3 liter
- bez spacji
- bez znaków narodowych
- *case insensitive*
- wszystko wielkimi literami

---
<!-- .slide: data-autofragments -->
## VFAT i Long File Names

- wprowadzone wraz z Windows 95
- rozszerzenie standardu FAT
- nazwy plików do 255 znaków
- wsparcie dla znaków międzynarodowych (Unicode UCS)
- dozwolone spacje
- respektowanie wielkości liter
- *case insensitive*

---
**Systemy plików w Windows (FAT, NTFS) przechowują obie nazwy: LFN i SFN.**

---
<!-- .slide: data-autofragments -->
## Nazwy SFN (8.3) i LFN

<div style='display: flex'>
<div style='width: 49%' class=fragment>
  <i class='fa fa-folder fa-2x'></i><br>
  nazwa długa<br>

  `C:\Program Files`
</div>

<div style='width: 49%' class=fragment>
  <i class='fa fa-terminal fa-2x'></i><br>
  nazwa krótka<br>

  `C:\PROGRA~1`
</div>
</div>

------
## Programy

<div style='display: flex; justify-content: space-around;'>
<div style='width: 40%; text-align: center' class=fragment>
  <h3 class='fab fa-windows fa-3x'></h3>
  <p>decyduje rozszerzenie</p>
  <p>
  <code>exe</code>, <code>bat</code>, <code>cmd</code>, <code>com</code>...
  </p>
</div>
<div style='width: 40%; text-align: center;' class=fragment>
  <h3 class='fab fa-linux fa-3x'></i></h3>
  <p><i>rozszerzenie nie ma znaczenia</i></p>
</div>
</div>

------
## Pliki ukryte

<div style='display: flex; justify-content: space-around;'>
<div style='width: 40%; text-align: center' class=fragment>
  <h3 class='fab fa-windows fa-3x'></h3>
  <p>attrybut HIDDEN</p>
</div>
<div style='width: 40%; text-align: center;' class=fragment>
  <h3 class='fab fa-linux fa-3x'></i></h3>
  <p>nie ma plików ukrytych<sup> * </sup></p>
</div>
</div>

------
<!-- .slide: data-autofragments -->
## Pliki "ukryte" w Linuksie

* pliki z nazwą zaczynającą się od kropki
* nie są domyślnie wyświetlane
* zastosowanie:
  - pliki konfiguracyjne
  - pliki pomocnicze, tymczasowe
  - metainformacje
* "ukrycie" nie implikuje prywatności, bezpieczeństwa
* "ukrycie" implikuje zmianę nazwy

------
[Koniec](./)

