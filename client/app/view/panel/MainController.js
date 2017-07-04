/**
 * Created by King on 04.07.2017.
 */
Ext.define('client.view.panel.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.data.StoreManager'
    ],

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onSearchClick: function () {
        console.log('press button search');
        var store = Ext.data.StoreManager.lookup('OptionStore');
        store.load();
    }
    
});