import 'slick-carousel';
import $ from 'jquery'
    
window.jQuery = window.$ = $; 

export function slickJs() {
    $('.hits__products').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: $('.arr__prev_hits'),
        nextArrow: $('.arr__next_hits'),
    });

    $('.goodies__products').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: $('.arr__prev_goodies'),
        nextArrow: $('.arr__next_goodies'),
    });

    $('.toys__products').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: $('.arr__prev_toys'),
        nextArrow: $('.arr__next_toys'),
    });

    $('.promo__products').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: $('.arr__prev_promo'),
        nextArrow: $('.arr__next_promo'),
    });

    $('.viewed__products').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.arr__prev_view'),
        nextArrow: $('.arr__next_view'),
    });

    $('.banners').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
    });

    $('.reviews__slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.arr__prev_review'),
        nextArrow: $('.arr__next_review'),
    });

    $('.news__slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.arr__prev_news'),
        nextArrow: $('.arr__next_news'),
    });
}