module.exports = function() {
    // render 出整段 html 畫面
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
