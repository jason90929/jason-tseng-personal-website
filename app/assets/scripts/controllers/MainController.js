module.exports = function($scope) {
    $scope.menu_list = [
        {
            id: 'about',
            name: 'ABOUT',
            order: 1
        },
        // {
        //     id: 'experience',
        //     name: 'EXPERIENCE',
        //     order: 2
        // },
        {
            id: 'skills',
            name: 'SKILLS',
            order: 3
        },
        // {
        //     id: 'education',
        //     name: 'EDUCATION',
        //     order: 4
        // },
        // {
        //     id: 'employment',
        //     name: 'EMPLOYMENT',
        //     order: 5
        // },
        {
            id: 'portfolio',
            name: 'PORTFOLIO',
            order: 6
        },
        {
            id: 'contact',
            name: 'CONTACT',
            order: 7
        }
    ];
    
    $scope.onShowingNavigation = false;

    // 小尺寸的顯示選單
    $scope.showNavigationMenu = function() {
        $('.main-menu').addClass('active');
        $('.main-header').addClass('menu-showing');

        disableScroll();
        $scope.onShowingNavigation = true;
    };

    // 小尺寸的隱藏選單
    $scope.hideNavigationMenu = function() {
        $('.main-menu').removeClass('active');
        $('.main-header').removeClass('menu-showing');

        enableScroll();
        $scope.onShowingNavigation = false;
    };

    $(document).ready(function() {
        // 視窗移進特效
        $('.content').addClass('invisible').viewportChecker({
            classToAdd: 'visible bounceInUp',
            offset: 100
        });
    });

    var $main_menu = $('.main-menu');
    var $main_header = $('.main-header');

    /* Every time the window is scrolled ... */
    $(window).on('scroll', function() {
        // 選單是否跟隨視窗
        var scrollTop = $(window).scrollTop();
        var innerHeight = window.innerHeight;
        if (scrollTop > innerHeight - 46) {
            if (window.innerWidth > 992) {
                $main_menu.addClass('fixed');
            }
            else {
                $main_header.addClass('fixed');
            }
        }
        else {
            if (window.innerWidth > 992) {
                $main_menu.removeClass('fixed');
            }
            else {
                $main_header.removeClass('fixed');
            }
        }
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
        }, 100); // 100ms for example
    };

    // 泡泡特效的數量依照尺寸調整
    try {
        if (window.innerWidth > 992) {
            bubble(30, 300);
        }
        else {
            bubble(20, 150);
        }
    }
    catch(e) {}

    // 忘了這幹嘛的
    // $('.skin').scroll(function() {
    //     var x = $(this).scrollTop();
    //     $(this).css('background-position','0% ' + parseInt(-x / 10) + 'px');
    // });
};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1};
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
    // const distance = 12; // How far elements can travel. Using REM in this pen.
    // const amount = 40; // Num of elements to generate

    function begin() {
        for (let i = 0; i < amount; i++) {
            fragment.appendChild(createElement());
        }
        container.appendChild(fragment); // append all dynamically created elements at once
        // generateAnimation(); // then build their animation
    }

    function createElement() {
        console.log('creating');
        const diameter = Math.floor(Math.random() * maxSize + minSize) - 1;
        const size = 150; // 大小固定
        const size_imp = Math.floor(Math.random() * 8) + 1;
        const rotate_way = Math.floor(Math.random() * 2); // 順時針與逆時針

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'bubble');
        svg.setAttribute('style', 'top: ' + Math.floor(Math.random() * 80) + '%; left: ' + Math.floor(Math.random() * 80) + '%;');
        svg.setAttribute('width', diameter);
        svg.setAttribute('height', diameter);
        svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
        svg.setAttribute('fill', '#fff');

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', diameter / 3);
        circle.setAttribute('cy', (diameter / 300) * (size - size_imp));
        circle.setAttribute('cx', (diameter / 300) * size);
        var animateTransform = document.createElement('animateTransform');
        animateTransform.setAttribute('attributeType', 'xml');
        animateTransform.setAttribute('attributeName', 'transform');
        animateTransform.setAttribute('type', 'rotate');
        animateTransform.setAttribute('from', (rotate_way ? 0 : 360) + ' ' + (diameter / 300) * (size - size_imp) + ' ' + (diameter / 300) * size);
        animateTransform.setAttribute('to', (rotate_way ? 360 : 0) + ' ' + (diameter / 300) * (size - size_imp) + ' ' + (diameter / 300) * size);
        animateTransform.setAttribute('dur', Math.floor(Math.random() * 8) + 2 + 's');
        animateTransform.setAttribute('repeatCount', 'indefinite');
        circle.appendChild(animateTransform);
        g.appendChild(circle);

        circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', diameter / 3);
        circle.setAttribute('cy', (diameter / 300) * (size - size_imp));
        circle.setAttribute('cx', (diameter / 300) * size);
        animateTransform = document.createElement('animateTransform');
        animateTransform.setAttribute('attributeType', 'xml');
        animateTransform.setAttribute('attributeName', 'transform');
        animateTransform.setAttribute('type', 'rotate');
        animateTransform.setAttribute('from', (rotate_way ? 360 : 0) + ' ' + (diameter / 300) * (size + size_imp) + ' ' + (diameter / 300) * size);
        animateTransform.setAttribute('to', (rotate_way ? 0 : 360) + ' ' + (diameter / 300) * (size + size_imp) + ' ' + (diameter / 300) * size);
        animateTransform.setAttribute('dur', Math.floor(Math.random() * 8) + 2 + 's');
        animateTransform.setAttribute('repeatCount', 'indefinite');
        circle.appendChild(animateTransform);
        g.appendChild(circle);

        circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', diameter / 3);
        circle.setAttribute('cy', (diameter / 300) * size);
        circle.setAttribute('cx', (diameter / 300) * (size - size_imp));
        animateTransform = document.createElement('animateTransform');
        animateTransform.setAttribute('attributeType', 'xml');
        animateTransform.setAttribute('attributeName', 'transform');
        animateTransform.setAttribute('type', 'rotate');
        animateTransform.setAttribute('from', (rotate_way ? 0 : 360) + ' ' + (diameter / 300) * size + ' ' + (diameter / 300) * 145);
        animateTransform.setAttribute('to', (rotate_way ? 360 : 0) + ' ' + (diameter / 300) * size + ' ' + (diameter / 300) * (size - size_imp));
        animateTransform.setAttribute('dur', Math.floor(Math.random() * 8) + 2.5 + 's');
        animateTransform.setAttribute('repeatCount', 'indefinite');
        circle.appendChild(animateTransform);
        g.appendChild(circle);

        circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', diameter / 3);
        circle.setAttribute('cy', (diameter / 300) * size);
        circle.setAttribute('cx', (diameter / 300) * (size - size_imp));
        animateTransform = document.createElement('animateTransform');
        animateTransform.setAttribute('attributeType', 'xml');
        animateTransform.setAttribute('attributeName', 'transform');
        animateTransform.setAttribute('type', 'rotate');
        animateTransform.setAttribute('from', (rotate_way ? 360 : 0) + ' ' + (diameter / 300) * size + ' ' + (diameter / 300) * 155);
        animateTransform.setAttribute('to', (rotate_way ? 0 : 360) + ' ' + (diameter / 300) * size + ' ' + (diameter / 300) * (size + 5));
        animateTransform.setAttribute('dur', Math.floor(Math.random() * 8) + 3 + 's');
        animateTransform.setAttribute('repeatCount', 'indefinite');
        circle.appendChild(animateTransform);
        g.appendChild(circle);

        svg.appendChild(g);
        return svg;
    }

    // function generateAnimation() {
    //     let collection = document.querySelectorAll('#bubble > svg');
    //     collection = Array.prototype.slice.call(collection);
    //
    //     collection.forEach(function (element) {
    //         // Only worked for Chrome
    //         // try {
    //         //     element.animate([
    //         //         {transform: 'translate(0,0)'},
    //         //         {transform: 'translate(' + getDistance() + 'rem,' + getDistance() + 'rem)'}
    //         //     ], {
    //         //         duration: (Math.random() + 1) * 10000
    //         //     });
    //         // } catch(e) {
    //         //     console.log(e);
    //         // }
    //     });
    // }
    //
    // // Generates a random +/- number
    // function getDistance() {
    //     let num = Math.floor(Math.random() * distance) + 1;
    //     return num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    // }

    begin();
}