'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider', function($routeProvider) {
    if (window.user) {
        $routeProvider.
            when('/options', {
                templateUrl: 'options/markup.html'
            }).
            when('/', {
                templateUrl: 'wordsets/markup.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    } else {
        $routeProvider.
            when('/options', {
                templateUrl: 'options/markup.html'
            }).
            when('/', {
                templateUrl: 'index/markup.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
}]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);