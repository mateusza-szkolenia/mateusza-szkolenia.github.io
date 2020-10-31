const GeneratorDanychTestowych = ( params ) => {

    const doc = ( () => {
        let o = document.createElement("div")
        o.classList.add("doc")
        document.body.prepend( o )
        return o
    })();

    const nav = ( () => {
        let o = document.createElement("nav");
        o.classList.add("navi")
        document.querySelector('.doc').appendChild( o );
        return o
    })();

    const h1 = ( () => {
        let o = document.createElement("h1");
        document.querySelector('.navi').appendChild( o );
        document.querySelector('.navi').appendChild( document.createTextNode(" ") );
        return o
    })();

    const o = ( () => {
        let o = document.createElement("div");
        o.classList.add("code")
        document.querySelector('.doc').appendChild( o );
        return o
    })();

    const Dx = params.dane;
    const Nx = params.nazwa;
    const N1x = params.nazwa1;

    h1.innerText = ( a => a.charAt(0).toUpperCase() + a.slice(1) )( params.nazwa )

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
        [ "C# list of classes", Format.CSharp.List.class, [ Dx, N1x.capitalizeFirstLetter(), Nx ] ],
        [ "XML with attributes", Format.XML.Attributes, [ Dx, N1x, Nx ]  ],
        [ "HTML table", Format.HTML5.table, [ Dx ] ]
    ];
    
    for ( x of xx ){
        let gid =  "generated-" + x[0].replaceAll(" ","-")

        let navlink = ( () => {
            let o = document.createElement( "a" )
            o.innerText = "[" + x[0] + "]"
            o.href = "#" + gid
            return o
        } )();

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
        if ( x[0].search("HTML") >= 0 ){
            let ot = document.createElement("div")
            ot.innerHTML = oo.innerText
            os.appendChild( ot )
            ot.querySelector("table").setAttribute("border",1)
        }
        os.appendChild( oo )
        o.appendChild( os )
        nav.appendChild( navlink )
        nav.appendChild( document.createTextNode(" "))
        nav.classList.add("navi")
        o.classList.add("code")
        
    }
}