import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import $ from 'jquery'
import 'slick-carousel'
    
window.jQuery = window.$ = $; 

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