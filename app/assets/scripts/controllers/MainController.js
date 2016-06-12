module.exports = function($scope, $rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
        $rootScope.animation = 'fade-out';
    });
    
    $scope.menu_list = [
        {
            id: 'about',
            name: 'ABOUT',
            order: 1
        },
        {
            id: 'experience',
            name: 'EXPERIENCE',
            order: 2
        },
        {
            id: 'skills',
            name: 'SKILLS',
            order: 3
        },
        {
            id: 'education',
            name: 'EDUCATION',
            order: 4
        },
        {
            id: 'employment',
            name: 'EMPLOYMENT',
            order: 5
        },
        {
            id: 'sample',
            name: 'SAMPLE',
            order: 6
        },
        {
            id: 'contact',
            name: 'CONTACT',
            order: 7
        }
    ];

    $scope.toggleClass = function(i) {
        var $li = $('ul#main_menu > li');
        $li.removeClass('active');
        $li.eq(i - 1).addClass('active');

        $scope.active = 'active';
    };

    $scope.moveSmoothly = function(target) {
        // scroll animation
        $('html, body').animate({
            scrollTop: $('#' + target).offset().top - 60
        }, 800);
    };

    $scope.onShowingNavigation = false;

    $scope.showNavigationMenu = function() {
        $('.main-menu').addClass('active');
        $('.main-header').css('transform', 'translateX(80%)');
        $('.tour-guide').css('transform', 'translateX(80%)');
        $('.content-wrapper').css('transform', 'translateX(80%)');

        disableScroll();
        $scope.onShowingNavigation = true;
    };

    $scope.hideNavigationMenu = function() {
        $('.main-menu').removeClass('active');
        $('.main-header').css('transform', 'translateX(0)');
        $('.tour-guide').css('transform', 'translateX(0)');
        $('.content-wrapper').css('transform', 'translateX(0)');

        enableScroll();
        $scope.onShowingNavigation = false;
    };

    $(document).ready(function() {
        // refresh 後要知道自己在哪個路徑
        // if ($location.$$path !== '/') {
        //     for (var i = 0; i < $scope.menu_list.length; i++) {
        //         if ($location.$$path === '/' + $scope.menu_list[i].id) {
        //             $scope.toggleClass(i + 1);
        //             break;
        //         }
        //     }
        // }
        // else {
        //     $scope.active = '';
        // }

        /* Every time the window is scrolled ... */
        $(window).scroll(function() {
            $('.fade-in').each(function (i) {
                var top_of_object = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > top_of_object) {
                    $(this).addClass('active');
                }
            });
        });
    });

    // 如果縮小時的 Navigation Bar 被開啟，放大後要關起來。
    window.onresize = function() {
        if (window.innerWidth > 992 && $scope.onShowingNavigation) {
            $scope.hideNavigationMenu();
        }
    };

    window.onload = function() {
        setTimeout (function () {
            scrollTo(0,0);
        }, 100); //100ms for example
    };
};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}