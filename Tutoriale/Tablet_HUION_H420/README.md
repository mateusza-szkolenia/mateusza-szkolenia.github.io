# Tablet HUION H420

Tablet nie jest wykrywany przez środowisko GNOME. (bibliotekę `libwacom`).

Sprawdzić jak wykrywany jest tablet:

```shell
# lsusb

```

Zmodyfikować plik `/usr/share/libwacom/huion-h420.tablet`

```ini
...
DeviceMatch=usb:256c:006e:HUION H420 Pen;usb:256c:006e:HUION H420 Pad;usb:256c:006e:HUION H420;
#                                                                     ^^^^^^^^^^^^^^^^^^^^^^^^^
# dopisać zgodnie z tym, jak identyfikowany jest tablet
...
```
