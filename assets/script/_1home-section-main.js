document.addEventListener("DOMContentLoaded", function () {
    const textTitles = document.querySelectorAll(".text-slider__title");
    const textParagraphs = document.querySelectorAll(".text-slider__text");
    const imageSlides = document.querySelectorAll(".photo-section__slider img");
    const dots = document.querySelectorAll(".scroll-bar__dot");

    let currentSlide = 0;

    // Функция для обновления отображения слайдов и активного буллита
    function updateSlides(index) {
        // Обновление заголовков и текстов
        textTitles.forEach((title, i) => {
            title.classList.toggle("active", i === index);
        });
        textParagraphs.forEach((text, i) => {
            text.classList.toggle("active", i === index);
        });

        // Обновление фото слайдов
        imageSlides.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });

        // Обновление активного буллита
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentSlide = index;
    }

    // Инициализация первого слайда
    updateSlides(currentSlide);

    // Обработчики для кликов по буллитам
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            updateSlides(index);
        });
    });
});