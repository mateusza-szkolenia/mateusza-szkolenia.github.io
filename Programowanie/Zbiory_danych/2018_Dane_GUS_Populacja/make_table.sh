#!/bin/bash

cat <<'EOF'
| rok | data pozyskania | `SQL` | `SQLite` | `CSV` | `TXT` | `JSON` |
|-----|-----------------|-------|----------|-------|-------|--------|
EOF

for rok in 2018 2021
do
    printf "| %s | YYYY-MM-DD |" "$rok"
    for format in sql db csv txt json
    do
        printf "[[%s]](%s) |" "${format^^}" "$rok-dane-gus-populacja.$format"
    done
    printf "\n"
done
