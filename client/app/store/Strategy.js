/**
 * Created by King on 04.07.2017.
 */
Ext.define('client.store.Strategy', {
    extend: 'Ext.data.Store',
    alias: 'store.strategy',
    fields: ['name', 'value'],

    data: [
        {name: 'Недвижимость', value: 'Недвижимость'},
        {name: 'Медицина', value: 'Медицина'},
        {name: 'Сырьё', value: 'Сырьё'}
    ]

});