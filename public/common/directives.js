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
                    scope.$eval(attrs.onEnterPress);
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
                    scope.$eval(attrs.onEscPress);
                }
            });
        }
    };
});