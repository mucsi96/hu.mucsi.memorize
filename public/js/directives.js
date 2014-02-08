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