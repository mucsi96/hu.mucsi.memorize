'use strict';

module.exports.status = function(req, res) {
    if (req.isAuthenticated()) {
        res.json({
            signedIn: true,
            provider: req.user.provider,
            user: {
                name: req.user.name,
                email: req.user.email
            }
        })
    } else {
        res.json({
            signedIn: false
        });
    }
};

module.exports.signout = function(req, res) {
    req.logout();
    res.end();
};

module.exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports.authCallback = function(req, res) {
    var output = '<html><head></head><body onload="window.close();">Close this window</body></html>';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(output);
};