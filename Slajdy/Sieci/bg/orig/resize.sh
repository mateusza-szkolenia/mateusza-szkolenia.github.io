#!/bin/bash

for a in ~/Downloads/*-unsplash.jpg; do
    [[ -e "$a" ]] || continue
    printf -v b "%s" "$(basename "$a")"
    echo "$a -> $b"
    if [[ -e "$b" ]]; then
        echo "HAS $a as $b"
        continue
    fi
    cp "$a" "./$b"
done

for a in *.jpg; do
    [[ "../$a" -nt "$a" ]] && continue
	#./imageresize.exe -scale 1600 -quality 35 $a "../$a"
    convert -scale 1600 -quality 35 "$a" "../$a"
	du -sh "../$a"
done
