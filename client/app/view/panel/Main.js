Ext.define('client.view.panel.Main', {
    extend: 'Ext.form.Panel',

    xtype: 'mainPanel',

    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
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
            type: 'vbox',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'fieldcontainer',
                fieldDefaults: {
                    msgTarget: 'under',
                    labelAlign: 'top',
                    margin: '0 10 0 10'
                },
                layout: {
                    type: 'hbox'
                },
                flex: 1,
                items: [
                    {
                        xtype: 'combobox',
                        name: 'strategy',
                        flex: 1,
                        fieldLabel: 'Стратегия',
                        store: {
                            type: 'strategy'
                        },
                        displayField: 'name',
                        valueField: 'value'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'idOption',
                        flex: 1,
                        fieldLabel: 'ID Опциона'
                    },
                    {
                        xtype: 'textfield',
                        name: 'amount',
                        flex: 1,
                        fieldLabel: 'Цена',
                        vtype: 'amount'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                fieldDefaults: {
                    msgTarget: 'under',
                    labelAlign: 'top',
                    margin: '0 10 10 10'
                },

                layout: {
                    type: 'hbox'
                },
                flex: 1,
                items: [
                    {
                        xtype: 'combobox',
                        name: 'currency',
                        flex: 1,
                        fieldLabel: 'Валюта',
                        store: {
                            type: 'cash'
                        },
                        displayField: 'name',
                        valueField: 'value'
                    },
                    {
                        xtype: 'datefield',
                        flex: 1,
                        name: 'dateStartSale',
                        format: 'd.m.Y',
                        fieldLabel: 'Дата начала продаж'
                    },
                    {
                        xtype: 'datefield',
                        flex: 1,
                        name: 'dateEndSale',
                        format: 'd.m.Y',
                        fieldLabel: 'Дата окончания продаж'
                    }
                ]
            }
        ],
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