<!-- .slide: data-background-image="img/jesien-linuksowa-bg-gray.png" -->
<!-- .slide: data-background-size="contain" -->
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->

# Initramfs
<!-- .element: style="margin-top: 1em; margin-bottom: 0;" -->
## tajemniczy etap startu Linuksa
<!-- .element: style="margin-top: 0; font-size: 0.8em;" -->

Mateusz Adamowski
<!-- .element: style="font-size: 0.8em;" -->

Jesień Linuksowa 2026  
Kraków, 2026-10-23
<!-- .element: style="font-size: 0.8em;" -->

---
<!-- .slide: data-autofragments -->
## O mnie

- sysadmin (od 2005)
- programista (Python, Bash, JS, C)
- miłośnik Linuksa (od 2000)
- szkoleniowiec

------
<!-- .slide: data-background="#eee" -->

# initramfs

Komu to potrzebne?

---
<!-- .slide: data-autofragments -->

## Czy initramfs (initrd) jest potrzebny?

- Często nie
- Czasami nie

Ale po kolei...

------
# Bootowanie systemu

- UEFI / BIOS
- GRUB
- kernel + initrd

---
## BIOS

Umie wczytać MBR  
(446 bajtów)

---
## UEFI

- Tablica partycji
- FAT

---
## GRUB

- Tablica partycji
- FAT, ext4, XFS, ISO-9660
- *LVM, RAID, LUKS*

---
## initramfs

- minimalistyczny zestaw plików

------
<!-- .slide: data-autofragments -->
# initrd?

---
<!-- .slide: data-autofragments -->
- RD - ramdisk
- ramfs - RAM filesystem

------
# Budowa initramfs

- cpio

---

X-SCREENSHOT-INITRAMFS

------
# Busybox

------
# Budowa initrd

- mkfs

------

# Praca z initramfs

- lsinitramfs
- unmkinitramfs

------

# Use case #1: LUKS

- dropbear

------

# Use case #2: iptables

- iptables

------

# Use case #3

- wireguard

------

# Use case #4 notyfikacje

- curl/wget

------
# Slajdy?

[mateusza-szkolenia.github.io](https://mateusza-szkolenia.github.io/)

------

[Koniec](./)

