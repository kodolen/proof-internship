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
        slidesPerView: 1,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        mousewheel: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            progressbarOpposite: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // $(function () {
    //     $('html, body').animate({
    //         scrollTop: $('.intro-content').offset().top
    //     }, 1000);
    // });

    //Accordions
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

    //Scroll detection for navigation
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

            if (scrollTop > $('.top-content').height() - 50) {

                $body.addClass(('changeColor'));

            }

            else {

                $body.removeClass('changeColor');

            }

        }

        else {

            $body.removeClass('changeColor');

        }

    });

    //check with page you are
    if (location.href === "http://localhost:8000/projecten") {

        $body.addClass(('changeColor'));

    }

    else {

        $body.removeClass('changeColor');

    }

    //Opens and closes hamburger menu
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

    //waypoints
    $(".content-block-text").waypoint(function () {
            $(this[0, 'element']).addClass("animate");

        }, {offset: '75%'}
    );

    $(".quote-block").waypoint(function () {
            $(this[0, 'element']).addClass("animate");

        }, {offset: '75%'}
    );

    $(".content-holder").waypoint(function () {
            $(this[0, 'element']).addClass("animate");

        }, {offset: '40%'}
    );

    $(".intro").waypoint(function () {
            $(this[0, 'element']).addClass("animate");

        }, {offset: '40%'}
    );

    $(".content-wrapper").waypoint(function () {
            $(this[0, 'element']).addClass("animate");

        }, {offset: '50%'}
    );

});




