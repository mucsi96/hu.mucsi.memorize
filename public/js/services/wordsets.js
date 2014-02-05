'use strict';


angular.module('mean.wordsets').factory('Wordsets', ['$resource', function ($resource) {
    return $resource('wordsets/:wordsetId', {
        wordsetId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);