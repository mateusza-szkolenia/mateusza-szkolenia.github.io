'use strict';

let Random = {
    "int" :
        (a,b) =>
            a + Math.floor( Math.random() * ( b - a + 1 ) ),
    "elem" :
        function(a){
            return a[ this.int( 0, a.length - 1 ) ];
        },
    crypto : {
        "byte" :
            function(){
                return window.crypto.getRandomValues(new Uint8Array(1))[0]
            },
        "bytes" :
            function(n){
                return [ ... Array(n) ]
                    .fill()
                    .map( this.byte )
            }
    }
};

