'use strict'

const Clone = (x) => JSON.parse( JSON.stringify(x));

const Probe = ( data ) => {
    let records_limit = 100;

    const ProbeList = ( values ) => {
        let ret = ({
            homogeneous : null,
            type : null
        });
        ret.types = new Set( values.map( x => typeof(x) ) );
        ret.homogeneous = ret.types.size == 1;
        if ( ret.homogeneous ){
            ret.type = [ ... ret.types ][0]
        }

        return ret;
    };

    let headers = {};
    let compat = {
        "CPP" : {
            includes : [ "vector" ]
        },
        "C" : {
            includes : []
        },
        "CSharp" : {
            usings : [ "System.Collections.Generic" ]
        }
    };
    let empty_header = {
        "values" : [],
        "arrayvalues" : [],
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
                "Postgres" : null,
                "MSSQL" : null,
                "Oracle" : null
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
                headers[hdr].safename.CSharp = hdr.replaceAll(" ","_")
                headers[hdr].safename.SQL = hdr
                // TODO: more checks:
                // - digits
                // - other characters, etc
            }
            headers[hdr].values.push( de[hdr] )
        }
        count++;
        if ( count >= records_limit ){
            break;
        }
    }

    for ( let hdr of Object.keys( headers ) ){
        let header = headers[hdr];

        let probelist = ProbeList( header.values );

        if ( probelist.homogeneous ){
            header.type._native = probelist.type    
        }
        else {
            // TODO
            // Detect string & numbers situation and convert numbers to strings
            
        }

        if ( header.type._native === "object" ){
            if ( Array.isArray( header.values[0] ) ){
                header.type._native = "Array";
            }
            else {
                header.type._native = "Object";
            }
        }

        if ( header.type._native === "Array" ){
            header.arrayvalues = [];
            for ( let av of header.values ){
                header.arrayvalues = header.arrayvalues.concat( av )
            }
            let aprobe = ProbeList( header.arrayvalues )
            if ( aprobe.homogeneous ){
                header.structure = "Array"
                header.type._native = aprobe.type
                header.values = header.arrayvalues
            }

            console.log( "in header " + hdr +":", aprobe );

        }

        if ( header.type._native === "number" ){
            header.type._int = header.values
                .map( x => (x % 1) < 0.00000000001 )
                .reduce( (a,b) => a && b )
            header.primitive = true
            if ( header.type._int ){
                header.type.C = "long"
                header.type.CPP = "long"
                header.type.CSharp = "long"
                header.type.SQL.Generic = "INTEGER"
                // TODO
            }
            else {
                header.type.C = "double"
                header.type.CPP = "double"
                header.type.CSharp = "double"
                header.type.SQL.Generic = "DECIMAL"
                // TODO
            }
        }

        if ( header.type._native === "string" ){
            header.primitive = true
            header.type.C = "char *"
            header.type.CPP = "std::string"
            header.type.CSharp = "string"
            compat.CPP.includes.push("string")
            compat.CSharp.usings.push("System.Collections.Generic")
            header.type.SQL.Generic = "VARCHAR(" + 
                ( 2 << ( Math.log( header.strlen.max ) / Math.log( 2 ) + 1 ) ) +
                ")"
            // TODO
        }

        if ( header.type._native === "boolean" ){
            header.primitive = true
            header.type.C = "bool"
            compat.C.includes.push("stdbool.h")
            header.type.CPP = "bool"
            header.type.CSharp = "bool"
            header.type.SQL.Generic = "BOOLEAN"
            header.type.SQL.Oracle = "INT"
            header.type.SQL.MSSQL = "BIT"
        }

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


    }

    return {
        "headers" : headers,
        "compat" : compat
    }

}