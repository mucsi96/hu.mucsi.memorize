'use strict';

var mongoose = require('mongoose'),
    Wordset = mongoose.model('Wordset');

exports.wordset = function(req, res, next, id) {
    Wordset.getById(id, function(err, wordset) {
        if (err) return next(err);
        if (!wordset) return next(new Error('Failed to load wordset ' + id));
        req.wordset = wordset;
        next();
    });
};

exports.all = function (req, res) {
    Wordset.getByUserId(req.user, function (err, wordsets) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(wordsets);
        }
    });
};