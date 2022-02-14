<!-- .slide: data-background="#eee" -->
# 10: Wstęp do Linuksa
---
<!-- .slide: data-background="#eee" -->
![Tux](img/tux.png) <!-- .element: style="height: 60vh;" -->
------
# Historia
------
<!-- .slide: data-background="img/pdp-11.jpg" -->
PDP-11
------
<!-- .slide: data-autofragments -->
# UNIX

- 1970s
- Bell Labs
- język C
---
## Dennis Ritchie & Ken Thompson

![Ritchie and Thopson](img/ritchie_and_thompson.jpg) <!-- .element: style="height: 60vh;" -->
<style>
#dennis-ritchie--ken-thompson { font-size: 1.2em; }
</style>
---
<!-- .slide: data-autofragments -->
## Cechy UNIX-a

- wielozadaniowość
- wielodostępność
- hierarchiczny system plików
- pliki tekstowe
------
<!-- .slide: data-background="img/ibm-pc.jpg" -->
---
<!-- .slide: data-autofragments -->
# IBM PC

- 1981
- architektura Intel x86 (8086, 286, 386)
- MS-DOS, MS Windows
---
<!-- .slide: data-background="img/ms-dos.png" -->
---
<!-- .slide: data-autofragments -->
# DOS

- brak wielozadaniowości
- brak wielodostępności
- brak natywnej obsługi sieci
- bezpośredni dostęp do zasobów
- gry, programy
------
# Andrew Tanenbaum

![Andrew Tanenbaum](img/andrew-tanenbaum.jpg) <!-- .element: style="height: 60vh;" -->
<style>
#andrew-tanenbaum { font-size: 1.1em; }
</style>
---
![Book](img/minix-book.jpg) <!-- .element: style='height: 80vh;' -->
---
<!-- .slide: data-autofragments -->
# Minix

- 1987
- *mini Unix*
- prosty, do celów dydaktycznych
- dostępny dla x86
- ograniczenia licencyjne wydawcy
------
# Linus Torvalds

![Linus Torvalds](img/linus-torvalds.jpg) <!-- .element: style="height: 60vh;" -->
<style>
#linus-torvalds { font-size: 1.1em; }
</style>
---
<!-- .slide: data-autofragments -->
# Linux

- 1991
- inspirowany Miniksem
  - (ale nie bazujący na nim)
- główne różnice:
  - inna architektura kernela
  - licencjonowanie
------
# Richard Stallman

![RMS](img/richard-stallman.jpg) <!-- .element: style="height: 60vh;" -->
<style>
#richard-stallman { font-size: 1.1em; }
</style>
---
<!-- .slide: data-autofragments -->
# 4 wolności

- uruchamianie programu w dowolnym celu
- analiza działania i modyfikacja (*open source*)
- rozpowszechniania
- rozpowszechniania swoich modyfikacji
---
<!-- .slide: data-background="#eee" -->
# GNU GPL

![GPL](img/gnu-gpl.png)

*GNU General Public License*
---
<!-- .slide: data-background="#eee" -->
# Free Software Foundation

![FSF](img/fsf.png) <!-- .element: style="height: 50vh;" -->

*Free as in freedom, not free as in free beer*
---
<!-- .slide: data-autofragments -->
# Działalność FSF, GNU

