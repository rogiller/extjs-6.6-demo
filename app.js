/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'Extjs66Demo',

    requires: [
        'Ext.MessageBox'
    ],

    launch: function () {

        //just some console features

        console.group('console jazz');

        console.assert(1 > 2, "1 is not greater than 2");

        //log levels
        console.info("This is info.");
        console.warn("This is a warning.");
        console.error("This is an error.");

        console.log('Today is %s tomorrow is %s', 'Tuesday', 'Wednesday');

        //table
        console.table(['Micheal','Kevin','Pam','Dwight', 'Jim']);

        console.groupEnd();


        //ES6

        console.group('es6');

        //let keyword
        let materials = ['Hydrogen', 'Helium', 'Lithium'];

        //arrow functions
        console.log(materials.map(material => material.length));

        //let re-assign
        materials = 'blah';
        console.log('materials value is now: ' + materials);

        //multi-line string
        const multiLineStr = `Hello! Welcome to Ext JS 
                                and multi line strings.`;
        //string interpolation
        const hello = 'Hello (from ES6+)';
        Ext.Msg.alert(`${hello} Ext JS`, multiLineStr);

        //default params
        this.add();
        this.add(1);
        this.add(2,3);

        console.groupEnd();

        //ES7

        console.group('es7');

        //Exponentiation -- //NOTE: can't get this to compile with sencha app build
        let mathValue = 2 ** 8;
        console.log(mathValue); //256

        //new Array.prototype.includes
        const isLithium = ['Hydrogen', 'Helium', 'Lithium'].includes('Lithium');
        console.log('Array includes Lithium?: %s', isLithium);

        console.groupEnd();


        //ES8

        console.group('es8');

        //string padding methods
        console.log('es8-pad'.padStart(10));

        console.groupEnd();

        //async/await
        this.sayHello();


        //the end
        console.log('THE END');

    },

    //default params
    add: function (x=5, y=10) {
        console.log(x + y);
    },

    //es8 async/await keywords
    sayHello: async function() {
        console.time('sayHello time');
        const externalFetchedText = await this.fetchTextByPromise();
        console.log(`Hello, ${externalFetchedText}`); // Hello, es8
        console.timeEnd('sayHello time');
    },

    fetchTextByPromise: function() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("es8");
            }, 2000);
        });
    }

});
