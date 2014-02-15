'use strict';

angular.module('mean.system').controller('OptionsController', ['$scope', 'Global', '$translate', function ($scope, Global, $translate) {

    $scope.global = Global;

    $scope.languages = [{
        'name': 'ENGLISH',
        'key': 'en'
    }, {
        'name': 'HUNGARIAN',
        'key': 'hu'
    }, {
        'name': 'RUSSIAN',
        'key': 'ru'
    }];

    $scope.changeLanguage = function (langKey) {
        $translate.uses(langKey);
        updateLanguageDropDown();
    };

    function updateLanguageDropDown () {
        var langKey = $translate.uses();
        $scope.selectableLanguages = [];
        $scope.languages.forEach(function (language) {
            if (language.key === langKey) {
                $scope.currentLanguage = language.name;
            } else {
                $scope.selectableLanguages.push(language);
            }
        });
    }

    updateLanguageDropDown();
}]);