- Tworzenie oprogramowania
- Walka ze złymi praktykami twórców oprogramowania
  - [Proprietary Software Is Often Malware](https://www.gnu.org/proprietary/proprietary.html)
    ([Apple](https://www.gnu.org/proprietary/malware-apple.en.html),
     [Microsoft](https://www.gnu.org/proprietary/malware-microsoft.html))
- Tropienie naruszeń licencji GPL
<style>
#działalność-fsf-gnu { font-size: 1.6em; }
</style>
---
<!-- .slide: data-background="#eee" -->
# GNU

![GNU](img/gnu.png) <!-- .element: style="height: 50vh;" -->

*GNU is Not Unix*
---
<!-- .slide: data-autofragments -->
# Oprogramowanie GNU

- kernel: **GNU Mach/GNU Hurd**
- shell: **GNU Bash**
- polecenia: **GNU Coreutils, grep, tar**
- bootloader: **GRUB**
- kompilatory: **GCC, Make**
- biblioteki: **readline**
- narzędzia: **GnuPG**, **Octave**, **Emacs**
- desktop, aplikacje: **GNOME, GIMP**
- [i wiele innych](https://en.wikipedia.org/wiki/List_of_GNU_packages)
<style>
#oprogramowanie-gnu { font-size: 1.5em; }
</style>
---
# GNU/Linux
------
<!-- .slide: data-autofragments -->
# POSIX

[Portable Operating System Interface](https://en.wikipedia.org/wiki/POSIX)
---
<!-- .slide: data-autofragments -->
# POSIX

- procesy
- sygnały
- pliki i katalogi (+operacje)
- standardowa biblioteka C
- I/O
- shell - polecenia
- *i inne*
---
<!-- .slide: data-autofragments -->
# POSIX Certified

- Solaris (SunOS)
- macOS (Apple)
- AIX
- HP-UX
- IRIX
- UnixWare
- QNX Neutrino
---
<!-- .slide: data-autofragments -->
# Prawie POSIX

- MINIX
- Linux
- Android
- BSD (FreeBSD, OpenBSD, NetBSD, Dragonfly BSD)
---
# Dlaczego prawie?

- brak formalnej certyfikacji
- minimalne odstępstwa od standardu
---
<!-- .slide: data-autofragments -->
# Microsoft Windows?

- POSIX Subsystem
- Cygwin
- Git for Windows
------
<!-- .slide: data-background="#eee" -->
# TOP500

![TOP500](img/top500.png) <!-- .element: style="height: 30vh;" -->

Ranking 500 najpotężniejszych **nierozproszonych** komputerów.
---
<!-- .slide: data-autofragments -->
# Linux

- pierwszy raz na liście w 1998
- 100% udziału od 2017
- Unix (w tym BSD): spadek z prawie 100% do 0%
- Windows: w porywach 0.8% (4/500)

\[[1](https://www.top500.org/statistics/details/osfam/1/)\]
---
<!-- .slide: data-background="#eee" -->
# Timeline

![Timeline](img/top500-timeline.png) <!-- .element: style="height: 65vh;" -->
<style>
#timeline {font-size: 1.3em; }
</style>
---
![Meme](img/linux-friends-meme.jpg) <!-- .element: style="height: 70vh;" -->
------
<!-- .slide: data-autofragments -->
# API i ABI

- Application Programming Interface
- Application Binary Interface
---
<!-- .slide: data-autofragments -->
# API

- interfejs programistyczny
- kod źródłowy
- protokół komunikacji
- POSIX
---
<!-- .slide: data-autofragments -->
# ABI

- architektura
- konsolidacja
- konwencja wołania
------
<!-- .slide: data-autofragments -->
# Komputer a OS 
---
<!-- .slide: data-autofragments -->
# Rola OS

- dostęp do urządzeń (drivery)
- zarządzanie pamięcią
- zarządzanie procesami
- udostępnienie interfejsu
------
<!-- .slide: data-autofragments -->
# Pojęcia

- Linux
- GNU/Linux
- dystrybucja Linuksa
  - Ubuntu
  - Red Hat Enterprise Linux
---
<!-- .slide: data-autofragments -->
# Linux

- nazwa oznacza sam kernel
- <https://www.kernel.org>
---
<!-- .slide: data-autofragments -->
# GNU/Linux

- system operacyjny z kernelem Linuksa
- oprogramowanie z projektu **GNU**
---
<!-- .slide: data-autofragments -->
# Dystrybucja

System operacyjny oparty na Linuksie (niekoniecznie GNU):

- dostosowany do konkretnego zastosowania
- wydany przez konkretny podmiot
- instalator i system pakietów
- usługi dodatkowe
---
# Komponenty

| | | | | |
|-----------|--|--|--|--|
| kernel | v4.4 | v4.9 | v5.4 | v5.16 |
| init | systemd | SysVinit | OpenRC | Runit |
| pulpit | GNOME | KDE | MATE | XFCE |
| web | Firefox | Konqueror | Chrome | ... |
| shell | bash | ash | tcsh | zsh |
| narzędzia | coreutils | busybox | ... | ... |
| pakiety | deb | rpm | apk | xbps |
<style>
#komponenty + table { font-size: 0.7em; }
</style>
---
# Wersje (wydania)

| rok | dystrybucja | kernel | GNOME | GCC | Python | 
|-----|-------------|--------|-------|-----|--------|
| 2015| RHEL 7 | 3.10 | 3.8 | 4.8 | 2.7 |
| 2018| Ubuntu 18.04 | 4.15 | 3.28 | 7.4 | 3.6 |
| 2019| RHEL 8 | 4.18 | 3.28 | 8.2 | 3.6 |
| 2020| Ubuntu 20.04 | 5.4 | 3.36 | 9.0 | 3.8 |
<style>
#wersje-wydania + table { font-size: 0.7em; }
</style>
---
<!-- .slide: data-background="#fff" -->
![Lalka](img/dress-up-doll.jpg) <!-- .element: style="height: 75vh;" -->
------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#555" -->
# Koniec

dalej: [Dystrybucje Linuksa](Dystrybucje.html)

