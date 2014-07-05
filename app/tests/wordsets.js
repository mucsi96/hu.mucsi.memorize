var should = require('should'),
    async = require('async'),
    passportStub = require('passport-stub'),
    request = require('supertest'),
    app = require('../server'),
    mongoose = require('mongoose'),
    Wordset = mongoose.model('Wordset'),
    SUT = request(app),
    user,
    wordset;

user = {
    id: 'testUserId'
};

wordset = {
    name: 'testWordset',
    words: []
};

function removeAll(cb) {
    Wordset.removeAllByUser(user, cb);
}

function create(wordset) {
    return SUT
        .post('/wordsets')
        .set('Content-Type', 'application/json')
        .send(wordset);
}

function getAll() {
    return SUT
        .get('/wordsets');
}

passportStub.install(app);

describe('/wordsets...', function () {
    describe('POST /wordsets', function () {
        it('should refuse if user is not signed in', function (done) {
            create(wordset)
                .expect(401, done);
        });
        it('should add a wordset', function (done) {
            passportStub.login(user);
            async.series([
                removeAll,
                function (cb) {
                    create(wordset)
                        .end(cb);
                },
                function (cb) {
                    getAll()
                        .end(function (err, res) {
                            res.body.length.should.equal(1);
                            res.body[0].name.should.equal(wordset.name);
                            passportStub.logout();
                            cb();
                        });
                }
            ], done);
        });
    });
});