'use strict';

var mongose = require('mongoose'),
    Schema = mongose.Schema;

var WordsetSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    words: [{
        type: Schema.ObjectId,
        ref: 'Word'
    }],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

WordsetSchema.statics.getById = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('words').exec(cb);
};

WordsetSchema.statics.getByUserId = function(userId, cb) {
    this.find({user: userId}).sort('-created').populate('words').exec(cb);
};

mongose.model('Wordset', WordsetSchema);