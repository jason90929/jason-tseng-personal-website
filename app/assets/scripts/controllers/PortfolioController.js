module.exports = function($scope, $rootScope) {
    $scope.title = 'Portfolio';

    $scope.sample = [
        {
            name: 'Gopapala',
            src: 'assets/images/portfolio/gopapala.png',
            info: 'Gopapala（非公開）\n'
        },
        {
            name: 'ctop',
            src: 'assets/images/portfolio/ctop.png',
            info: 'ctop（非公開）\n'
        },
        {
            name: 'Girlfie.',
            src: 'assets/images/portfolio/girlfie.png',
            url: 'http://girlfie.com.tw',
            info: 'Girlfie.'
        },
        {
            name: 'Delta',
            src: 'assets/images/portfolio/delta-irs-system.png',
            info: 'Delta（非公開）'
        },
        {
            name: 'MyWedding',
            src: 'assets/images/portfolio/my-wedding.png',
            info: 'MyWedding（非公開）'
        },
        {
            name: 'Lotus Tours Taipei',
            src: 'assets/images/portfolio/lotustourstpe.png',
            url: 'http://www.lotustourstpe.tw/',
            info: 'Lotus Tours Taipei'
        },
        {
            name: 'URstage',
            src: 'assets/images/portfolio/urstage.png',
            url: 'http://www.urstage.com.tw/',
            info: 'URstage'
        },
        {
            name: '華江高中教科書系統',
            src: 'assets/images/portfolio/hua-chiang-high-school.png',
            url: 'http://203.72.56.75:8088/',
            info: '華江高中教科書系統'
        },
        {
            name: '愛台玩星級旅館',
            src: 'assets/images/portfolio/itaiwanhotel.png',
            url: 'https://play.google.com/store/apps/details?id=com.wethink.itaiwan.hotel&hl=zh_TW',
            info: '愛台玩星級旅館'
        },
        {
            name: 'WeThink Software',
            src: 'assets/images/portfolio/wethink.png',
            url: 'http://www.wethink.com.tw/',
            info: 'WeThink Software'
        }
    ];

    $scope.openTab = function(url) {
        if (url) {
            window.open(url);
        }
    };
};