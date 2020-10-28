'use strict';

const Format = {

    'value' : 
        ( v, lang, typename ) =>
            ({
                "CPP" : {
                    "long" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : ( "" + x ),
                    "double" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "0"
                            : ( "" + x ),
                    "std::string" :
                        x => ( typeof(x) === "undefined" || x === null ) ? "nullptr"
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
                "SQL" : {
                    
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
                        '  <' 
                        + elementname 
                        + ' '
                        + Object
                            .keys( de )
                            .map( x => x + "=" + Format.value( de[x], "XML", "attribute" ) )
                            .join(" ")
                        + ' />'
                    ),
                    '</' + rootname + '>'
                ].join("\n")
            }
    },

    "CPP" : {
        "vector" : {
            "class" : 
                ( data, classname, vectorname ) => {
                    let probe = Probe( data )
                    
                    let klass_def = [
                        "#include <vector>",
                        "",
                        "class " + classname + " { ",
                        "  public:",
                        ... Object
                            .values( probe.headers )
                            .map( hdr => "    " + hdr.type.CPP + " " + hdr.safename.CPP + ";" ),
                        "",
                        "    " + classname + "(" 
                            + Object
                                .values( probe.headers )
                                .map( hdr => hdr.type.CPP + " " + hdr.safename.CPP )
                                .join(", ")
                            + "):",
                        Object
                            .values( probe.headers )
                            .map( hdr => "      " + hdr.safename.CPP + "(" + hdr.safename.CPP + ")" )
                            .join(",\n"),
                        "    {",
                        "    };",
                        "};"
                    ].join("\n");

                    let vector_def = [
                        "std::vector<" + classname + "> " + vectorname + " { ",
                        data
                            .map( de => {
                                return "   { " + 
                                Object.values( probe.headers )
                                    .map( hdr => Format.value( de[ hdr.name ], "CPP", hdr.type.CPP ) )
                                    .join(", ")
                                + " }"
                            } )
                            .join(",\n"),
                        "};"
                    ].join("\n")
                    return klass_def + "\n" + vector_def;
                }
        }
    },

    "SQL" : {
        "INSERT" : {
            "VALUES" :
                ( data, table ) => {
                    return data
                        .map( (de) => 
                            "INSERT INTO "
                            + table 
                            + "( "
                            + Object
                                .keys( de )
                                .map( x => ["",x,""].join('"') )
                                .join(", ")
                            + " ) "
                            + "VALUES ( "
                            + Object
                                .values( de )
                                .map( x => ["", (""+x).replaceAll("'","''"),""].join("'") )
                                .join(", ")
                            + " );"
                        )
                        .join("\n")
                },
            "SELECT" :
                ( data, table ) => {
                    return data
                        .map( (de) => 
                            "INSERT INTO "
                            + table 
                            + "( "
                            + Object
                                .keys( de )
                                .map( x => ["",x,""].join('"') )
                                .join(", ")
                            + " ) "
                            + "SELECT "
                            + Object
                                .values( de )
                                .map( x => ["", (""+x).replaceAll("'","''"),""].join("'") )
                                .join(", ")
                            + ";"
                        )
                        .join("\n")
                }
        }
    }

}
