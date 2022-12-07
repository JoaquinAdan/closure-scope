// Variables

var a; // declarando
var b = "b"; // declaramos y asignamos
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion

// Global scope
var fruit = "Apple"; // global
// console.log(fruit);

function bestFruit() {
//   console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // global por error en la declaracion
    console.log(country);
}

// console.log(country);
countries()