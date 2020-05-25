'use strict'

var projectModel = require('../models/project');

var ProjectController = {
    home: (req, res) => {
        
        res.status(200).send({
            mensaje: "soy la home"
        })
    },

    test: (req, res) => {
        res.status(200).send({
            mensaje: "soy la api de prueba"
        })
    },

    saveProjet: function (req, res) {
        var params = req.body;
        console.log(params);
        
        return res.status(200).send({
            params: params,
            mensaje: "Amo a mi LCP!"
        })
    }
};

module.exports = ProjectController;