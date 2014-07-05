'use strict';

require('../words/model');
require('./model');


var express = require('express'),
    wordsets = require('./controller'),
    auth = require('../auth'),
    app = express();

app.get('/wordsets', auth.requiresLogin, wordsets.all);
app.post('/wordsets', auth.requiresLogin, wordsets.create);
app.del('/wordsets/:wordsetId', auth.requiresLogin, wordsets.destroy);
app.put('/wordsets/:wordsetId', auth.requiresLogin, wordsets.update);

app.param('wordsetId', wordsets.wordset);

module.exports = app;