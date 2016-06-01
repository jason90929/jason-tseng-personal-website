module.exports = function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.contentUrl = attrs.appPart + '.html';
            attrs.$observe("appPart", function (v) {
                scope.contentUrl = v + '.html';
            });
        },
        template: '<div ng-include="contentUrl"></div>'
    };
};