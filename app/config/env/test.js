'use strict';

module.exports = {
    db: 'mongodb://localhost/mean-test',
    port: 3001,
    app: {
        name: 'Memorize - Test'
    },
    google: {
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }
};