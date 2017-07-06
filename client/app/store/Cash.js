/**
 * Created by nabokov on 05.07.2017.
 */
Ext.define('client.store.Cash', {
    extend: 'Ext.data.Store',
    alias: 'store.cash',
    fields: ['name', 'value'],

    data: [
        {name: 'USD', value: 'USD'},
        {name: 'EUR', value: 'EUR'},
        {name: 'RUB', value: 'RUB'}
    ]

});