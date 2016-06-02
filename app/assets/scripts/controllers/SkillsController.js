module.exports = function($scope, $rootScope) {
    $scope.title = 'SKILLS';

    $scope.skills = [
        {
            title: 'Front-End',
            sub: [
                {
                    title: 'HTML5',
                    content: '還算了解'
                },
                {
                    title: 'SEO',
                    content: '尚可'
                },
                {
                    title: 'RWD',
                    content: '尚可'
                },
                {
                    title: 'SASS/SCSS',
                    content: '熟練',
                    tagClass: 'blue'
                },
                {
                    title: 'BootStrap',
                    content: '熟練其中的切版，熟練其中的切版，熟練其中的切版，熟練其中的切版'
                },
                {
                    title: 'jQuery',
                    content: '熟悉使用'
                },
                {
                    title: 'AngularJS',
                    content: '大部分熟悉'
                }
            ]
        },
        {
            title: 'Back-End',
            sub: [
                {
                    title: 'Java',
                    content: '不算熟悉'
                },
                {
                    title: 'Struts2',
                    content: '了解架構'
                },
                {
                    title: 'Hibernate',
                    content: '大概知道'
                },
                {
                    title: 'Grails',
                    content: '摸過 2.5.0 前版本的框架'
                }
            ]
        }
    ]
};