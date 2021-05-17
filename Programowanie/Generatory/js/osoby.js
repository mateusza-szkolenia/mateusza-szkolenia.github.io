'use strict';

let GeneratorOsob = {
    "parametry" : {
        "liczba_osob" :
            Random.int(10,20),
        "powtarzalnosc_imion" :
            Random.float( 1.4, 1.7 ),
    },
    "imiona" : [
        ... Dane.imiona.męskie,
        ... Dane.imiona.żeńskie
    ],
    "uzywane_imiona" : function(){
        let n_imion = Math.round( this.parametry.liczba_osob / this.parametry.powtarzalnosc_imion );
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

        return [ ... Array( this.parametry.liczba_osob ) ]
            .fill()
            .map( () => ({
                "imie" :
                    Random.elem( uz_im ),
                "nazwisko" :
                    Random.elem( "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") ) + ".",
                "waga" :
                    [0,0,0]
                        .map( () => Random.float( 45, 120 ) )
                        .reduce( (a,b)=>a+b )/3,
                "wzrost" : 
                    [0,0,0]
                        .map( () => Random.float( 130, 210 ) )
                        .reduce( (a,b)=>a+b )/3,
                "rok_urodzenia" : 
                    [0,0,0]
                        .map( () => Random.float( 1900, 2020 ) )
                        .reduce( (a,b)=>a+b )/3
            }) )
            .map( x => ({
                imie: x.imie,
                nazwisko: x.nazwisko,
                waga: (~~(x.waga*10))/10,
                wzrost: (~~(x.wzrost))/100,
                rok_urodzenia: (~~(x.rok_urodzenia))
            })
            )
    }
}
