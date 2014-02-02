'use strict';

module.exports = {
    db: "mongodb://localhost/mean-test",
    port: 3001,
    app: {
        name: "MEAN - A Modern Stack - Test"
    },
    google: {
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}