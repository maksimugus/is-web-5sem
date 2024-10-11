function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
}

// Показать кнопку при прокрутке
window.onscroll = function() {
    const button = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        button.style.display = "block"; // Показать кнопку
    } else {
        button.style.display = "none"; // Скрыть кнопку
    }
};