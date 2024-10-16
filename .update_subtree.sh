#!/bin/bash

TREE=Slajdy/Sysadmin_Python/
SRC='../szkolenie-python-sysadmin'
SRC_BRANCH=master

git subtree -P "$TREE" pull "$SRC" "$SRC_BRANCH" --squash
