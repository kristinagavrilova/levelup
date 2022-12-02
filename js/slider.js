const slider = $('.item__user');
const slideCount = slider.length;


let slideWidth = slider.width();
let slideHeight = slider.height();
let sliderUlWidth = slideCount * slideWidth;

$('.section-slider__slider').css({width: slideWidth, height: slideHeight});

$('.section-slider__item').css({width: sliderUlWidth, marginLeft: -slideWidth});

$('.item__user:last-child').prependTo('item__user');

function moveLeft() {
    $('.section-slider__item').animate({
        left: +slideWidth
    }, 200, function () {
        $('.item__user:last-child').prependTo('section-slider__item');
        $('.section-slider__item').css('left', '');
    });
}

function moveRight() {
    $('.section-slider__item').animate({
        left: -slideWidth
    }, 200, function () {
        $('.item__user:first-child').appendTo('.section-slider__item');
        $('.section-slider__item').css('left', '');
    });
}

$('.js-control_prev').click(function () {
    moveLeft();
});

$('.js-control_next').click(function () {
    moveRight();
});

window.addEventListener('resize', () => {
    slideWidth = slider.width();
    slideHeight = slider.height();
    sliderUlWidth = slideCount * slideWidth;

    $('.section-slider__slider').css({width: slideWidth, height: slideHeight});
    $('.section-slider__item').css({width: sliderUlWidth, marginLeft: -slideWidth});
}, true);