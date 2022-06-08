# Blokowanie Snapd

Najnowsza wersja Ubuntu (22.04 LTS) wymusza instalację menedżera pakietów Snap.

Poniższy skrypt blokuje możliwość instalacji `snapd` przez APT-a.

```bash
#!/bin/bash

cat > /etc/apt/preferences.d/nosnap.pref << EOF
# To prevent repository packages from triggering the installation of Snap,
# this file forbids snapd from being installed by APT.
# For more information: https://linuxmint-user-guide.readthedocs.io/en/latest/snap.html

Package: snapd
Pin: release a=*
Pin-Priority: -10
EOF
```

## Instalacja Firefoksa ESR

```
sudo add-apt-repository ppa:mozillateam/ppa
```

