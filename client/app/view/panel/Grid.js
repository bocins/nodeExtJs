/**
 * Created by King on 04.07.2017.
 */
Ext.define('client.view.panel.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'client.store.Option'
    ],
    xtype: 'grid',

    store: {
        type: 'option'
    },

    columns: [
        { text: 'Стратегия',  dataIndex: 'strategy', flex: 1 },
        { text: 'ID Опциона', dataIndex: 'idOption', flex: 1 },
        { text: 'Базовый индекс', dataIndex: 'baseIndex', flex: 1 },
        { text: 'Код версии', dataIndex: 'versionCod', flex: 1 },
        { text: 'Валюта', dataIndex: 'currency', flex: 1 },
        { text: 'Цена', dataIndex: 'amount', flex: 1 },
        { text: 'Дата начала продаж', dataIndex: 'dateStartSale', flex: 1 },
        { text: 'Дата окончания продаж', dataIndex: 'dateEndSale', flex: 1 }
    ]
});