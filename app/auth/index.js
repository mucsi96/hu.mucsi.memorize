var express = require('express'),
    passport = require('passport'),
    extend = require('extend'),
    app = express(),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null, {
                id: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                provider: 'google'
            });
        });
    }
));

app.configure(function() {
    app.use(express.session({
        secret: GOOGLE_CLIENT_SECRET
    }));
    app.use(passport.initialize());
    app.use(passport.session());
});

app.get('/auth', function(req, res) {
    if (req.isAuthenticated()) {
        res.json(extend({
            signedIn: true
        }, req.user))
    } else {
        res.json({
            signedIn: false
        });
    }
});

app.get('/auth/signout', function(req, res) {
    req.logout();
    res.json({
        signedIn: false
    });
});

app.get('/auth/google', passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
}));

app.get('/auth/google/callback', passport.authenticate('google'), function(req, res) {
    var output = '<html><head></head><body onload="window.close();">Close this window</body></html>';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(output);
});

app.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = app;