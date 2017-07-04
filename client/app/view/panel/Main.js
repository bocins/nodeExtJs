Ext.define('client.view.panel.Main', {
    extend: 'Ext.form.Panel',

    xtype: 'mainPanel',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'client.view.panel.Grid',
        'client.view.panel.MainController',
        'client.store.Strategy'
    ],

    controller: 'main',
    items: [{
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'combobox',
            name: 'strategy',
            fieldLabel: 'Стратегия',
            store: {
                type:'strategy'
            },
            displayField: 'name',
            valueField: 'value'
        }, {
            xtype: 'textfield',
            name: 'idOption',
            fieldLabel: 'ID Опциона'
        }],
        buttons: [{
            text: 'Найти',
            formBind: true,
            listeners: {
                click: 'onSearchClick'
            }
        }]
    },{
        xtype: 'grid'
    }]
});