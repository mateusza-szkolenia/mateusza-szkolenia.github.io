<!-- .slide: data-background="img/fundacja-sysops-devops-polska-bg-gray.png" -->
<!-- .slide: data-autofragments -->

# Git - Like a pro!

SysOps/DevOps Meetup #73  
Warszawa, 2025-03-20

---
<!-- .slide: data-autofragments -->
## Mateusz Adamowski

- sysadmin (od 2005)
- programista (Python, Bash, JS, C)
- użytkownik Linuksa (od 2000)
- szkoleniowiec

------
<!-- .slide: data-background="#eee" -->

![Git](img/1280px-Git-logo.svg.png)

------
# Historia powstania

---

_cofnijmy się w czasie do 2000_

---
<!-- .slide: data-autofragments -->
## Rok 2000

- dial-up internet
- _cloud computing_ - nie istnieje
- wirtualizacja, konteneryzacja - raczkują
- CVS, Subversion

---
<!-- .slide: data-autofragments -->
## CVS (1990)

- brak śledzenia katalogów i zmian nazw
- tylko praca online
- blokady
- fatalna obsługa branchy i tagów

---
> If you like using CVS, you should be in some kind of mental institution or somewhere else.
>
> (Linus Torvalds)

---
<!-- .slide: data-autofragments -->
## Subversion (1995)

- centralny serwer
- branche jako podkatalogi
- niefektywne przechowywanie
- brak integralności danych
- ograniczenia w obsłudze metadanych (`chmod`)

---
> Subversion has been the most pointless project ever started... Subversion used to say, 'CVS done right.' With that slogan there is nowhere you can go. There is no way to do CVS right.
>
> (Linus Torvalds)

---
<!-- .slide: data-autofragments -->
## Linux

- flagowy projekt free/open source
- kernel 2.2.x
- 1.5M LoC
- rosnąca popularność i zainteresowanie gigantów

---

> For the first 10 years of kernel maintenance, we literally used tarballs and patches, which is a much superior source control management system than CVS is.
>
> (Linus Torvalds)

------
<!-- .slide: data-background="#eee" -->

![BitKeeper](img/Bitkeeper-logo.png)

(2002)
---
<!-- .slide: data-autofragments -->
## BitKeeper

Innowacyjne narzędzie do kontroli wersji firmy BitMover.

- komerycjne (płatne)
- rozproszone
- repozytoria "w chmurze"
- <i class='fab fa-windows'></i> <i class='fab fa-apple'></i> <i class='fab fa-linux'></i>
- _kontrowersyjne_ licencjonowanie

---
<!-- .slide: data-autofragments -->
## Darmowa licencja

- dla developerów FLOSS
- ograniczona funkcjonalność
- kontrowersyjne zapisy
    - zakaz rozszerzania funkcjonalności
    - niedostępna dla developerów innych VCS

---
<!-- .slide: data-autofragments -->
## Kontrowersje

Flagowy projekt FLOSS zarządzany komercyjnym narzędziem.

vs

_I'll use the best tool for the job and, quite frankly, BitKeeper was it._

---
## Wycofanie licencji

(2005)

---
<!-- .slide: data-autofragments -->
## Powstanie Gita

- napisany w kilka dni przez Linusa Torvaldsa
- języki: C, shell, perl
- narzędzia systemowe typu diff, patch

---

> Take CVS as an example of what not to do; if in doubt, make the exact opposite decision
>
> (Linus Torvalds)

---
<!-- .slide: data-autofragments -->
## Windows?

- inne znaki końca linii
- nazwy plików, ścieżki
- prawa dostępu
- brak narzędzi shellowych
- wolniejszy system plików i tworzenie procesów

---
## windows problems

<iframe src='assets/faylor-email.html' style='width: 60vw; height: 70vh;'></iframe>

---
## Git for Windows

![Git for Windows](img/git-for-windows.png)

---
![Git bash](img/git-bash-windows-bin.png)

---
<!-- .slide: data-autofragments -->
## Git Bash (Windows)

- translacja ścieżek Windows na Linux
- konwersja plików "w locie"
- narzędzia:
  - shell (`bash`)
  - coreutils: `awk`, `sed`, `grep`...
  - `perl`, `GPG`

---
<!-- .slide: data-autofragments -->
## GitHub (2008)

- platforma web
- hosting free and open source

---
<!-- .slide: data-autofragments -->
## GitLab (2011)

- self-hosted GH clone
- od 2014 też jako usługa
- GitLab CI (2012, zintegrowane w 2015)

---
<!-- .slide: data-autofragments -->
## GitHub Actions (2018)

- CI/CD

---
<!-- .slide: data-autofragments -->
## Microsoft?

- własne produkty:
    - Visual SourceSafe
    - Team Foundation Server
    - Source Depot
- 2017 - [MS używa wewnętrznie gita](https://arstechnica.com/information-technology/2017/02/microsoft-hosts-the-windows-source-in-a-monstrous-300gb-git-repository/)
- 2018 - zakup GitHuba przez MS

---
<!-- .slide: data-autofragments -->
## BitKeeper?
- 2000 - powstanie
- 2002 - współpraca z dew. Linuksa
- 2005 - odebranie licencji dew. Linuksa
- 2016 - open source (Apache License 2)
- 2018 - discontinued

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/8SdAKwgHV48?si=-P48obiEs8icXvie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

------
# tig



---

# `tig --author`

---

# `tig katalog/`

---

# `tig --all`

------
# etckeeper

------
# pre-commit

------
# Podpisywanie commitów

`[SCREENSHOT HERE]`

---
## Generowanie klucza

(Tylko, jeśli nie mamy)

```
$ ssh-keygen -t ed25519
```

---
# Konfiguracja

```
$ git config --global user.signingkey "~/.ssh/id_ed25519.pub"
$ git config --global gpg.format ssh
$ git config --global commit.gpgsign true
```

---
# Upload klucza GitLab

![Klucz](img/gitlab-ssh-key.png)

---
# Upload klucza GitHub

---
# Weryfikacja

```
$ git cat-file -p master
```

------
# git worktree

------
# git filter-branch

------
# Gitea

------

[Koniec](./)

