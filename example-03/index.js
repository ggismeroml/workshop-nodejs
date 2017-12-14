/*
 * Workshop NodeJS 
 * Ejemplo 03
 */

const utils = require('./utils');	//Importamos una carpeta
const square = require('./square');	//Importamos un archivo
const print = require('print');		//Importamos un package

//Hola mundo
utils.greet();

//Hola Alice!
utils.greetWithName("Alice");

/*************/

const mySquare = square(4);

//Cuadrado de área 16
mySquare.printArea();


/*************/

const obj = {
	frutas: ["manzana", "naranja", "pera"],
	colores: ["rojo", "azul", "verde"]
}

print.out(obj);
