// Настя
// 1. Код для загрузки и кэширования данных из item.json при загрузке главной страницы

// Функция для загрузки данных из assets/json/items.json
async function loadItemsFromFile() {
  // Проверка, есть ли данные в localStorage
  let items = JSON.parse(localStorage.getItem('items'));

  // Если данных нет, загружаем их из JSON файла и сохраняем в localStorage
  if (!items) {
    try {
      const response = await fetch('../json/items.json');
      const data = await response.json();
      // Сохраняем данные в localStorage
      localStorage.setItem('items', JSON.stringify(data));
      items = data; // данные в переменную
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      return []; // Возврат пустой массив в случае ошибки
    }
  }

  return items;
}

// Загрузка и рендер данных на главной странице
loadItemsFromFile().then(items => {
  renderItems(items);
});


// 2. Определение элементов слайдера
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
    resetAutoSlide(); // Сброс авто-слайд при клике на точку
  });
});

// Добавление авто-слайда с интервалом
let autoSlideInterval = setInterval(nextSlide, 5000); // меняет слайд каждые 5 секунд

// Функция для сброса авто-слайда при ручном управлении
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 5000); // снова запуск авто-слайда
}