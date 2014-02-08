'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        var home;
        if (window.user) {
            $routeProvider.
                when('/', {
                    templateUrl: 'views/wordsets.html'
                }).
                otherwise({
                    redirectTo: '/'
                });
        } else {
            $routeProvider.
                when('/', {
                    templateUrl: 'views/index.html'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }


    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);