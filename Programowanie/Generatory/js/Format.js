'use strict';

const Format = {

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

    "CPP" : {
        "vector" : {
            "class" : 
                ( data, classname, vectorname ) => {
                    let klass_def = [
                        "#include <vector>",

                        "class " + classname + " { ",
                        "  public:",
                        Object
                            .keys( data[0] )
                            .map( k => [
                                k,
                                ({
                                    "number" : "double",
                                    "boolean" : "boolean",
                                    "string" : "std::string"
                                })[ typeof( data[0][k] ) ]
                            ])
                            .map( k => "    " + k[1] + " " + k[0] + ";")
                            .join("\n"),
                        "    " + classname + "(" + 
                        Object
                            .keys( data[0] )
                            .map( k => [
                                k,
                                ({
                                    "number" : "double",
                                    "boolean" : "boolean",
                                    "string" : "std::string"
                                })[ typeof( data[0][k] ) ]
                            ])
                            .map( k => k[1] + " " + k[0] )
                            .join(", ")
                        + "):",
                        Object
                            .keys( data[0] )
                            .map( k => [
                                k,
                                ({
                                    "number" : "double",
                                    "boolean" : "boolean",
                                    "string" : "std::string"
                                })[ typeof( data[0][k] ) ]
                            ])
                            .map( k => "      " + k[0] + "(" + k[0] +")" )
                            .join(",\n"),
                            "    {\n     /* Constructor */\n    };",
                        "};"
                    ].join("\n");
                    let vector_def = [
                        "std::vector<" + classname + "> " + vectorname + " { ",
                        data
                            .map( de => {
                                return "   { " + 
                                Object
                                    .values( de )
                                    .map( v => {
                                       return ( typeof( v ) == "string" )
                                        ? ( '"'+v.replace('"','\\"')+'"' )
                                        : v
                                    })
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
