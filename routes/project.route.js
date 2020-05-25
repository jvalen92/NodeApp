'use strict'

const express = require('express');
const projectcontroller = require('../controllers/project.controller');

const router = express.Router();

router.get('/home', projectcontroller.home);
router.post('/test', projectcontroller.test);
router.post('/saveProjet',projectcontroller.saveProjet);
router.get('/project/:id?', projectcontroller.getProject);
router.get('/projects',projectcontroller.getProjects);
router.put('/projects/:id',projectcontroller.updateProject);
router.delete('/projects/:id',projectcontroller.deleteProject)

module.exports = router