module.exports = function($scope) {
    $scope.title = 'SKILLS';

    $scope.skills = [
        {
            title: 'HTML5',
            content: '還算了解',
            sub: [
                {
                    title: 'SEO',
                    content: '尚可'
                },
                {
                    title: 'RWD',
                    content: '尚可'
                }
            ]
        },
        {
            title: 'CSS3',
            content: '還算了解',
            sub: [
                {
                    title: 'SASS/SCSS',
                    content: '熟練'
                },
                {
                    title: 'BootStrap',
                    content: '熟練其中的切版'
                }
            ]
        },
        {
            title: 'JavaScript',
            content: '還算透徹',
            sub: [
                {
                    title: 'jQuery',
                    content: '熟悉使用'
                },
                {
                    title: 'AngularJS',
                    content: '大部分熟悉'
                }
            ]
        }
    ]
};