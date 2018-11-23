let $window = $(window);
let $body = $('body');
let $menuToggle = $('.menu-toggle');
let menuOpen = false;

$(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        allowTouchMove: true,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    var mySwiper = document.querySelector('.swiper-container').swiper;

    $('.swiper-button-next').click(function () {
        mySwiper.slideNext();
    });
    $('.swiper-button-prev').click(function () {
        mySwiper.slidePrev();
    });

});

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

$window.on('scroll', function () {

    let scrollTop = $window.scrollTop();

    if (scrollTop > $('.home-visual').height() - 50) {

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

