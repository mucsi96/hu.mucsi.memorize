'use strict';

var mongose = require('mongoose'),
    Schema = mongose.Schema;

var WordsetSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        require: true,
        trim: true
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

WordsetSchema.statics.getByUser = function(user, cb) {
    this.find({user: user}).sort('created').populate('words').exec(cb);
};

mongose.model('Wordset', WordsetSchema);