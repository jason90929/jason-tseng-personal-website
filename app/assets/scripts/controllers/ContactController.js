module.exports = function($scope, $rootScope, $window) {
    $scope.title = 'Contact';
    
    $scope.profile = {
        tel: '0988300764'
    };
    
    $scope.makePhoneCall = function(tel) {
        $window.location.href = 'tel:' + tel;
    }
};