/**
 * Created by on 04.07.2017.
 */
Ext.define('client.store.Option', {
    extend: 'Ext.data.Store',
    alias: 'store.option',
    requires: [
        'client.model.Option'
    ],

    model: 'client.model.Option',

    storeId: 'OptionStore',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/options.json',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    filters: [],
    remoteFilter: true
});