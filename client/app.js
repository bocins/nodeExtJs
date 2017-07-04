/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'client.Application',

    name: 'client',

    requires: [
        // This will automatically load all classes in the client namespace
        // so that application classes do not need to require each other.
        'client.*'
    ],

    // The name of the initial view to create.
    mainView: 'client.view.panel.Main'
});
