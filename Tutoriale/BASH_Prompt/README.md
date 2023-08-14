# BASH prompt

```bash
PROMPT_COMMAND=__prompt_cmd

__prompt_cmd() {
    local PIPES=("${PIPESTATUS[@]}")
    local EXIT="${PIPES[-1]}"
    PS1=""

    local RCol='\[\e[0m\]'

    local Red='\[\e[1;31m\]'
    local RedU='\[\e[4;31m\]'
    local Gre='\[\e[0;32m\]'
    local BYel='\[\e[1;33m\]'
    local BBlu='\[\e[1;34m\]'
    local Pur='\[\e[0;35m\]'

    if (( EXIT != 0 )); then
        PS1+="${Red}[ ${EXIT} ]${RCol} "
    fi

    if [[ "${#PIPES[@]}" -gt 1 ]]; then
        PS1+="${Red}[ ${RedU}${PIPES[*]}${RCol}${Red} ]${RCol} "
    fi
    
    PS1+="${Gre}\u${RCol}"
    PS1+="${RCol}@${BBlu}\h ${Pur}\W${BYel}$ ${RCol}"
}
```
