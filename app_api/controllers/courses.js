const mongoose = require('mongoose');
const Courses = require('../models/courses');
mongoose.connect('mongodb://localhost/my_courses', { useUnifiedTopology: true, useNewUrlParser: true });

const debug = require('debug')('app_api');


module.exports = {

};