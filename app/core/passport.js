'use strict';

var mongoose = require('mongoose'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    User = mongoose.model('User'),
    config = require('../config/config');

module.exports = function(passport) {

    // Serialize the user id to push into the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

// Deserialize the user object based on a pre-serialized token
// which is the user id
    passport.deserializeUser(function(id, done) {
        User.findOne({
            _id: id
        }, '-salt -hashed_password', function(err, user) {
            done(err, user);
        });
    });

    // Use google strategy
    passport.use(new GoogleStrategy({
            clientID: config.google.clientID,
            clientSecret: config.google.clientSecret,
            callbackURL: config.google.callbackURL
        },
        function(accessToken, refreshToken, profile, done) {
            User.findOne({
                'google.id': profile.id
            }, function(err, user) {
                if (!user) {
                    user = new User({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        username: profile.username,
                        provider: 'google',
                        google: profile._json
                    });
                    user.save(function(err) {
                        if (err) console.log(err);
                        return done(err, user);
                    });
                } else {
                    return done(err, user);
                }
            });
        }
    ));
};