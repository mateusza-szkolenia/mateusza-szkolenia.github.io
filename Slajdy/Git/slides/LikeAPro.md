<!-- .slide: data-background="img/fundacja-sysops-devops-polska-bg-gray.png" -->
<!-- .slide: data-autofragments -->

# Git - Like a pro!

Mateusz Adamowski

SysOps/DevOps Meetup #73  
Warszawa, 2025-03-20

---
<!-- .slide: data-autofragments -->
## O mnie

- sysadmin (od 2005)
- programista (Python, Bash, JS, C)
- miłośnik Linuksa (od 2000)
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
- fatalna obsługa gałęzi i tagów

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
- brak kontroli integralności danych
- ograniczenia w obsłudze metadanych (np. `chmod`)

---
> Subversion has been the most pointless project ever started... Subversion used to say, 'CVS done right.' With that slogan there is nowhere you can go. There is no way to do CVS right.
>
> (Linus Torvalds)

---
<!-- .slide: data-background="#eee" -->
![Tux](img/tux.png) <!-- .element: style="height: 50vh;" -->

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
<!-- .slide: data-background="#eee" -->

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
<!-- .slide: data-background="#211" -->
## Flame wars

Flagowy projekt FLOSS zarządzany komercyjnym narzędziem.

vs

_I'll use the best tool for the job and, quite frankly, BitKeeper was it. (Torvalds)_

---
<!-- .slide: data-background="#522" -->
## Wycofanie licencji

(2005)

---
<!-- .slide: data-autofragments -->
## Powstanie Gita

- napisany w kilkanaście dni przez Linusa Torvaldsa
- języki: C, shell, perl
- narzędzia systemowe typu diff, patch

---

> Take CVS as an example of what not to do; if in doubt, make the exact opposite decision
>
> (Linus Torvalds)

---
<!-- .slide: data-autofragments -->
# Rozwój gita

- konkurencyjne narzędzia
  - Mercurial (`hg`)
  - Bazaar (`bzr`)
  - Fossil (SQLite)

---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#117" -->
## Windows?
<!-- .element: style="background: #fff; color: #117;" -->

- inne znaki końca linii
- nazwy plików, ścieżki
- prawa dostępu
- brak narzędzi shellowych
- wolniejszy system plików i tworzenie procesów

---
## windows problems

<iframe src='assets/faylor-email.html' style='width: 60vw; height: 70vh;'></iframe>

---
<!-- .slide: data-background="#eee" -->
## Git for Windows

![Git for Windows](img/git-for-windows.png)

---
<!-- .slide: data-background="#13a" -->
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
- 2005 - odebranie licencji deweloperom Linuksa
- 2016 - open source (Apache License 2)
- 2018 - discontinued

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/8SdAKwgHV48?si=-P48obiEs8icXvie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

------
# tig

---
<!-- .slide: data-background="#393" -->

_live demo_

---
## podsumowanie

- `tig --author=Torvalds`
- `tig plik`
- `tig katalog/`
- `tig ab3a83b89ab89`

---

# `tig katalog/`

---

# `tig --all`

------
# etckeeper

automatyczne wersjonowanie `/etc`

---
<!-- .slide: data-autofragments -->
## etckeeper zastosowanie

- serwery
- stacje robocze
- możliwość backupowania (push)
- identyfikacja niepożądanych zmian
- przywracanie pochopnych zmian
- rozliczalność adminów

---
<!-- .slide: data-autofragments -->
## etckeeper

- dostępny w większości dystrybucji
- integracja z menedżerem pakietów
- obsługa kilku VCS
- (ale `git` FTW!)

---
<!-- .slide: data-background="#393" -->

_live demo_

------
# Hooks

---
![lshooks](img/ls-hooks.png) <!-- .element: style="height: 60vh;" -->

---
<!-- .slide: data-autofragments -->
## Hooki w gicie

- skrypty
- uruchamiają się przed operacjami
- (lub po)
- przechowywane w `.git/hooks/`
- nie są zawartością repozytorium
- nie podlegają wersjonowaniu
- są niewygodne

---
# pre-commit

![precommit](img/pre-commit.png) <!-- .element: style="height: 40vh;" -->

---
<!-- .slide: data-autofragments -->
## Hooki pre-commit

- walidacja plików
  - składnia
  - nazwy i typy plików
  - rozmiar
- autoformatowanie i naprawianie plików
  - znaki końca linii
  - jednolity styl formatowania

---
<!-- .slide: data-autofragments -->
## Instalacja narzędzia

```shell
$ apt-get install pre-commit
```
<!-- .element style="font-size: 1.4em;" -->

alternatywnie:

- `brew install pre-commit`
- `pip install pre-commit`

---
## Dodanie do projektu

`.pre-commit-config.yaml`

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v5.0.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files
```

---
<!-- .slide: data-autofragments -->
## Integracja z repozytorium

```shell
$ pre-commit install
```
<!-- .element: style="font-size: 1em; margin: 1em;" -->

(Powoduje stworzenie hooka `pre-commit` w `.git/hooks/`)

---
## Uruchomienie (ręczne)

![precommit](img/pre-commit-run.png) <!-- .element: style="height: 50vh;" -->

---
## Uruchomienie (pełne)

![precommit](img/pre-commit-run-a.png) <!-- .element: style="height: 50vh;" -->

---
## Uruchomienie (commit)

![precommit](img/pre-commit-zmiany.png) <!-- .element: style="height: 50vh;" -->

---
<!-- .slide: data-autofragments -->
### Działanie

- walidacja
- edycja

---
<!-- .slide: data-autofragments -->
## Więcej hooków
- [black](https://github.com/psf/black-pre-commit-mirror) (formatowanie pythona)
- [ansible-lint](https://github.com/ansible/ansible-lint) (walidacja kodu ansible)
- [shellcheck](https://github.com/koalaman/shellcheck-precommit) (walidacja kodu skryptów shellowych)
- [pylint](https://pylint.pycqa.org/en/latest/user_guide/installation/pre-commit-integration.html) (walidacja kodu pythona)

---
<!-- .slide: data-background="#393" -->

_strona projektu_

------
# Podpisywanie commitów

~~GPG~~
----

![sign](img/ssh-sign-1.png)

---

![sign](img/ssh-sign-2.png)

---
## Generowanie klucza

```
$ ssh-keygen -t ed25519
```
<!-- .element: style="font-size: 1.3em;" -->

---
## Konfiguracja

```
$ git config --global user.signingkey "~/.ssh/id_ed25519.pub"
$ git config --global gpg.format ssh
$ git config --global commit.gpgsign true
```

---
### Upload klucza GitLab

![Klucz](img/gitlab-ssh-key.png)

---
## Upload klucza GitHub

![Klucz](img/github-ssh-key.png)

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

---

![Gitea](img/gitea-web.png)

---
<!-- .slide: data-autofragments -->
## Gitea

- alternatywa dla GitLaba i GitHuba
- self-hosted
- napisana w Go
- trywialna instalacja
- DB: SQLite, MySQL, Postgres
- obsługuje CI/CD

---
<!-- .slide: data-background="#393" -->

_live demo_

------
# Slajdy?

[mateusza-szkolenia.github.io](https://mateusza-szkolenia.github.io/)

---
<!-- .slide: data-background="img/fundacja-sysops-devops-polska-bg-gray.png" -->
<!-- .slide: data-autofragments -->
# Szkolenia

- **[Python dla administratorów](https://www.sysopspolska.pl/szkolenia/python/)**  
  15-16 maja 2025
- **Git**  
  _(w przygotowaniu)_

`https://www.sysopspolska.pl/szkolenia`

---

[Koniec](./)

