document.addEventListener('DOMContentLoaded', function() {
    // Плавное появление элементов при загрузке
    const animateOnLoad = () => {
        const elements = document.querySelectorAll('.character-card, .intro');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };

    // Инициализация
    const init = () => {
        // Установка начального состояния для анимации
        document.querySelectorAll('.character-card, .intro').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        // Запуск анимации
        setTimeout(animateOnLoad, 100);
    };

    init();
});
