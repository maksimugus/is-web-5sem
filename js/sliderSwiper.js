const swiper = new Swiper('.swiper-container', {
    loop: true,

    autoplay: {
        delay: 3000,
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 30,
    grabCursor: true,

    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    slidesPerView: 1.5,
});