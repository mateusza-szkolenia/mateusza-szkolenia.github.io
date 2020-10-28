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
        [ "SQL INSERT VALUES", Format.SQL.INSERT.VALUES, [ Dx, Nx ] ],
        [ "SQL INSERT SELECT", Format.SQL.INSERT.SELECT, [ Dx, Nx ] ],
        [ "CSV", Format.CSV, [ Dx ] ],
        [ "CPP vector class", Format.CPP.vector.class, [ Dx, N1x.capitalizeFirstLetter(), Nx ] ],
        [ "C array struct", Format.C.array.struct, [ Dx, N1x.capitalizeFirstLetter(), Nx ] ],
        [ "XML Attributes", Format.XML.Attributes, [ Dx, N1x, Nx ]  ],
        [ "HTML table", Format.HTML5.table, [ Dx ] ]
    ];
    
    for ( x of xx ){
        let os = document.createElement("section")
        let oh = document.createElement('h2')
        let oo = document.createElement("pre")

        oh.innerText = x[0]
        os.setAttribute("id", "generated-" + x[0].replaceAll(" ","-") )
        oo.setAttribute("class","output " + x[0].replaceAll(" ","-") )
        oo.innerText = x[1]( ... x[2] )

        os.appendChild( oh )
        os.appendChild( oo )
        o.appendChild( os )
    }
}