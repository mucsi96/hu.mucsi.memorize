/*jshint multistr: true */
'use strict';

angular.module('mean').directive('stopPropagation', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            var previousEventName = null,
                eventHandler = function(e) {
                return e.stopPropagation();
            };
            return $attrs.$observe('stopPropagation', function(eventName) {
                if (previousEventName) {
                    $element.off(previousEventName, eventHandler);
                }
                return $element.on(eventName, eventHandler);
            });
        }
    };
});

angular.module('mean').directive('onEnterPress',function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('keyup', function () {
                if (event.keyCode === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onEnterPress);
                    });
                }
            });
        }
    };
});

angular.module('mean').directive('onEscPress',function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('keyup', function () {
                if (event.keyCode === 27) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onEscPress);
                    });
                }
            });
        }
    };
});

angular.module('mean').directive('editableLabel',['$compile', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            onUpdate: '&',
            onRemove: '&',
            ngModel: '=',
            editable: '@'
        },
        controller: function ($scope) {
            $scope.showEditor = function () {
                $scope.editor = $scope.ngModel[$scope.editable];
                $scope.edit = true;
            };

            $scope.acceptEdit = function () {
                $scope.ngModel[$scope.editable] = $scope.editor;
                $scope.edit = false;
                $scope.onUpdate();
            };

            $scope.cancelEdit = function () {
                $scope.editor = null;
                $scope.edit = false;
            };
        },
        link : function(scope,element){
            var parent = element.parent(),
                htmlBefore = '<span data-ng-hide="edit">{{ngModel.'+scope.editable+'}}</span>',
                htmlAfter = '\
            <span class="glyphicon glyphicon-trash" data-ng-click="onRemove()" stopPropagation="click"></span> \
            <span class="glyphicon glyphicon-pencil" data-ng-hide="edit" data-ng-click="showEditor()"></span> \
            <span class="input-group pull-left" data-ng-show="edit"> \
            <input type="text" autofocus class="form-control" data-ng-model="editor" on-enter-press="acceptEdit()" on-esc-press="cancelEdit()"> \
            <span class="input-group-btn"> \
                <button class="btn btn-danger" type="button" data-ng-click="cancelEdit()"> \
                     <span class="glyphicon glyphicon-remove"></span> \
                </button> \
                <button class="btn btn-success" type="button" data-ng-click="acceptEdit()"> \
                     <span class="glyphicon glyphicon-ok"></span> \
                </button> \
            </span>';
            element.prepend(htmlBefore);
            element.append(htmlAfter);
            element.after(element.html());
            element.remove();
            $compile(parent.contents())(scope);
        }
    };
}]);