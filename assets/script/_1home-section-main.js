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

document.addEventListener("DOMContentLoaded", function () {
    const textSlides = document.querySelectorAll(".info-section__text-slider .info-section__text");
    const imageSlides = document.querySelectorAll(".photo-section__slider img");
    const dots = document.querySelectorAll(".scroll-bar__dot");

    let currentSlide = 0;

    // Функция для обновления видимости слайдов
    function updateSlides(index) {
        // Обновляем текстовые слайды
        textSlides.forEach(slide => slide.style.display = "none");
        textSlides[index].style.display = "block";

        // Обновляем фото слайды
        imageSlides.forEach(slide => slide.style.display = "none");
        imageSlides[index].style.display = "block";

        // Обновляем активную точку
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");

        currentSlide = index;
    }

    // Устанавливаем начальные значения
    updateSlides(currentSlide);

    // Обработчик кликов по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            updateSlides(index);
        });
    });

    // Автопрокрутка слайдов (опционально)
    setInterval(() => {
        currentSlide = (currentSlide + 1) % textSlides.length;
        updateSlides(currentSlide);
    }, 5000); // Меняет слайд каждые 5 секунд
});