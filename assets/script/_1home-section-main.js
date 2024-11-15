// Определяем элементы слайдера
const textSlides = document.querySelectorAll('.text-slider__title, .text-slider__text');
const imageSlides = document.querySelectorAll('.photo-section__slider img');
const dots = document.querySelectorAll('.scroll-bar__dot');

let currentSlide = 0;
const totalSlides = textSlides.length / 2; // половина элементов - заголовки, половина - текст

// Функция для показа слайда
function showSlide(index) {
  // Скрыть все слайды
  textSlides.forEach((slide) => slide.style.display = 'none');
  imageSlides.forEach((img) => img.style.display = 'none');
  dots.forEach((dot) => dot.classList.remove('active'));

  // Показать текущий слайд
  document.querySelector(`.text-slider__title[data-slide="${index}"]`).style.display = 'block';
  document.querySelector(`.text-slider__text[data-slide="${index}"]`).style.display = 'block';
  document.querySelector(`.photo-section__slider img[data-slide="${index}"]`).style.display = 'block';
  dots[index].classList.add('active');
}

// Функции для переключения слайдов
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Инициализация слайдера
showSlide(currentSlide);

// Привязка точек индикатора прокрутки
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoSlide(); // Сбрасываем авто-слайд при клике на точку
  });
});

// Добавляем авто-слайд с интервалом
let autoSlideInterval = setInterval(nextSlide, 5000); // меняет слайд каждые 5 секунд

// Функция для сброса авто-слайда при ручном управлении
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 5000); // снова запускаем авто-слайд
}