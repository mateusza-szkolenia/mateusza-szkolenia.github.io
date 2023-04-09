#!/bin/bash

set -e

rok=2018

zbiory=(
    kandydaci_rady
    kandydaci_wbp
    komitety
    okregi
)

url_f='https://wybory2018.pkw.gov.pl/stat/pl/csv/%s.zip'

mkdir -p ../temp/"$rok"

cd ../temp/"$rok"

for plik in "${zbiory[@]}"
do
    printf -v url "$url_f" "$plik"
    wget "$url"
    unzip "$plik.zip"
done

db="temp.db"

[[ -e "$db" ]] && rm "$db" || true

{
    echo '.mode csv'
    echo '.separator ";"'
    for plik in "${zbiory[@]}"; do
        echo ".import $plik.csv $plik"
    done
} | sqlite3 "$db"

