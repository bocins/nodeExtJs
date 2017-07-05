/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('client.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'Ext.form.field.VTypes'
    ],

    name: 'client',

    launch: function () {
        Ext.apply(Ext.form.field.VTypes, {
                amount:  function(value) {
                    return this.amountRe.test(value);
                },
            amountRe: /^[\d]+\.?\d{0,2}?$/,
            amountText: 'Только денежный формат, пример 20.25',
            amountMask: /[\d\.]/i
        });
    }
});
