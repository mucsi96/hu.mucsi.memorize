'use strict';

var controller = require('./controller'),
    authorization = require('../users/controller');

module.exports = function (app) {
    app.get('/wordsets', authorization.requiresLogin, controller.all);
    app.post('/wordsets', authorization.requiresLogin, controller.create);
    app.del('/wordsets/:wordsetId', authorization.requiresLogin, controller.destroy);
    app.put('/wordsets/:wordsetId', authorization.requiresLogin, controller.update);

    app.param('wordsetId', controller.wordset);
};