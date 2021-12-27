import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import $ from 'jquery'
import 'slick-carousel'
    
window.jQuery = window.$ = $; 

$('.products').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: $('.arr__prev'),
    nextArrow: $('.arr__next'),
});