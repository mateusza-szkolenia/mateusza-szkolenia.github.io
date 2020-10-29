'use strict';

const Format = {

    'field' :
        ( h, lang ) => ({
            "CPP" : ( hdr ) => "    " + (
                hdr.structure === "Array" ? 
                    "std::vector<" + hdr.type.CPP + ">" :
                    hdr.type.CPP
                ) + " " + hdr.safename.CPP,
            "C" : ( hdr ) => "    " + (
                hdr.structure === "Array" ? 
                    hdr.type.C + " *" :
                    hdr.type.C + " "
                ) + hdr.safename.C,
        })[ lang ]( h )
    ,

    'value' : 
        ( v, lang, typename ) =>
            ({
                "CPP" : {
                    "bool": 
                        x => ( typeof(x) === "undefined" || x === null ) ? "false"
                            : ( x ? "true" : "false" ),
                    "long" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : x,
                    "double" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : x,
                    "std::string" :
                        x => ( typeof(x) === "undefined" || x === null ) ? '""'
                        : JSON.stringify( "" + x )
                },
                "C" : {
                    "bool" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "false"
                        : ( x ? "true" : "false "),
                    "int" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                        : x,
                    "long" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : x,
                    "double" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : x,
                    "char *" :
                        x => ( typeof(x) === "undefined" || x === null ) ? '""'
                            : JSON.stringify( "" + x )
                },
                "XML" : {
                    "attribute" :
                        x => '"'
                            + ("" + x )
                                .replaceAll("&","&amp;")
                                .replaceAll("<","&lt;")
                                .replaceAll(">","&gt;")
                                .replaceAll("'","&apos;")
                                .replaceAll('"',"&quot;")
                                .replaceAll("\n","&#10;")
                                .replaceAll("\r","&#13;")
                                .replaceAll("\t","&#9;")
                            + '"'
                },
                "HTML" : {
                    "escape" :
                        x => ("" + x )
                            .replaceAll("&","&amp;")
                            .replaceAll("<","&lt;")
                            .replaceAll(">","&gt;")          
                            .replaceAll("\n", "<br>")
                },
                "SQL" : {
                    "colname" :
                        x => ( [' ','"' ].filter( badchar => x.search( badchar ) >= 0 ).length > 0 ) ?
                            '"' + ( "" + x ).replaceAll( '"', '""' ) + '"' :
                            x,
                    "quote" : (x) => {
                        if ( typeof(x) === "boolean" ){
                            return ( x ? "TRUE" : "FALSE" )
                        } else {
                            return "'" + ( "" + x ).replaceAll( "'", "''" ) + "'"
                        }
                    }
                },
                "CSV" : {
                    "text" :
                        x => ( typeof(x) === "undefined" ) ? "" :
                            ( '"' + ("" + x ).replaceAll('"','""') + '"' )
                }
            })[ lang ][ typename ]( v ),

    'python' :
        ( data, varname ) => {
            let JSON2Python3Literal = ( o ) => {
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
                };
            };

            return [
                varname + " = [",
                data
                    .map( ( de ) => "  " + JSON2Python3Literal( de ) )
                    .join(",\n"),
                "]"
            ].join("\n")
        },

    'PHP' :
        ( data, varname ) => {
            let JSON2PHP7Literal = ( o ) => {
                if ( typeof(o) === "number" ){
                    return JSON.stringify( o )
                }
                if ( typeof(o) === "string" ){
                    return JSON.stringify( o ).replaceAll("$","\\$")
                }
                if ( typeof(o) === "boolean" ){
                    return ( o ? "TRUE" : "FALSE" )
                }
                if ( typeof(o) === "object" ){
                    if ( o === null ){
                        return "NULL"
                    }
                    if ( Array.isArray(o) ){
                        return "[ " +
                            o.map( ae => JSON2PHP7Literal( ae ) ).join(", ") +
                            " ]"
                    }
                    else {
                        return "[ " + 
                            Object.entries( o )
                                .map( oe => JSON2PHP7Literal( ""+oe[0]) + " => " + JSON2PHP7Literal( oe[1] ) )
                                .join( ", " ) +
                            " ]"
                    }
                };
            };

            return [
                varname + " = [",
                data
                    .map( ( de ) => "  " + JSON2PHP7Literal( de ) )
                    .join(",\n"),
                "];"
            ].join("\n")
        },

    "JSON" : 
        ( data ) =>
            JSON.stringify( data, null, "  " ),

    "CSV" : 
        ( data ) => {
            let probe = Probe( data );
            return [
                Object
                    .values( probe.headers )
                    .map( hdr => Format.value( hdr.name, "CSV", "text" ) )
                    .join(","),
                ... data.map( (de) =>
                    Object
                        .values( probe.headers )
                        .map( hdr => Format.value( de[ hdr.name ], "CSV", "text" ) )
                        .join(",")        
                )
            ].join("\n")
        },

    "XML" : {
        "Attributes" :
            ( data, elementname, rootname ) => {
                return [
                    '<?xml version="1.0" encoding="UTF-8" ?>',
                    '<' + rootname + '>',
                    ... data.map( (de) =>
                        '  <' + elementname + ' ' +                        
                        Object
                            .keys( de )
                            .map( x => x + "=" + Format.value( de[x], "XML", "attribute" ) )
                            .join(" ") +
                        ' />'
                    ),
                    '</' + rootname + '>'
                ].join("\n")
            }
    },
    
    "HTML5" : {
        "table" :
            ( data ) => {
                let probe = Probe( data );

                return [
                    "<table>",
                    " <tr>",
                    ... Object.values( probe.headers )
                        .map( hdr => '  <th>' + Format.value( hdr.name, "HTML", "escape" ) + '</th>' ),
                    " </tr>",
                    ... data.map( de => 
                        [
                            " <tr>",
                            Object.values( probe.headers )
                                .map( hdr => {
                                    return '  <td>' + (
                                    ( hdr.structure === "Array" ) ?
                                        "<ul>" + 
                                            de[ hdr.name ]
                                                .map( ae => "<li>" + Format.value( ae, "HTML", "escape" ) + "</li>" )
                                                .join("") +
                                        "</ul>"
                                        : Format.value( de[ hdr.name ], "HTML", "escape" )
                                    ) + '</td>'
                                }
                                )
                                .join("\n"),
                            
                            " </tr>"
                        ].join("\n")
                    ),
                    "</table>"
                ].join("\n");
            }
    },

    "CPP" : {
        "vector" : {
            "class" : 
                ( data, classname, vectorname ) => {
                    let probe = Probe( data );
                    
                    return [
                        // includes
                        ... [ ... new Set( probe.compat.CPP.includes ) ]
                            .map( inc => "#include <" + inc + ">" ),
                        "",
                        // class definition
                        "class " + classname + " { ",
                        "  public:",
                        ... Object
                            .values( probe.headers )
                            .map( hdr => Format.field( hdr, "CPP" ) + ";" ),
                        /*
                        "",
                        // constructor
                        "    " + classname + "(" +
                        Object
                            .values( probe.headers )
                            .map( hdr => Format.field( hdr, "CPP" ) )
                            .join(", ") +
                        "):",
                        Object
                            .values( probe.headers )
                            .map( hdr => "      " + hdr.safename.CPP + "(" + hdr.safename.CPP + ")" )
                            .join(",\n"),
                        "    {",
                        "    };",
                        */
                        "};",

                        "std::vector<" + classname + "> " + vectorname + " { ",
                        data
                            .map( de => {
                                return "   { " +
                                    Object.values( probe.headers )
                                        .map( hdr => 
                                            (
                                                hdr.structure === "Array" ?
                                                    "{ " + de[ hdr.name ]
                                                        .map ( dee => Format.value( dee, "CPP", hdr.type.CPP ) )
                                                        .join(", ") + " }":
                                                    Format.value( de[ hdr.name ], "CPP", hdr.type.CPP )
                                            )
                                        )
                                        .join(", ") +
                                    " }"
                            } )
                            .join(",\n"),
                        "};"

                    ].join("\n")
                }
        }
    },

    "C" : {
        "array" : {
            "struct" : 
                ( data, structname, arrayname ) => {
                    let probe = Probe( data )
                    
                    return [
                        ... [ ... new Set( probe.compat.C.includes ) ]
                            .map( inc => "#include <" + inc + ">" ),
                        "",
                        "struct " + structname + " { ",
                        ... Object
                            .values( probe.headers )
                            .map( hdr => Format.field( hdr, "C" ) + ";" ),
                        ... Object
                            .values( probe.headers )
                            .filter( hdr => hdr.structure === "Array" )
                            .map( hdr => ({
                                "type" : { "C" : "int" },
                                "safename" : { "C" : hdr.safename.C + "_len" }
                            }) )
                            .map( hdr => Format.field( hdr, "C" ) + ";" ),
                        "};",

                        "const int " + arrayname + "_size = " + data.length + ";",

                        "struct " + structname + " " + arrayname + "[] = { ",
                        data.map( de => {
                            return "   { " +
                                [ ... Object.values( probe.headers )
                                    .map( hdr => 
                                        (
                                            hdr.structure === "Array" ?
                                                "("+hdr.type.C+"[]){ " + de[ hdr.name ]
                                                    .map ( dee => Format.value( dee, "C", hdr.type.C ) )
                                                    .join(", ") + " }":
                                                Format.value( de[ hdr.name ], "C", hdr.type.C )
                                        )
                                    ),
                                ... Object.values( probe.headers )
                                .filter( hdr => hdr.structure === "Array" )
                                .map( hdr => Format.value( de[ hdr.name ].length, "C", "int" ) )
                                ]
                                .join(", ") +
                                " }"
                            } )
                            .join(",\n"),
                        "};"

                    ].join("\n")

                }
        }
    },

    "SQL" : {
        "INSERT" : {
            "VALUES" :
                ( data, table ) => {
                    let probe = Probe( data );

                    return [
                        "CREATE TABLE " + table +"(",
                        Object.values( probe.headers )
                            .map( hdr => " " + hdr.safename.SQL + "  " + hdr.type.SQL.Generic )
                            .join(",\n"),
                        ");",
                        ... data.map( (de) =>
                            "INSERT INTO " + table + "(" +
                            Object.keys( de )
                                .map( colname => Format.value( colname, "SQL", "colname" ) )
                                .join(", ") +
                            ") VALUES ( " +
                            Object.values( de )
                                .map( colname => Format.value( colname, "SQL", "quote" ) )
                                .join(", ") +
                            ");"
                        )
                    ].join("\n")
                },
            "SELECT" :
                ( data, table ) => {
                    let probe = Probe( data );

                    return [
                        "CREATE TABLE " + table +"(",
                        Object.values( probe.headers )
                            .map( hdr => " " + hdr.safename.SQL + "  " + hdr.type.SQL.Generic )
                            .join(",\n"),
                        ");",
                        ... data.map( (de) =>
                            "INSERT INTO " + table + "(" +
                            Object.keys( de )
                                .map( colname => Format.value( colname, "SQL", "colname" ) )
                                .join(", ") +
                            ") SELECT " +
                            Object.values( de )
                                .map( colname => Format.value( colname, "SQL", "quote" ) )
                                .join(", ") +
                            ";"
                        )
                    ].join("\n")
                }
        }
    }

}
