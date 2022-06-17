# 24: RHEL i pochodne

------
<!-- .slide: data-autofragments -->
## Klony RHEL

* CentOS
* CentOS Stream
* RockyLinux
* AlmaLinux
* Oracle Linux
* ...

------
<!-- .slide: data-autofragments -->
## Dlaczego?

RHEL - komercyjne wolne oprogramowanie

---
## Ochronie podlegają

- nazwa i logo
- skompilowane paczki

---
## Ochronie nie podlega:

- kod źródłowy

---
**Każdy może legalnie skopiować i wydać swoją wersję.**

---
<!-- .slide: data-background="#fff" -->
![Praca domowa](img/pracadomowa.jpg)

------
<!-- .slide: data-autofragments -->
## CentOS

- 2004
- klon RHEL
- całkowicie kompatybilny
- darmowy

---
<!-- .slide: data-autofragments -->
## CentOS - różnice

- podmiana nazwy, logo, kolorów, tapet
- własna kompilacja
- własne repozytoria

---
<!-- .slide: data-autofragments -->
## CentOS - kalendarium

| wersja | RHEL       | CentOS     | opóźnienie |
|--------|------------|------------|------------|
| 2.1    | 2002-05-17 | 2004-05-14 |        728 |
| 3.1    | 2003-10-23 | 2004-03-19 |        148 |
| 3.3    | 2004-09-03 | 2004-09-17 |         14 |
| ...    | ...        | ...        | ...        |
| 4.0    | 2005-02-14 | 2005-03-09 |         23 |
| 5.0    | 2007-03-14 | 2007-04-12 |         28 |
| 6.0    | 2010-11-10 | 2011-07-10 |        242 |
| 7.0    | 2014-06-10 | 2014-07-07 |         27 |
| 8.0    | 2019-05-07 | 2019-09-24 |        140 |

<style> #centos---kalendarium + table { font-size: 0.55em; } </style>

------
<!-- .slide: data-autofragments -->
## Przepływ poprawek

deweloperzy → testerzy → RHEL → CentOS

- klienci RedHata dostawali poprawki szybciej
- ... również te niedoskonałe
- CentOS od razu wdrażał poprawione poprawki

---
<!-- .slide: data-autofragments -->
## CentOS - Fundacja

- z początku niezależna od RedHata
- RedHat Inc. zaproponował finansowanie...
- ... w zamian za umieszczenie swoich ludzi w zarządzie

*What can go wrong?*

---
<!-- .slide: data-autofragments -->
## CentOS Stream

- dodatkowa edycja CentOS-a
- dostawała poprawki przed RHEL (tzw. *upstream*)
- poprawki → CentOS Stream → RHEL → CentOS

---
<!-- .slide: data-autofragments -->
## CentOS is dead

Grudzień 2020: "zarząd" fundacji postanawia:
- zakończenie rozwoju CentOS
- kontynuacja rozwoju CentOS Stream

---
<!-- .slide: data-background="#fff" -->
![friendship ended](img/friendship-ended-with-centos.png)

---
<!-- .slide: data-autofragments -->
## Koniec wsparcia CentOS

| wersja | RHEL       | CentOS     |
|--------|------------|------------|
| 7      | 2024-06-30 | 2024-06-30 |
| 8      | 2029-05-01 | 2021-12-31 |

CentOS Stream - cały czas wspierany

<style> #koniec-wsparcia-centos + table tr:nth-child(2) td:nth-child(3) { color: #f33; } </style>

------
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#fff" -->
## AlmaLinux i Rocky Linux

<div>
<img src='img/almalinux.png'>
<img src='img/rockylinux.png'>
</div>

Tylko wersje od 8.3 wzwyż.

<style>
#almalinux-i-rocky-linux { display: none; }
#almalinux-i-rocky-linux + div { display: flex; justify-content: space-around; }
#almalinux-i-rocky-linux + div img { width: 40%; }
</style>

---

*Rocky Linux is an open-source enterprise operating system designed to be 100% bug-for-bug compatible with Red Hat Enterprise Linux®.*

---
## kalendarium AlmaLinux

| wersja | RHEL       | AlmaLinux  | opóźnienie |
|--------|------------|------------|------------|
| 8.3    | 2020-11-03 | 2021-03-30 |        147 |
| 8.4    | 2021-05-18 | 2021-05-26 |          8 |
| 8.5    | 2021-11-09 | 2021-11-12 |          3 |
| 8.6    | 2022-05-10 | 2022-05-12 |          2 |
| 9.0    | 2022-05-17 | 2022-05-26 |          9 |

---
## kalendarium Rocky Linux

| wersja | RHEL       | Rocky Linux| opóźnienie |
|--------|------------|------------|------------|
| 8.3    | 2020-11-03 | ...        |        ... |
| 8.4    | 2021-05-18 | 2021-06-21 |         34 |
| 8.5    | 2021-11-09 | 2021-11-15 |          6 |
| 8.6    | 2022-05-10 | 2022-05-16 |          6 |
| 9.0    | 2022-05-17 | ...        | ...        |

------
[Powrót do dystrybucji](Dystrybucje.html#/10/1)

[Koniec](./)
