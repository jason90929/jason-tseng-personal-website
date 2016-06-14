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

    if (window.innerWidth > 992) {
        bubble(40, 300);
    }
    else {
        bubble(20, 200);
    }
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

// 都是泡泡
function bubble(amount, maxSize) {
    const container = document.getElementById('bubble');
    const fragment = document.createDocumentFragment(); // https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
    const minSize = 20;
    // const maxSize = 300;
    const distance = 12; // How far elements can travel. Using REM in this pen.
    // const amount = 40; // Num of elements to generate

    function begin() {
        for(let i = 0; i < amount; i++) {
            $(fragment).append(createElement());
        }
        container.appendChild(fragment); // append all dynamically created elements at once
        generateAnimation(); // then build their animation
    }

    function createElement() {
        const diameter = Math.floor(Math.random() * maxSize + minSize) -1;
        const size = 150; // 大小固定
        const size_imp = Math.floor(Math.random() * 8) + 1;
        const rotate_way = Math.floor(Math.random() * 2); // 順時針與逆時針

        return ('<svg id="organic-blob" class="bubble" style="top: ' + Math.floor(Math.random() * 80) + '%; left: ' + Math.floor(Math.random() * 80) + '%;"' +
        ' width="' + diameter + '" height="' + diameter + '" xmlns="http://www.w3.org/2000/svg" fill="#fff">' +
        '<g>' +
        '<circle r="' + diameter / 3 + '" cy="' + (diameter / 300) * (size - size_imp) + '" cx="' + (diameter / 300) * size + '">' +
        '<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="' + (rotate_way ? 0 : 360) + ' ' +
        (diameter / 300) * (size - size_imp) + ' ' + (diameter / 300) * size + '" to="' + (rotate_way ? 360 : 0) + ' ' + (diameter / 300) * (size - size_imp) + ' ' +
        (diameter / 300) * size + '" dur="' + Math.floor(Math.random() * 8) + 2 + 's" repeatCount="indefinite"/>' +
        '</circle>' +
        '<circle r="' + diameter / 3 + '" cy="' + (diameter / 300) * (size + size_imp) + '" cx="' + (diameter / 300) * size + '">' +
        '<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="' + (rotate_way ? 360 : 0) + ' ' +
        (diameter / 300) * (size + size_imp) + ' ' + (diameter / 300) * size + '" to="' + (rotate_way ? 0 : 360) + ' ' + (diameter / 300) * (size + size_imp) + ' ' +
        (diameter / 300) * size + '" dur="' + Math.floor(Math.random() * 8) + 2 + 's" repeatCount="indefinite"/>' +
        '</circle>' +
        '<circle r="' + diameter / 3 + '" cy="' + (diameter / 300) * size + '" cx="' + (diameter / 300) * (size - size_imp) + '">' +
        '<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="' + (rotate_way ? 0 : 360) + ' ' +
        (diameter / 300) * size + ' ' + (diameter / 300) * 145 + '" to="' + (rotate_way ? 360 : 0) + ' ' + (diameter / 300) * size + ' ' +
        (diameter / 300) * (size - size_imp) + '" dur="' + Math.floor(Math.random() * 8) + 2.5 + 's" repeatCount="indefinite"/>' +
        '</circle>' +
        '<circle r="' + diameter / 3 + '" cy="' + (diameter / 300) * size + '" cx="' + (diameter / 300) * (size + size_imp) + '">' +
        '<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="' + (rotate_way ? 360 : 0) + ' ' +
        (diameter / 300) * size + ' ' + (diameter / 300) * 155 + '" to="' + (rotate_way ? 0 : 360) + ' ' + (diameter / 300) * size + ' ' +
        (diameter / 300) * (size + 5) + '" dur="' + Math.floor(Math.random() * 8) + 3 + 's" repeatCount="indefinite"/>' +
        '</circle>' +
        '</g>' +
        '</svg>');
    }

    function generateAnimation() {
        let collection = document.querySelectorAll('#bubble > svg');
        collection = Array.prototype.slice.call(collection);

        collection.forEach(function(element) {
            element.animate([
                { transform: 'translate(0,0)' },
                { transform: 'translate('+getDistance()+'rem,'+getDistance()+'rem)' }
            ], {
                duration: (Math.random() + 1) * 10000,
                direction: 'alternate',
                easing: 'ease-in-out',
                fill: 'both',
                iterations: Infinity
            });
        });
    }

    // Generates a random +/- number
    function getDistance() {
        let num = Math.floor(Math.random()*distance) + 1;
        return num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
    }

    begin();
}
