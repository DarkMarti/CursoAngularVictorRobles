'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema ({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
// lo transforma automáticament en plural, así conincide con nuestra colección de MongoDB. (projects)