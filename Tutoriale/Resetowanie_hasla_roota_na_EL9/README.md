# Resetowanie hasła roota na EL9

Procedura ta jest odmienna od standardowej, działającej na starszych wersjach EL, a także praktycznie wszystkich innych dystrybucjach Linuksa.

## GRUB

Uruchomić system z dodatkowym parametrem kernela: `rd.break`

## Shell

```
mount -o remount,rw /sysroot
chroot /sysroot
passwd
touch /.autorelabel
exit
```
