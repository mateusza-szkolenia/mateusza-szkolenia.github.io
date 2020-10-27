const GeneratorDanychTestowych = ( params ) => {
    const o = document.querySelector( params.output ) ?? (
        () => {
            let ooo = document.createElement("div");
            document.body.appendChild( ooo );
            return ooo
        }
    )()

    const xx = [
        [ "python", Format.python, [ D, N ] ],
        [ "JSON", Format.JSON, [ D ] ],
        [ "SQL-I-V", Format.SQL.INSERT.VALUES, [ D, N ] ],
        [ "SQL-I-S", Format.SQL.INSERT.SELECT, [ D, N ] ],
        [ "CSV", Format.CSV, [ D ] ],
    ];
    
    for ( x of xx ){
        let oo = document.createElement("pre")
        oo.setAttribute("id","output-" + x[0] )
        oo.innerText = x[1]( ... x[2] )
        o.appendChild( oo )
    }
}