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

- inne pakiety
- wersje innych pakietów
---
<!-- .slide: data-autofragments -->
## Rozpakowanie zawartości

- nadpisanie drzewa systemowego
---
<!-- .slide: data-autofragments -->
## Uruchomienie skryptów

- zatrzymanie/uruchomienie usług
- wstępna konfiguracja (generowanie kluczy)
---
## Aktualizacja stanu

Menedżer pakietów śledzi stan każdego pakietu.
---
## Podpisy cyfrowe
------
## Instalacja oprogramowania

instalacja pakietu + zależności
------
## `Deb`

- Debian, Ubuntu, pochodne
---
## `dpkg`
---
## `APT`

- `apt`
- `apt-get`
------
## `RPM`

- RHEL, CentOS, Fedora, SUSE i pochodne
---
## `rpm`
---
## `yum`

- `yum`
- `dnf`
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

