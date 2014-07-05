'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    mongoStore = require('connect-mongo')(express),
    flash = require('connect-flash'),
    helpers = require('view-helpers'),
    config = require('./config'),
    glob = require('glob'),
    auth = require('./auth');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Bootstrap models
var files = glob.sync('app/**/model.js');
if (files) {
    files.forEach(function (file) {
        file = file.replace(/^app/gi,'.');
        require(file);
    });
}

var app = express();

app.set('showStackError', true);

// Prettify HTML
app.locals.pretty = true;

// Should be placed before express.static
// To ensure that all assets and data are compressed (utilize bandwidth)
app.use(express.compress({
    filter: function(req, res) {
        return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    },
    // Levels are specified in a range of 0 to 9, where-as 0 is
    // no compression and 9 is best compression, but slowest
    level: 9
}));

// Only use logger for development environment
if (process.env.NODE_ENV === 'development') {
    app.use(express.logger('dev'));
}

// Set views path, template engine and default layout
app.set('views', process.cwd() + '/app/views');
app.set('view engine', 'jade');

// Enable jsonp
app.enable('jsonp callback');

app.configure(function() {
    app.use(express.cookieParser());
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.methodOverride());
    app.use(express.session({
        secret: config.sessionSecret,
        store: new mongoStore({
            db: db.connection.db,
            collection: config.sessionCollection
        })
    }));
    app.use(auth);
    app.use(helpers(config.app.name));
    app.use(flash());
    app.use(app.router);
    app.use(express.favicon());
    app.use(express.static(process.cwd() + '/public'));
    app.use(function(err, req, res, next) {
        // Treat as 404
        if (~err.message.indexOf('not found')) return next();

        // Log it
        console.error(err.stack);

        // Error page
        res.status(500).render('500', {
            error: err.stack
        });
    });
    app.use(function(req, res) {
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });

});

var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);

//logger.init(app);

//module.exports = app;
