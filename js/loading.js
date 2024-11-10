(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        const loadTime = endTime - startTime;
        document.getElementById("loading-info").innerText = `Время загрузки страницы: ${loadTime} мс.`;
    });

    // Добавление интерактивности к меню
    const menuItems = document.querySelectorAll('.menu-main a');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered');
        });
    });
})();