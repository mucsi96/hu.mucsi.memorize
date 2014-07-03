'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', '$window', '$interval', function ($scope, Global, $window, $interval) {
    $scope.global = Global;

/*    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    }];*/
    
    $scope.isCollapsed = false;

    $scope.signIn = function() {
        // center the popup window
        var left = screen.width/2 - 200,
            top = screen.height/2 - 250,
            popup = $window.open('/auth/google', '', 'top=' + top + ',left=' + left + ',width=400,height=500'),
            interval = 1000;

        // create an ever increasing interval to check a certain global value getting assigned in the popup
        var i = $interval(function(){
            interval += 500;
            try {
                if (popup.closed){
                    $interval.cancel(i);
                    window.location = '/';
                }
            } catch(e){
                console.error(e);
            }
        }, interval);
    };
}]);