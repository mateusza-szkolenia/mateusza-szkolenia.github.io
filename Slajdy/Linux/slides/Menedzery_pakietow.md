# 60: Menedżery pakietów

------
<!-- .slide: data-autofragments -->
## Instalacja oprogramowania

- Windows: plik `setup.exe`
- Linux: menedżery pakietów

------
## Anatomia pakietu

---
### Kompresja

(zip, lub podobna)

---
<!-- .slide: data-autofragments -->
## Zawartość pakietu

- pliki
- opis (metainformacje)
- zależności
- skrypty pomocnicze *(pre-install, post-install ...)*

---
Uwaga: *Praktycznie każdy plik systemowy pochodzi z jakiegoś pakietu.*

------
<!-- .slide: data-autofragments -->
## Process instalacji pakietu

- sprawdzenie zależności
- rozpakowanie zawartości
- uruchomienie skryptów

---
<!-- .slide: data-autofragments -->
## Sprawdzenie zależności

- inne pakiety (lub pliki)
- wersje innych pakietów

---
## Rodzaje zależności

- **wymaga** (*require*)
- **konflikt** (*conflicts*)
- **sugeruje** i **rekomenduje** (*suggests*, *recommends*)
- **dostarcza** (*provides*)

---
<!-- .slide: data-autofragments -->
## Rozpakowanie zawartości

- nadpisanie drzewa systemowego

---
<!-- .slide: data-autofragments -->
## Uruchomienie skryptów

- zatrzymanie/uruchomienie usług
- wstępna konfiguracja
  - generowanie kluczy
  - generowanie certyfikatów
  - inicjowanie bazy danych

---
## Aktualizacja stanu

Menedżer pakietów śledzi stan każdego pakietu.

---
## Podpisy cyfrowe

- poszczególnych pakietów
- listy pakietów

------
## Instalacja oprogramowania

instalacja pakietu + zależności

------
## pakiety `.deb`

- Debian, Ubuntu, pochodne

---
## narzędzie `dpkg`

- sprawdzanie stanu, informacji
- instalacja, usuwanie
- pojedyncze pakiety

---
## narzędzie `APT`

- polecenia: `apt`, `apt-get`, `apt-cache`
- pobieranie pakietu wraz z zależnościami

------
## pakiety `.rpm`

- RHEL, CentOS, Fedora, SUSE i pochodne

---
## `rpm`

---
## `yum`

- `yum` (do RHEL 7)
- `dnf` (od RHEL 8)

------
<!-- .slide: data-autofragments -->
## inne

- `apk` (Alpine Linux)
- `xbps` (Void Linux)
- `opkg` (OpenWRT)
- `tgz` (Slackware)

------
## Repozytoria

------
[Koniec](./)

