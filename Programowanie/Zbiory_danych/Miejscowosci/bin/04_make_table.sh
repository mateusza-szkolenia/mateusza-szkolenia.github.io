#!/bin/bash

cat <<'EOF'
| rok | data pozyskania | `SQL` | `SQLite` | `CSV` | `TXT` | `JSON` | `Yaml` |
|-----|-----------------|-------|----------|-------|-------|--------|--------|
EOF

cd ../

for rok in 2021 2022 2023
do
    read -r TODAY < "data/$rok-polskie-miasta.date"

    printf "| %s | %s | " "$rok" "$TODAY"
    for format in sql db csv txt json yaml
    do
        printf "[[%s]](%s) |" "${format^^}" "data/$rok-polskie-miasta.$format"
    done
    printf "\n"
done
