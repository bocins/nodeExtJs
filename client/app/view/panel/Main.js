Ext.define('client.view.panel.Main', {
    extend: 'Ext.form.Panel',

    xtype: 'mainPanel',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'client.store.Cash',
        'client.store.Strategy',
        'client.view.panel.Grid',
        'client.view.panel.MainController'
    ],

    controller: 'main',
    items: [{
        xtype: 'form',
        reference: 'form',
        width: '100%',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        //layout: 'form',
        defaults: {
            // applied to each contained panel
            bodyStyle: 'padding:20px'
        },
        items: [
            {
             xtype:' fieldcontainer'
            },
            {
            xtype: 'combobox',
            name: 'strategy',
            flex:1,
            labelAlign:'top',
            fieldLabel: 'Стратегия',
            store: {
                type: 'strategy'
            },
            displayField: 'name',
            valueField: 'value'
        }, {
            xtype: 'numberfield',
            name: 'idOption',
            flex:1,
            labelAlign:'top',
            fieldLabel: 'ID Опциона'
        }, {
            xtype: 'textfield',
            name: 'amount',
            flex:1,
            labelAlign:'top',
            fieldLabel: 'Цена',
            vtype: 'amount'
        }, {
            xtype: 'combobox',
            name: 'strategy',
            flex:1,
            labelAlign:'top',
            fieldLabel: 'Валюта',
            store: {
                type: 'currency'
            }
        }, {
            xtype: 'datefield',
            labelWidth: 150,
            name: 'dateStartSale',
            format: 'd.m.Y',
            flex:1,
            labelAlign:'top',
            fieldLabel: 'Дата начала продаж'
        }, {
            xtype: 'datefield',
            labelWidth: 150,
            name: 'dateEndSale',
            format: 'd.m.Y',
            flex:1,
            labelAlign:'top',
            fieldLabel: 'Дата окончания продаж'
        }],
        buttons: [{
            text: 'Найти',
            formBind: true,
            listeners: {
                click: 'onSearchClick'
            }
        }]
    }, {
        xtype: 'grid'
    }]
});