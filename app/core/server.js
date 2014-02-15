'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    passport = require('passport'),
    logger = require('mean-logger'),
    glob = require('glob');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// Set the node enviornment variable if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Initializing system variables 
var config = require('../config/config'),
    mongoose = require('mongoose');

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Bootstrap models
var files = glob.sync('app/**/model.js');
if (files) {
    files.forEach(function (file) {
        file = file.replace(/^app/gi,'..');
        require(file);
    });
}

// Bootstrap passport config
require('./passport')(passport);

var app = express();

// Express settings
require('./express')(app, passport, db);

// Bootstrap routes
var files = glob.sync('app/**/routes.js');
if (files) {
    files.forEach(function (file) {
        file = file.replace(/^app/gi,'..');
        require(file)(app, passport);
    });
}

// Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);

// Initializing logger
logger.init(app, passport, mongoose);

// Expose app
module.exports = app;
