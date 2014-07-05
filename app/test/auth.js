var should = require('should'),
    passportStub = require('passport-stub'),
    request = require('supertest'),
    app = require('../server'),
    SUT = request(app);

passportStub.install(app);

describe('/auth...', function () {
    describe('/auth', function () {
        it('should return not signed profile', function (done) {
            SUT
                .get('/auth')
                .end(function(err,res) {
                    if (err) {
                        throw err;
                    }
                    res.body.should.have.property('signedIn');
                    res.body.signedIn.should.be.false;
                    done();
                });
        });
        it('should return the signed in profile', function (done) {
            passportStub.login({
                name: 'hello'
            });
            SUT
                .get('/auth')
                .end(function(err, res){
                    if (err) {
                        throw err;
                    }
                    res.body.should.have.property('signedIn');
                    res.body.signedIn.should.be.true;
                    res.body.should.have.property('name');
                    res.body.name.should.equal('hello');
                    passportStub.logout();
                    done();
                });

        });
    });

    describe('/auth/signout', function () {
        it('should sign out', function (done) {
              passportStub.login({
                  name: 'testUser'
              });
            SUT
                .get('/auth/signout')
                .end(function(err, res) {
                    if (err) {
                        throw err;;
                    }
                    res.body.should.have.property('signedIn');
                    res.body.signedIn.should.be.false;
                    done();
                })
        });
    });
});