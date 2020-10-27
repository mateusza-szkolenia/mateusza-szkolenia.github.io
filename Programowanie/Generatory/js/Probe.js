'use strict'

const Clone = (x) => JSON.parse( JSON.stringify(x));

const Probe = ( data ) => {
    let records_limit = 100;
    let headers = {};
    let empty_header = {
        "values" : [],
        "primitive" : null,
        "homogeneous" : null,
        "structure" : null,
        "type" : {
            "_native" : null,
            "_int" : null,
            "C" : null,
            "CPP" : null,
            "SQL" : {
                "SQLite" : null,
                "MySQL" : null,
                "Postgres" : null
            }
        },
        "compatible" : {
            "C" : true,
            "CPP" : true,
            "SQL" : true
        },
        "range" : {
            "min" : null,
            "max" : null
        },
        "length" : {
            "min" : null,
            "max" : null
        }
    }

    let count = 0;

    for ( let de of data ){
        for ( let hdr of Object.keys( de ) ){
            if ( hdr in headers ){
            }
            else {
                headers[hdr] = Clone( empty_header )
            }
            headers[hdr]["values"].push( de[hdr] ) 
        }
        count++;
        if ( count >= records_limit ){
            break;
        }
    }

    for ( let hdr of Object.keys( headers ) ){
        let header = headers[hdr];
        for ( let v of header.values ){
            // Find min/max
            if ( header.range.min === null || v < header.range.min ){
                header.range.min = v
            }
            if ( header.range.max === null || v > header.range.max ){
                header.range.max = v
            }
        }
        let vtypes = new Set( header.values.map( x => typeof(x) ) );
        header.homogeneous = vtypes.size == 1;        

        if ( header.homogeneous ){
            header.type._native = [ ... vtypes ][0]
            header.type._int = header.values.map( x => (x % 1) < 0.000000001 ).reduce( (a,b) => a && b )
        }
        if ( header.type._native === "number" ){
            header.primitive = true
            if ( header.type._int ){
                header.type.C = "long"
                header.type.CPP = "long"
                header.type.SQL.SQLite = "INTEGER"
                // TODO
            }
            else {
                header.type.C = "double"
                header.type.CPP = "double"
                header.type.SQL.SQLite = "FLOATING POINT"
                // TODO
            }
        }

        if ( header.type._native === "string" ){
            header.primitive = true
            header.type.C = "char *"
            header.type.CPP = "std::string"
            header.type.SQL.SQLite = "VARCHAR()"
            // TODO
        }

    }


    return {
        "headers" : headers
    }

}