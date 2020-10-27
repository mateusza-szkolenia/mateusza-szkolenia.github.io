'use strict';

const Format = {

    'value' : 
        ( v, lang, typename ) =>
            ({
                "CPP" : {
                    "long" :
                        x => "" + x,
                    "double" :
                        x => "" + x,
                    "std::string" :
                        x => ( '"' + (""+x).replace('"','\\"') + '"' )
                },
                "SQL" : {
                    
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
            return [
                Object
                    .keys( data[0] )
                    .map( x => ["",x,""].join('"') )
                    .join(","),
                ... data.map( (de) =>
                    Object
                        .values( de )
                        .map( x => ["", (""+x).replace('"','""'),""].join('"') )
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
                            .map( x => 
                                x + "=" + '"' +   
                                (""+de[x])
                                    .replace("&","&amp;")
                                    .replace("<","&lt;")
                                    .replace("'","&apos;")
                                    .replace('"',"&quot;")
                                + '"'
                            )
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
                                .map( x => ["", (""+x).replace("'","''"),""].join("'") )
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
                                .map( x => ["", (""+x).replace("'","''"),""].join("'") )
                                .join(", ")
                            + ";"
                        )
                        .join("\n")
                }
        }
    }

}
