module.exports = function($scope, $rootScope) {
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
        $rootScope.animation = 'fade-out';
    });
    
    $scope.menu_list = [
        {id: 'home', name: 'HOME', order: 1},
        {id: 'about', name: 'ABOUT', order: 2},
        {id: 'experience', name: 'EXPERIENCE', order: 3},
        {id: 'skills', name: 'SKILLS', order: 4},
        {id: 'education', name: 'EDUCATION', controller: 'EducationController', order: 5},
        {id: 'employment', name: 'EMPLOYMENT', controller: 'EmploymentController', order: 6},
        {id: 'sample', name: 'SAMPLE', controller: 'SampleController', order: 7},
        {id: 'contact', name: 'CONTACT', controller: 'ContactController', order: 8}
    ];

    $scope.href = '';
    $scope.toggleClass = function(i) {
        var $li = $('ul#main_menu > li');
        $li.removeClass('active');
        $li.eq(i - 1).addClass('active');

        $scope.href = $li.eq(i - 1).children('a').attr('href');
    };

    $scope.moveSmoothly = function() {
        // scroll animation
        $('html, body').animate({
            scrollTop: $($scope.href).offset().top - 80
        }, 800);
    };

    $scope.onShowingNavigation = false;

    $scope.showNavigationMenu = function() {
        $('.navigation').css('transform', 'translateX(0)');
        $('.main-intro').css('transform', 'translateX(80%)');
        $('.content-wrapper').css('transform', 'translateX(80%)');

        $scope.onShowingNavigation = true;
    };

    $scope.hideNavigationMenu = function() {
        $('.navigation').css('transform', 'translateX(-100%)');
        $('.main-intro').css('transform', 'translateX(0)');
        $('.content-wrapper').css('transform', 'translateX(0)');

        $scope.onShowingNavigation = false;
    };

    

    // 如果縮小時的 Navigation Bar 被開啟，放大後要關起來。
    window.onresize = function() {
        if (window.innerWidth > 768 && $scope.onShowingNavigation) {
            $scope.hideNavigationMenu();
        }
    };
};
