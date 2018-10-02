$(document).ready(function () {
    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.slider-nav-thumbnails',

    });
    $('.slider-nav-thumbnails').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.hero-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,

    });


});