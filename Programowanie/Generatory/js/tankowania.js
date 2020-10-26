'use strict';

let GeneratorTankowania = {
    "parametry" : {
		"liczba_tankowan" : Random.int( 7, 25 ),
		"spalanie_min" : Random.float( 4.0, 7.0 ),
		"spalanie_max" : Random.float( 10.0, 15.0 ),
		"dni_min" : Random.int( 1, 5 ),
		"dni_max" : Random.int( 15, 30 ),
		"cena_min" : Random.float( 4.0, 4.2 ),
		"cena_max" : Random.float( 5.0, 5.3 ),
		"litr_min" : Random.float( 10, 30 ),
		"litr_max" : Random.float( 50, 70 )
    },

	generuj : function(){
		let droga = Random.int( 10000, 100000 );
		let data = Random.int( 200, 2000 );

		let tankowania = [];

        const sp_min = Random.float( this.parametry.spalanie_min, ( this.parametry.spalanie_max + this.parametry.spalanie_min ) / 2 );
        const sp_max = Random.float( ( this.parametry.spalanie_max + this.parametry.spalanie_min ) / 2, this.parametry.spalanie_max );

		for ( let i = 0; i < this.parametry.liczba_tankowan; i++ ){
			let spalanie = Random.float( sp_min, sp_max );
			let paliwo = Random.float( this.parametry.litr_min, this.parametry.litr_max );
			let cena = Random.float( this.parametry.cena_min, this.parametry.cena_max );
			droga += paliwo/spalanie * 100.0;
			data += Random.int( this.parametry.dni_min, this.parametry.dni_max );
			tankowania.push({
				data,
				droga : parseFloat( droga.toFixed(0) ),
				paliwo : parseFloat( paliwo.toFixed(2) ),
				cena : parseFloat( cena.toFixed(2) )
			});
		}

		return tankowania;
	}
}
