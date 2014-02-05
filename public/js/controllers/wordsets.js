'use strict';

angular.module('mean.wordsets').controller('WordsetsController',['$scope','$routeParams','$location','Global','Wordsets', function ($scope, $routeParams, $location, Global, Wordsets) {
    $scope.global = Global;

    $scope.find = function () {
        Wordsets.query(function (wordsets){
            $scope.wordsets = wordsets;
        });
    };
}]);