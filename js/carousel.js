$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
    $.js('slider-block').slick({
        infinite: false,
        arrows: true,
        prevArrow:$(".prev"),
        nextArrow:$(".next"),
        dots: false,
        autoplay: false,
        speed: 1100,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]

    });
}
window.onload = carousel
