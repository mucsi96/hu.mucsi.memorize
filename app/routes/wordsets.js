'use strict';

var wordsets = require('../controllers/wordsets'),
    authorization = require('./middlewares/authorization');

module.exports = function (app) {
    app.get('/wordsets', authorization.requiresLogin, wordsets.all);
    app.post('/wordsets', authorization.requiresLogin, wordsets.create);

    app.param('wordsetId', wordsets.wordset);
};