'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider', function($routeProvider) {
    if (window.user) {
        $routeProvider.
            when('/options', {
                templateUrl: 'views/options.html'
            }).
            when('/', {
                templateUrl: 'views/wordsets.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    } else {
        $routeProvider.
            when('/options', {
                templateUrl: 'views/options.html'
            }).
            when('/', {
                templateUrl: 'views/index.html'
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