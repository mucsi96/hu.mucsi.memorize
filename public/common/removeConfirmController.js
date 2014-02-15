'use strict';

angular.module('mean.system').controller('RemoveConfirmController',['$scope', '$modalInstance', function ($scope, $modalInstance) {
    $scope.delete = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);