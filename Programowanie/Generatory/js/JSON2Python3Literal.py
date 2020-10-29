let JSON2Python3Literal = ( oo ) => {
    ( o ) => {
    if ( typeof(o) === "number" ){
        return JSON.stringify( o )
    }
    if ( typeof(o) === "string" ){
        return JSON.stringify( o )
    }
    if ( typeof(o) === "boolean" ){
        return ( o ? "True" : "False" )
    }
    if ( typeof(o) === "object" ){
        if ( o === null ){
            return "None"
        }
        if ( Array.isArray(o) ){
            return "[ " +
                o.map( ae => JSON2Python3Literal( ae ) ).join(", ") +
                " ]"
        }
        else {
            return "{ " + 
                Object.entries( o )
                    .map( oe => JSON.stringify( ""+oe[0]) + " : " + JSON2Python3Literal( oe[1] ) )
                    .join( ", " ) +
                " }"
        }
    }


}