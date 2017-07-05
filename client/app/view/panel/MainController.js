/**
 * Created by King on 04.07.2017.
 */
Ext.define('client.view.panel.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.data.StoreManager',
        'Ext.util.Filter'
    ],

    /**
     * Called when the view is created
     */
    init: function () {

    },

    onSearchClick: function () {
        console.log('press button search');
        var values = this.view.getValues();
        var store = Ext.data.StoreManager.lookup('OptionStore');
        for (var key in values) {
            if (values[key] && values.hasOwnProperty(key)) {
                store.filters.add(new Ext.util.Filter({
                    name: key,
                    value: values[key]
                }));
            }
        }
        store.load();
    }

});