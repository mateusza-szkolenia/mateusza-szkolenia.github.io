"use strict"

const display_ppm = () => {
    let f = document.querySelector("#ppmfile").files[0]
    let fr = new FileReader()
    fr.onloadend = function(e){
        window.PPMFILE = e.target.result
    }
    fr.readAsText(f);

};

