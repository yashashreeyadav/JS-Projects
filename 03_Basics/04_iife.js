//Immediately Invoked Function Expressions (IIFE)
//Please look at syntax carefully, semicolon is imp
//These functions are executed as soon as they are defined
(function chai(){   //named iffe
    console.log('DB CONNECTED');
})();

//unnamed iffe
((name)=>{console.log(`DB CONNECTED 2 ${name}`);})("Fang Lie");