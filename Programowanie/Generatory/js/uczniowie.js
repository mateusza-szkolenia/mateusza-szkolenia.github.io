'use strict';

let GeneratorUczniow = {
    "parametry" : {
        "liczba_uczniow" :
            Random.int(10,20),
        "liczba_ocen" :
            Random.int(7,12),
        "powtarzalnosc_imion" :
            Random.float( 1.4, 1.7 ),
    },
    "imiona" : [
        ... Dane.imiona.męskie,
        ... Dane.imiona.żeńskie
    ],
    "uzywane_imiona" : function(){
        let n_imion = Math.round( this.parametry.liczba_uczniow / this.parametry.powtarzalnosc_imion );
        return [ ... Array( n_imion ) ]
            .fill()
            .map( () => Random.elem( this.imiona ) )
    },

    generuj : function(){
        const uz_im = (
            ( typeof this.uzywane_imiona === "function" )
                ? this.uzywane_imiona()
                : this.uzywane_imiona
        );

        return [ ... Array( this.parametry.liczba_uczniow ) ]
            .fill()
            .map( () => ({
                "imie" :
                    Random.elem( uz_im ),
                "nazwisko" :
                    Random.elem( "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") ) + ".",
                "oceny" : (
                    ( omin, omax ) => [ ... Array( this.parametry.liczba_ocen ) ]
                        .fill()
                        .map( () => Random.int( omin, omax ) )
                    )( Random.int( 1, 3 ), Random.int( 4, 6 ) )
                    .join(" ")
            }) )
    }
}
