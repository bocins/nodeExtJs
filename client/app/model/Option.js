/**
 * Created by on 04.07.2017.
 */
function dateConvert(value) {
    return Ext.Date.format(Ext.Date.parse(value, "d.m.Y"), "d.m.Y");
}

function dateStartSaleConvert(v, record) {
    return dateConvert(record.data.dateStartSale);
}

function dateEndSaleConvert(v, record) {
    return dateConvert(record.data.dateEndSale);
}

Ext.define('client.model.Option', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'strategy', type: 'string'},
        {name: 'idOption', type: 'int'},
        {name: 'baseIndex', type: 'int'},
        {name: 'versionCod', type: 'int'},
        {name: 'currency', type: 'string'},
        {name: 'amount', type: 'string'},
        {
            name: 'dateStartSale',
            type: 'date',
            convert: dateStartSaleConvert

        },
        {
            name: 'dateEndSale',
            type: 'date',
            convert: dateEndSaleConvert
        }
    ]

    /*
     Uncomment to add validation rules
     validators: {
     age: 'presence',
     name: { type: 'length', min: 2 },
     gender: { type: 'inclusion', list: ['Male', 'Female'] },
     username: [
     { type: 'exclusion', list: ['Admin', 'Operator'] },
     { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
     ]
     }
     */

    /*
     Uncomment to add a rest proxy that syncs data with the back end.
     proxy: {
     type: 'rest',
     url : '/users'
     }
     */
});