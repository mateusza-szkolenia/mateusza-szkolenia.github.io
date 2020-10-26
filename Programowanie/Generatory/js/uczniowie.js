'use strict';

let GeneratorUczniow = {
    "parametry" : {
        "liczba_uczniow" : 1000,
        "liczba_ocen" : 12,
        "powtarzalnosc_imion" : 2.9,
    },
    "imiona" : { 
        "m" : [ 
            "Piotr", "Michał", "Andrzej", "Mateusz",
            "Dariusz", "Maciej", "Wiktor", "Paweł",
            "Jacek", "Julian", "Jakub", "Artur",
            "Tomasz", "Karol", "Maksymilian", "Barnaba",
            "Kuba", "Jarema", "Kosma", "Bonawantura",
            "Marek", "Filip", "Borys", "Janusz"
        ],
        "ż" : [
            "Magdalena", "Anna", "Justyna", "Agnieszka",
            "Alicja", "Wiktoria", "Amelia", "Monika",
            "Marta", "Katarzyna", "Joanna", "Izabela",
            "Iwona", "Ilona", "Margaret", "Ester", "Ingrid",
            "Dolores", "Miriam", "Natalia"
        ]
    },
    "uzywane_imiona" : function(){
        let n_imion = Math.round( this.parametry.liczba_uczniow / this.parametry.powtarzalnosc_imion );

        return {
            "m" : [ ... Array( n_imion ) ]
                .fill()
                .map( () => Random.elem( this.imiona['m'] ) ),
            "ż" : [ ... Array( n_imion ) ]
                .fill()
                .map( () => Random.elem( this.imiona['ż'] ) )
        }
    },

    generuj : function(){
        let ui = (
            ( typeof this.uzywane_imiona === "function" )
                ? this.uzywane_imiona()
                : this.uzywane_imiona
        );

        return [ ... Array( this.parametry.liczba_uczniow ) ]
            .fill()
            .map(() => ({
                "imie" :
                    Random.elem( ui[ Random.elem( [ "m", "ż" ] ) ] ),
                "nazwisko" :
                    Random.elem( "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") ) + ".",
                "oceny" : (
                    ( omin, omax ) => [ ... Array( this.parametry.liczba_ocen ) ]
                        .fill()
                        .map( () => Random.int( omin, omax ) )
                    )( Random.int( 1,3 ), Random.int( 4, 6 ) )
                    .join(" ")
            }) )
    }
}

document.querySelector("body").appendChild( 
    ( () => {
        let p = document.createElement("pre") 
        p.innerText = JSON.stringify( GeneratorUczniow.generuj(), null, 2  )
        return p
    } )( )
 );
