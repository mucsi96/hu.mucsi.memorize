'use strict';

// User routes use users controller
var controller = require('./controller');

module.exports = function(app, passport) {

    app.get('/signout', controller.signout);

    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }));

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin'
    }), controller.authCallback);

};
