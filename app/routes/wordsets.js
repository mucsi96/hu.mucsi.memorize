'use strict';

var wordsets = require('../controllers/wordsets');

module.exports = function (app) {
    app.get('/wordsets',wordsets.all);
};