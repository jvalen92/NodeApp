'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos rutas
var project_routes = require('./routes/project.route');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors


// rutas
app.use('/api', project_routes);


// exportar
module.exports = app;

