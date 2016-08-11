module.exports = function($scope, $rootScope) {
    $scope.title = 'Portfolio';

    $scope.sample = [
        {
            name: 'ctop（非公開）',
            src: 'assets/images/portfolio/ctop.png'
        },
        {
            name: 'Girlfie.',
            src: 'assets/images/portfolio/girlfie.png',
            url: 'http://girlfie.com.tw'
        },
        {
            name: 'Delta（非公開）',
            src: 'assets/images/portfolio/delta-irs-system.png'
        },
        {
            name: 'MyWedding（非公開）',
            src: 'assets/images/portfolio/my-wedding.png'
        },
        {
            name: 'Lotus Tours Taipei',
            src: 'assets/images/portfolio/lotustourstpe.png',
            url: 'http://www.lotustourstpe.tw/'
        },
        {
            name: 'URstage',
            src: 'assets/images/portfolio/urstage.png',
            url: 'http://www.urstage.com.tw/'
        },
        {
            name: '華江高中教科書系統',
            src: 'assets/images/portfolio/hua-chiang-high-school.png',
            url: 'http://203.72.56.75:8088/'
        },
        {
            name: '愛台玩星級旅館',
            src: 'assets/images/portfolio/itaiwanhotel.png',
            url: 'https://play.google.com/store/apps/details?id=com.wethink.itaiwan.hotel&hl=zh_TW'
        },
        {
            name: 'WeThink Software',
            src: 'assets/images/portfolio/wethink.png',
            url: 'http://www.wethink.com.tw/'
        }
    ];

    $scope.openTab = function(url) {
        if (url) {
            window.open(url);
        }
    };
};