const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
    },

    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 40,
    grabCursor: true,

    slideToClickedSlide: true,

    hashNavigation: {
        watchState: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    slidesPerView: 1,
});