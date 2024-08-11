# 60: Menedżery pakietów

------
<!-- .slide: data-autofragments -->
## Instalacja oprogramowania

- Windows: plik `setup.exe`
- Linux: menedżery pakietów

------
## Anatomia pakietu

---
### Skompresowane archiwum

(gzip lub podobna)

---
<!-- .slide: data-autofragments -->
## Zawartość pakietu

- pliki
- opis (metainformacje)
- zależności
- skrypty pomocnicze *(pre-install, post-install ...)*

---
Uwaga:  
*Praktycznie każdy plik systemowy pochodzi z jakiegoś pakietu.*

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
- podmiana starych wersji plików

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

Menedżer pakietów śledzi i rejestruje stan każdego pakietu.

---
## Podpisy cyfrowe

- poszczególnych pakietów (np. rpm)
- listy pakietów (np. APT/deb)

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

- polecenia:
  - `apt`
  - `apt-get`
  - `apt-cache`
- pobieranie pakietu wraz z zależnościami
- użycie `dpkg` do instalacji

------
## pakiety `.rpm`

- RHEL i klony (CentOS, Rocky, AlmaLinux)
- Fedora
- SUSE
- i inne

---
## narzędzie `rpm`

- sprawdzanie stanu, informacji
- instalacja, usuwanie
- weryfikacja podpisów
- pojedyncze pakiety

---
## narzędzie `yum` / `dnf`

- pobieranie list pakietów
- wyszukiwanie pakietów
- pobieranie pakietów wraz z zależnościami

## dlaczego `yum` albo `dnf`?

- `yum` (do EL 7)
- `dnf` (od EL 8, od Fedory 22)

------
<!-- .slide: data-autofragments -->
## inne dystrybucje

- `apk` (Alpine Linux)
- `xbps` (Void Linux)
- `opkg` (OpenWRT)
- `tgz` (Slackware)
- `pkg.tar.zst` (Arch Linux)

------
<!-- .slide: data-autofragments -->
## niezależne od dystrybucji

- Flatpak
- Snapcraft
- ZeroInstall
- AppImage
- Homebrew
- Nix

------
<!-- .slide: data-autofragments -->
## właściwe dla języków programowania

- `pip` (Python)
- `npm` (JavaScript, NodeJS)
- `CPAN` (perl)
- `Composer` (PHP)
- `RubyGems `gem` (Ruby)
- `Cargo` (Rust)

------
## repozytoria

- oficjalne
- społecznościowe
- niezależne
- produktowe

------
## phased updates

Etapowe wdrażanie poprawek pośród użytkowników

- atrybut `Phased-Update-Percentage` w APT
- dystrybucje: Ubuntu

------
[Koniec](./)

