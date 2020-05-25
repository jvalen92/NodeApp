'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProjectSchema = schema({
    name: String,
    description: String,
    category: Number,
    year: String,
    langs: [String]
})

module.exports = mongoose.model('project', ProjectSchema);