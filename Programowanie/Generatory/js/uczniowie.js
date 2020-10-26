'use strict';

let GeneratorUczniow = {
    "parametry" : {
        "liczba_uczniow" : 27,
        "liczba_ocen" : 12,
        "powtarzalnosc_imion" : 1.5,
    },
    "imiona" : {
        "m" : Dane.imiona.męskie,
        "ż" : Dane.imiona.żeńskie
    },
    "uzywane_imiona" : function(){
        let n_imion = Math.round( this.parametry.liczba_uczniow / this.parametry.powtarzalnosc_imion );

        let w = {};

        for ( const x of [ "m", "ż" ] ){
            w[x] = [ ... Array( n_imion ) ]
                .fill()
                .map( () => Random.elem( this.imiona[x] ) )
        }

        return w;
    },

    generuj : function(){
        const ui = (
            ( typeof this.uzywane_imiona === "function" )
                ? this.uzywane_imiona()
                : this.uzywane_imiona
        );

        return [ ... Array( this.parametry.liczba_uczniow ) ]
            .fill()
            .map( () => ({
                "imie" :
                    Random.elem( ui[ Random.elem( [ "m", "ż" ] ) ] ),
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
