#!/bin/bash

TREE=Slajdy/Sysadmin_Python/
SRC=subtree_sysadmin_python
SRC_BRANCH=master

git subtree --prefix "$TREE" pull "$SRC" "$SRC_BRANCH" --squash
