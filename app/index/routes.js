'use strict';

module.exports = function(app) {
    
    // Home route
    var index = require('./controller');
    app.get('/', index.render);

};
