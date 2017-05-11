const express = require('express');
var app = express();
var router = express.Router();

//Este middleware se llama cada vez que la app recibe un request
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

//Este middleware se llama cuando se invoca cualquier verbo sobre la ruta /user/:id
router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
});

//Este middleware se llama cuando se invoca el verbo GET sobre la ruta /user/:id
router.get('/user/:id', function (req, res, next) {
  res.send('USER desde Router');
});

//Montamos el router bajo el path /admin
app.use('/admin', router);

//Levantamos la aplicación
app.listen(3000, function() {
	console.log("App corriendo en el puerto 3000");
});