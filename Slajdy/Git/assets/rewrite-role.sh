#!/bin/bash

set -e
set -x

role_url_f='git@example.com:my-company/%s.git'

orig_url=/home/mateusza/repos

function stop_here () {
    local x
    echo "STOPPING. EXIT SHELL TO CONTINUE"
    export PS1='checkpoint> '
    export PROMPT_COMMAND=''
    bash
    echo "RESUMING"
}

function generate_readme() {

local name="$1"
local desc="$2"

echo '# `'"$name"'` Ansible Role'
echo ''
echo "$desc"

}


readarray -t roles < "roles.list"


for role in "${roles[@]}"
do

    if [[ "$role" =~ ^# ]]; then
        continue
    fi

    IFS=":" read -r r1 r2 rdesc <<< "$role"

    if [[ -z "$r2" ]]; then
        r2="$r1"
    fi

    if [[ -z "$rdesc" ]]; then
        rdesc="Role $rdesc"
    fi

    r1san="${r1//-/_}"
    r2san="${r2//-/_}"

    r1dir="ROLE-$r1"
    r2dir="REPO-$r2"

    vtag="v$(date +%y.%m)"

    [[ -d "$r1dir" ]] && rm -rf "$r1dir"
    [[ -d "$r2dir" ]] && rm -rf "$r2dir"

    git clone "$orig_url" "$r1dir"
    printf -v repo_url "$role_url_f" "$r2"
    git clone "$repo_url" "$r2dir"

    # REMOVE UNWANTED FROM REPO copy
    cd "$r2dir"
    git add .
    git commit -m 'VPN-1944: Cleanup after role split mess'
    cd ..

    cd "$r1dir"
    export FILTER_BRANCH_SQUELCH_WARNING=1
    git filter-branch --subdirectory-filter "roles/$r1" -- --all
    #git filter-branch --subdirectory-filter "roles/ipxe-up*" -- --all

    git remote add gitlab "$repo_url"
    git remote add migration "../$r2dir"

    stop_here

    git tag -f DELETED
    git reset --hard DELETED^
    cp ../ansible_roles_cicd/.gitlab-ci.yml.EXAMPLE ./.gitlab-ci.yml

    stop_here

    git switch --orphan init

    generate_readme "$r2san" "$rdesc" > README.md
    git add README.md
    git commit -m 'VPN-1944: Role separation init'

    stop_here

    git switch master
    git rebase \
        --strategy-option theirs \
        init
    stop_here

    git branch -d init

    git fetch migration
    git branch master_split migration/master
    git switch master_split

#    git merge \
#        --allow-unrelated-histories \
#        --no-edit \
#        --strategy-option ours \
#         master
#
    if git rebase \
        --strategy-option ours \
        master
    then
        echo "Rebased"
    else
        while true
        do
            git add .
            GIT_EDITOR=true git rebase --continue && break
        done
    fi

    git switch master
    git merge master_split --no-edit
    git branch -D master_split

    cd ..

    for dir in "$r2dir/"*
    do
        cp -r "$dir" "$r1dir"
        cd "$r1dir"
        git add . || true
        git commit -m "PROBLEMS in $dir" || true
        cd ..
    done

    cd "$r1dir"
    git tag -f "$vtag"
    cd ".."

    echo "Final SHA1 compare"

    diff <(git -C "$r1dir" cat-file -p HEAD:) <( git -C "$r2dir" cat-file -p HEAD:)

    echo "REPO $r1 --> $r2 DONE"

done
