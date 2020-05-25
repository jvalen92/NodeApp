'use strict'

var express = require('express');
var projectcontroller = require('../controllers/project.controller');

var router = express.Router();

router.get('/home', projectcontroller.home);
router.post('/test', projectcontroller.test);
router.post('/saveProjet',projectcontroller.saveProjet);

module.exports = router