'use strict';

var express = require('express'),
    config = require('./config'),
    auth = require('./auth'),
    wordsets = require('./wordsets'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect(config.db);

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.set('showStackError', true);
app.locals.pretty = true;
app.use(express.compress({
    filter: function(req, res) {
        return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    },
    level: 9
}));
if (process.env.NODE_ENV === 'development') {
    app.use(express.logger('dev'));
}

app.configure(function() {
    app.use(express.cookieParser());
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.methodOverride());
    app.use(auth);
    app.use(wordsets);
    app.use(app.router);
    app.use(express.favicon());
    app.use(express.static(process.cwd() + '/public'));
    app.use(function(req, res) {
        res.redirect('/')
    });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express app started on port ' + port);

module.exports = app;
