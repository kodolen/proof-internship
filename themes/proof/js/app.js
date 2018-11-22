let $window = $(window);
let $body = $('body');
let $menuToggle = $('.menu-toggle');
let menuOpen = false;

$window.on('scroll', function () {

    let scrollTop = $window.scrollTop();

    if (scrollTop > 100) {

        console.log('ja');
        $('body').addClass('scrolled');

    }

    else {

        console.log('nee');
        $('body').removeClass('scrolled');

    }

});

$window.on('scroll', function() {

    let scrollTop = $window.scrollTop();

    if(scrollTop > $('.home-visual').height() - 50) {

        $body.addClass(('changeColor'));

    }

    else {

        $body.removeClass('changeColor');

    }

});

$menuToggle.click(function () {

    if (menuOpen === false) {

        $body.addClass('menu-open');
        menuOpen = true;

    }

    else {

        $body.removeClass('menu-open');
        menuOpen = false;

    }

});

