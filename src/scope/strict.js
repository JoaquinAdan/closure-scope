"use strict"; // con esto no va a asignar al principio el var
pi = 3.1416; // asigna var pi al principio, asi lo entiende JS
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}
console.log(myFunction())

function myFunctionRight() {
    'use strict';
    const pi = 3.1416
    return pi 
}
console.log(myFunctionRight())