#!/bin/bash

scriptname="runsu.py"

awk 'BEGIN{v=0;};/^```python/{v=1;next;};/^```$/{v=0;};v==1{print;}' < README.md > "$scriptname"

echo "-------BEGIN CODE--------"
cat "$scriptname"
echo "-------END CODE----------"

