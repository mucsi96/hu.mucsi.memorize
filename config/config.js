'use strict';

// Utilize Lo-Dash utility library
var _ = require('lodash');
var envConf = require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.js') || {}
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = _.merge({
    root: rootPath,
    port: process.env.PORT || 3000,
    db: process.env.MONGOHQ_URL,
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },

    // The secret should be set to a non-guessable string that
    // is used to compute a session hash
    sessionSecret: 'MEAN',
    // The name of the MongoDB collection to store sessions in
    sessionCollection: 'sessions'
},envConf);
