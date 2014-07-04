'use strict';

var controller = require('./controller'),
    auth = require('../auth/controller');

module.exports = function (app) {
    app.get('/wordsets', auth.requiresLogin, controller.all);
    app.post('/wordsets', auth.requiresLogin, controller.create);
    app.del('/wordsets/:wordsetId', auth.requiresLogin, controller.destroy);
    app.put('/wordsets/:wordsetId', auth.requiresLogin, controller.update);

    app.param('wordsetId', controller.wordset);
};