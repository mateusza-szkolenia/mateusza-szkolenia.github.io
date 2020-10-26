'use strict';

let GeneratorTankowania = {
    "parametry" : {
		"liczba_tankowan" : 20,
		"spalanie_min" : 6.0,
		"spalanie_max" : 12.0,
		"dni_min" : 2,
		"dni_max" : 20,
		"cena_min" : 4.2,
		"cena_max" : 5.1,
		"litr_min" : 35.0,
		"litr_max" : 55.0
    },

	generuj : function(){
		let droga = Random.int( 10000, 100000 );
		let data = Random.int( 200, 2000 );

		let tankowania = [];

		for ( let i = 0; i < this.parametry.liczba_tankowan; i++ ){
			let spalanie = Random.float( this.parametry.spalanie_min, this.parametry.spalanie_max );
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
