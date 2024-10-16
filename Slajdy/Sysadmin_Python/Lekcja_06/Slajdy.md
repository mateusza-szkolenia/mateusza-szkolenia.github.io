Python dla sysadminów

# Lekcja 5

Mateusz Adamowski

------
<!-- .slide: data-autofragments -->
# API

Na przykładzie NetBoksa

------
# Przygotowanie śrosdowiska

---
## Instalacja

```bash

apt-get install docker.io docker-compose-v2
```

---
## Instalacja netboksa w dockerze

```bash
git clone -b release https://github.com/netbox-community/netbox-docker.git
cd netbox-docker
tee docker-compose.override.yml <<EOF
services:
  netbox:
    ports:
      - 8000:8080
EOF
docker compose pull
docker compose up
```

---
## Stworzenie konta

```bash
docker compose exec netbox /opt/netbox/netbox/manage.py createsuperuser
```

---
## Stworzenie przykładowych danych

- Tworzymy ręcznie dwa wpisy w IPAM
  - adres IP
  - zakres IP
---
