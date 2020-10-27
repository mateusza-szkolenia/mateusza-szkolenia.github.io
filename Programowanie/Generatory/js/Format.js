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
                Object.keys( data[0] ).map( x => ["",x,""].join('"') ).join(","),
                ... data.map( (de) =>
                    Object.values( de ).map( x => ["", (""+x).replace('"','""'),""].join('"') ).join(",")        
                )
            ].join("\n")
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
                            + Object.keys( de ).map( x => ["",x,""].join('"') ).join(", ")
                            + " ) "
                            + "VALUES ( "
                            + Object.values( de ).map( x => ["", (""+x).replace("'","''"),""].join("'") ).join(", ")
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
                            + Object.keys( de ).map( x => ["",x,""].join('"') ).join(", ")
                            + " ) "
                            + "SELECT "
                            + Object.values( de ).map( x => ["", (""+x).replace("'","''"),""].join("'") ).join(", ")
                            + ";"
                        )
                        .join("\n")
                },
        }
    }

}
