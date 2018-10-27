/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'Extjs66Demo',

    requires: [
        'Ext.MessageBox'
    ],

    launch: function () {
        //ES6

        //let keyword
        let materials = ['Hydrogen', 'Helium', 'Lithium'];

        //arrow functions
        console.log(materials.map(material => material.length));

        //let re-assign
        materials = 'blah';
        console.log(materials);

        //string interpolation
        const hello = 'Hello (from ES6+)';
        Ext.Msg.alert(`${hello} Ext JS`, 'Hello! Welcome to Ext JS.');

        //default params
        this.add();
        this.add(1);
        this.add(2,3);


        //ES7

        //Exponentiation - can't get this to compile
        // let mathValue = 2 ** 8;
        // console.log(mathValue); //256


        //ES8

        //string padding methods
        console.log('es8-pad'.padStart(10))

    },

    add: function (x=5, y=10) {
        console.log(x + y);
    }
});
