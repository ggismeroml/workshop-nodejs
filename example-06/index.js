const express = require('express');
var app = express();

//Este middleware se llama cada vez que la app recibe un request
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
})


//Este middleware se llama cuando se invoca cualquier verbo sobre la ruta /user/:id
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
})

//Este middleware se llama cuando se invoca el verbo GET sobre la ruta /user/:id
app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})

//Levantamos la aplicación
app.listen(3000, function() {
	console.log("App corriendo en el puerto 3000");
})