let $window = $(window);
const $body = $('body');
let $menuToggle = $('.menu-toggle');
let menuOpen = false;

let $accordionButton = $('[data-accordion-button]');
let $accordionText = $('[data-accordion-text]');
let $accordionHolder = $('[data-accordion-holder]');
let accordionOpen = false;

$(document).ready(function () {

    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        allowTouchMove: true,
        parallax: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(function() {
        $('html, body').animate({
            scrollTop: $('.intro-content').offset().top}, 1000);
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

$accordionButton.click(function (e) {
    e.preventDefault();

    let $this = $(this);
    let $text = $this.prev('p');

    console.log($text);

    if ($text.hasClass('accordion-text')) {

        console.log('open');
        $text.removeClass('accordion-text');
        $text.removeClass('hidden');

    }

    else {

        console.log('close');
        $text.addClass('accordion-text');
        $text.addClass('hidden');

    }

});

