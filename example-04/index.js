/*
 * Workshop NodeJS 
 * Ejemplo 04
 */

var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send("Mi aplicación funciona!");
})

app.listen(3000, function() {
	console.log("App corriendo en el puerto 3000");
})