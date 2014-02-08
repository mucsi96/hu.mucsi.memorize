'use strict';

var wordsets = require('../controllers/wordsets'),
    authorization = require('./middlewares/authorization');

module.exports = function (app) {
    app.get('/wordsets', authorization.requiresLogin, wordsets.all);
    app.post('/wordsets', authorization.requiresLogin, wordsets.create);
    app.del('/wordsets/:wordsetId', authorization.requiresLogin, wordsets.destroy);

    app.param('wordsetId', wordsets.wordset);
};