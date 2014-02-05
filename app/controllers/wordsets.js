'use strict';

exports.all = function (req, res) {
    res.jsonp([{
        name: 'Test1',
        words: 4
    },{
        name: 'g fdgdfgdfgdg retwrfdgdg',
        words: 12
    },{
        name: 'TEsting dfsdf dsftreer',
        words: 87
    },{
        name: 'Qfds dfsgfg gfdgdf',
        words: 43
    }]);
};