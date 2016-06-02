module.exports = function($scope, $rootScope, $window) {
    $scope.title = 'Contact';

    $scope.makePhoneCall = function(tel) {
        $window.location.href = 'tel:' + tel;
    };

    $scope.sendEmail = function(email) {
        $window.location.href = 'mailto:' + email;
    };

    $scope.openLink = function(url) {
        $window.open(url);
    };

    $scope.profile = [
        {
            id: 'city',
            name: 'Taiwan, Taipei',
            icon: 'location-arrow'
        },
        {
            id: 'tel',
            name: '0988300764',
            filter: 'tel',
            icon: 'phone',
            click: $scope.makePhoneCall
        },
        {
            id: 'email',
            name: 'tsaistorm@gmail.com',
            icon: 'envelope-o',
            click: $scope.sendEmail
        },
        {
            id: 'facebook',
            name: 'http://www.facebook.com/jason90929',
            icon: 'facebook-official',
            click: $scope.openLink
        },
        {
            id: 'github',
            name: 'http://github.com/jason90929',
            icon: 'github',
            click: $scope.openLink
        }
    ];
};