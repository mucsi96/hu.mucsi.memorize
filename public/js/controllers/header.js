'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', '$translate', function ($scope, Global, $translate) {
    $scope.global = Global;

/*    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    }];*/

    $scope.languages = [{
        'name': 'English',
        'key': 'en'
    }, {
        'name': 'Hungarian',
        'key': 'hu'
    }];

    $scope.changeLanguage = function (langKey) {
        $translate.uses(langKey);
        $scope.languages.forEach(function (language) {
            language.active = language.key === langKey;
        });
    };
    
    $scope.isCollapsed = false;
}]);