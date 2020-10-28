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
                "Generic" : null,
                "SQLite" : null,
                "MySQL" : null,
                "Postgres" : null
            }
        },
        "name" : null,
        "safename" : {
            "C" : null,
            "CPP" : null,
            "SQL" : null
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
        "strlen" : {
            "min" : null,
            "max" : null
        }
    }

    let count = 0;

    for ( let de of data ){
        for ( let hdr of Object.keys( de ) ){
            if ( ! ( hdr in headers ) ){
                headers[hdr] = Clone( empty_header )
                headers[hdr].name = hdr
                headers[hdr].safename.C = hdr.replaceAll(" ","_")
                headers[hdr].safename.CPP = hdr.replaceAll(" ","_")
                headers[hdr].safename.SQL = hdr
                // TODO: more checks:
                // - digits
                // - other characters, etc
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
            let strlen = ("" + v).length
            if ( header.strlen.min === null || v < header.strlen.min ){
                header.strlen.min = strlen
            }
            if ( header.strlen.max === null || v > header.strlen.max ){
                header.strlen.max = strlen
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
                header.type.SQL.Generic = "INTEGER"
                // TODO
            }
            else {
                header.type.C = "double"
                header.type.CPP = "double"
                header.type.SQL.Generic = "FLOATING POINT"
                // TODO
            }
        }

        if ( header.type._native === "string" ){
            header.primitive = true
            header.type.C = "char *"
            header.type.CPP = "std::string"
            header.type.SQL.Generic = "VARCHAR(" + 
                ( 2 << ( Math.log( header.strlen.max ) / Math.log( 2 ) + 1 ) ) +
                ")"
            // TODO
        }

    }


    return {
        "headers" : headers
    }

}