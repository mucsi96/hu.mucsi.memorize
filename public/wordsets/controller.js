'use strict';

angular.module('mean.wordsets').controller('WordsetsController',['$scope','$routeParams','$location','Global','Wordsets', '$modal', '$translate', function ($scope, $routeParams, $location, Global, Wordsets, $modal, $translate) {
    $scope.global = Global;

    $scope.find = function () {
        Wordsets.query(function (wordsets){
            $scope.wordsets = wordsets;
        });
    };

    $scope.create = function () {
        var wordset = new Wordsets({
            name: $translate('NEW_WORDSET')
        });
        wordset.$save($scope.find);
    };

    $scope.remove = function (wordset) {
        var modalInstance = $modal.open({
            templateUrl: 'common/removeConfirm.html',
            controller: 'RemoveConfirmController'
        });

        modalInstance.result.then(function () {
            wordset.$remove($scope.find);
        });
    };

    $scope.update = function (wordset) {
        console.log(wordset);
        wordset.$update();
    };
}]);