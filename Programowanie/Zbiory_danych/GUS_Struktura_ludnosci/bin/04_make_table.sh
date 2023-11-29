#!/bin/bash

cat <<'EOF'
| rok | data pozyskania | `SQL` | `SQLite` | `CSV` | `TXT` | `JSON` |
|-----|-----------------|-------|----------|-------|-------|--------|
EOF

for rok in 2018 2021 2023
do
    read -r TODAY < "../data/$rok-dane-gus-populacja.date"

    printf "| %s | %s |" "$rok" "$TODAY"
    for format in sql db csv txt json
    do
        printf "[[%s]](%s) |" "${format^^}" "data/$rok-dane-gus-populacja.$format"
    done
    printf "\n"
done
