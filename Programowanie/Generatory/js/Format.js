'use strict';

const Format = {

    'value' : 
        ( v, lang, typename ) =>
            ({
                "CPP" : {
                    "bool": 
                        x => ( typeof(x) === "undefined" || x === null ) ? "false"
                            : ( x ? "true" : false ),
                    "long" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : ( "" + x ),
                    "double" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : ( "" + x ),
                    "std::string" :
                        x => ( typeof(x) === "undefined" || x === null ) ? '""'
                            : ( '"' + (""+x).replaceAll('"','\\"') + '"' )
                },
                "C" : {
                    "bool" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "false"
                        : ( x ? "true" : "false "),
                    "int" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                        : ( 0 + x ),
                    "long" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : ( 0 + x ),
                    "double" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : ( 0.0 + x ),
                    "char *" :
                        x => ( typeof(x) === "undefined" || x === null ) ? '""'
                            : ( '"' + (""+x).replaceAll('"','\\"') + '"' )
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
                            + '"'
                },
                "HTML" : {
                    "escape" :
                        x => ("" + x )
                            .replaceAll("&","&amp;")
                            .replaceAll("<","&lt;")
                            .replaceAll(">","&gt;")          
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
        ( data, varname ) => [
            varname + " = [",
            data
                .map( ( de ) => "  " + JSON.stringify( de ) )
                .join(",\n"),
            "]"
        ].join("\n"),

    "JSON" : 
        ( data ) =>
            JSON.stringify( data, null, "  " ),

    "CSV" : 
        ( data ) => {
            let probe = Probe( data );
            console.log( probe )
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
                    '<?xml version="1.0" encoding="UTF-8">',
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
                                .map( hdr => '  <td>' + Format.value( de[ hdr.name ], "HTML", "escape" ) + '</td>' )
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
                        ... [ ... new Set( probe.compat.CPP.includes ) ]
                            .map( inc => "#include <" + inc + ">" ),
                        "",
                        "class " + classname + " { ",
                        "  public:",
                        ... Object
                            .values( probe.headers )
                            .map( hdr => "    " + hdr.type.CPP + " " + hdr.safename.CPP + ";" ),
                        "",
                        "    " + classname + "(" +
                            Object
                                .values( probe.headers )
                                .map( hdr => hdr.type.CPP + " " + hdr.safename.CPP )
                                .join(", ") +
                            "):",
                        Object
                            .values( probe.headers )
                            .map( hdr => "      " + hdr.safename.CPP + "(" + hdr.safename.CPP + ")" )
                            .join(",\n"),
                        "    {",
                        "    };",
                        "};",

                        "std::vector<" + classname + "> " + vectorname + " { ",
                        data
                            .map( de => {
                                return "   { " +
                                    Object.values( probe.headers )
                                        .map( hdr => Format.value( de[ hdr.name ], "CPP", hdr.type.CPP ) )
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
                            .map( hdr => "    " + hdr.type.C + ( hdr.type.C.endsWith("*") ? "": " " ) + hdr.safename.C + ";" ),
                        "};",

                        "const int " + arrayname + "_size = " + data.length + ";",

                        "struct " + structname + " " + arrayname + "[] = { ",
                        data.map( de => {
                            return "   { " + 
                            Object.values( probe.headers )
                                .map( hdr => Format.value( de[ hdr.name ], "C", hdr.type.C ) )
                                .join(", ")
                            + " }"
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
