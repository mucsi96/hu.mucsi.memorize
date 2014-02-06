'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var WordSchema = new Schema({
    lastAsked: {
        type: Date
    },
    word1: {
        type: String,
        require: true,
        trim: true
    },
    word2: {
        type: String,
        require: true,
        trim: true
    },
    count: {
        type: Number,
        default: 1
    }
});

mongoose.model('Word', WordSchema);