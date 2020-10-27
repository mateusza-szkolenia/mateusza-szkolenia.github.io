const GeneratorDanychTestowych = ( params ) => {
    const o = document.querySelector( params.output ) ?? (
        () => {
            let ooo = document.createElement("div");
            document.body.appendChild( ooo );
            return ooo
        }
    )()

    const Dx = params.dane;
    const Nx = params.nazwa;
    const N1x = params.nazwa1;

    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    const xx = [
        [ "python", Format.python, [ Dx, Nx ] ],
        [ "JSON", Format.JSON, [ Dx ] ],
        [ "SQL-I-V", Format.SQL.INSERT.VALUES, [ Dx, Nx ] ],
        [ "SQL-I-S", Format.SQL.INSERT.SELECT, [ Dx, Nx ] ],
        [ "CSV", Format.CSV, [ Dx ] ],
        [ "CPP-V-C", Format.CPP.vector.class, [ Dx, N1x.capitalizeFirstLetter(), Nx ] ],
    ];
    
    for ( x of xx ){
        let oo = document.createElement("pre")
        oo.setAttribute("id","output-" + x[0] )
        oo.innerText = x[1]( ... x[2] )
        o.appendChild( oo )
    }
}