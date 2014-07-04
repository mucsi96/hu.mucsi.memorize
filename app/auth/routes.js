'use strict';

// User routes use users controller
var auth = require('./controller');

module.exports = function(app, passport) {

    app.get('/auth', auth.status);

    app.get('/auth/signout', auth.signout);

    app.get('/auth/google', passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), auth.authCallback);

};
