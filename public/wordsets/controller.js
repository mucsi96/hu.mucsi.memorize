'use strict';

angular.module('mean.wordsets').controller('WordsetsController',['$scope','$routeParams','$location','Global','Wordsets', '$modal', function ($scope, $routeParams, $location, Global, Wordsets, $modal) {
    $scope.global = Global;

    $scope.find = function () {
        Wordsets.query(function (wordsets){
            $scope.wordsets = wordsets;
        });
    };

    $scope.create = function () {
        var wordset = new Wordsets({
            name: 'Test1'
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

    $scope.edit = function (wordset) {
        wordset.editor = wordset.name;
        wordset.edit = true;
    };

    $scope.acceptEdit = function (wordset) {
        wordset.name = wordset.editor;
        wordset.edit = false;
        wordset.$update($scope.find);
    };

    $scope.cancelEdit = function (wordset) {
        wordset.editor = null;
        wordset.edit = false;
    };
}]);