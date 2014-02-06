'use strict';

var mongoose = require('mongoose'),
    Wordset = mongoose.model('Wordset');

exports.wordset = function (req, res, next, id) {
    Wordset.getById(id, function (err, wordset) {
        if (err) return next(err);
        if (!wordset) return next(new Error('Failed to load wordset ' + id));
        req.wordset = wordset;
        next();
    });
};

exports.all = function (req, res) {
    Wordset.getByUser(req.user, function (err, wordsets) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(wordsets);
        }
    });
};

exports.create = function (req, res) {
    var wordset = new Wordset(req.body);
    wordset.user = req.user;

    wordset.save(function (err) {
        if (err) {
            return res.send('/', {
                errors: err.errors,
                wordset: wordset
            });
        } else {
            res.jsonp(wordset);
        }
    });
};