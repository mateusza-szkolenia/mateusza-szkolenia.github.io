'use strict';

window.setTimeout(
    () => {
        [
            'section[data-autofragments] li',
            'section[data-autofragments] p',
        ].forEach(sel => {
            document
                .querySelectorAll(sel)
                .forEach(x => x.classList.add('fragment'))
            })
    },
    1000
)