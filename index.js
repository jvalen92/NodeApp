'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://sebas:juanse2820@cluster0-o6olj.mongodb.net/test?retryWrites=true&w=majority')
        .then(() => {
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");

        	// Creacion del servidor
        	app.listen(port, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:3700");
        	});

        })
        .catch(err => console.log(err));