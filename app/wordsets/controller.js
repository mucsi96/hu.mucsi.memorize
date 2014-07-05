'use strict';

var mongoose = require('mongoose'),
    Wordset = mongoose.model('Wordset'),
    _ = require('lodash');

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
            return res.json(err);
        }
        res.json(wordsets);
    });
};

exports.create = function (req, res) {
    var wordset = new Wordset(req.body);
    wordset.userId = req.user.id;

    wordset.save(function (err) {
        if (err) {
            return res.json(err);
        }
        res.json(wordset);
    });
};

exports.destroy = function (req, res) {
    var wordset = req.wordset;
    wordset.remove(function (err) {
        if (err) {
            return res.json(err);
        }
        res.json(wordset);

    });
};

exports.update = function (req, res) {
    var wordset = req.wordset;
    wordset = _.extend(wordset, req.body);

    wordset.save(function (err) {
        if (err) {
            return res.json(err);
        }
        res.jsonp(wordset);
    });
};