const GeneratorDanychTestowych = ( params ) => {
    const nav = document.querySelector( params.nav ) ?? (
        () => {
            let ooo = document.createElement("nav");
            document.body.appendChild( ooo );
            return ooo
        }
    )();

    const o = document.querySelector( params.output ) ?? (
        () => {
            let ooo = document.createElement("div");
            document.body.appendChild( ooo );
            return ooo
        }
    )();

    const Dx = params.dane;
    const Nx = params.nazwa;
    const N1x = params.nazwa1;

    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    const xx = [
        [ "python", Format.python, [ Dx, Nx ] ],
        [ "PHP", Format.PHP, [ Dx, '$' + Nx ] ],
        [ "JSON", Format.JSON, [ Dx ] ],
        [ "SQL INSERT VALUES", Format.SQL.INSERT.VALUES, [ Dx, Nx ] ],
        [ "SQL INSERT SELECT", Format.SQL.INSERT.SELECT, [ Dx, Nx ] ],
        [ "CSV", Format.CSV, [ Dx ] ],
        [ "CPP vector of classes", Format.CPP.vector.class, [ Dx, N1x.capitalizeFirstLetter(), Nx ] ],
        [ "C array of structs", Format.C.array.struct, [ Dx, N1x.capitalizeFirstLetter(), Nx ] ],
        [ "XML with attributes", Format.XML.Attributes, [ Dx, N1x, Nx ]  ],
        [ "HTML table", Format.HTML5.table, [ Dx ] ]
    ];
    
    for ( x of xx ){
        let gid =  "generated-" + x[0].replaceAll(" ","-")

        let navlink = document.createElement( "a" )
        navlink.innerText = "[" + x[0] + "]"
        navlink.href = "#" + gid

        let os = document.createElement("section")
        let oh = document.createElement('h2')
        let oo = document.createElement("pre")

        oh.innerText = x[0]
        os.setAttribute("id", gid )
        oo.setAttribute("class","output " + x[0].replaceAll(" ","-") )
        try {
            let generated = x[1]( ... x[2] )
            oo.innerText = generated
        }
        catch( error ){
            oo.classList.add("error")
            oo.innerText = error + "\n\n" + error.stack
        }

        os.appendChild( oh )
        os.appendChild( oo )
        o.appendChild( os )
        nav.appendChild( navlink )
    }
}