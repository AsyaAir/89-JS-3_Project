// 1. Код для загрузки и кэширования данных из item.json при загрузке главной страницы

// Функция для загрузки данных из assets/json/items.json
async function loadItemsFromFile() {
  // Проверяем, есть ли данные в localStorage
  let items = JSON.parse(localStorage.getItem('items'));

  // Если данных нет, загружаем их из JSON файла и сохраняем в localStorage
  if (!items) {
    try {
      const response = await fetch('../json/items.json'); // Убедитесь, что путь правильный
      const data = await response.json();
      // Сохраняем данные в localStorage
      localStorage.setItem('items', JSON.stringify(data));
      items = data; // Записываем данные в переменную
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      return []; // Возвращаем пустой массив в случае ошибки
    }
  }

  return items;
}

// Загрузка и рендер данных на главной странице
loadItemsFromFile().then(items => {
  renderItems(items);
});

// Проверка существования элемента в DOM перед изменением

document.addEventListener('DOMContentLoaded', function () {
  // Получаем все контейнеры для карточек товаров
  const itemCards = document.querySelectorAll('.item-card__container');

  // Проверяем, есть ли хотя бы один контейнер
  if (itemCards.length > 0) {
    itemCards.forEach((card, index) => {
      // Здесь можно менять контент в каждой карточке или выполнять другие действия
      console.log(`Карточка ${index + 1} найдена`);
      // Пример изменения текста заголовка в каждой карточке
      const title = card.querySelector('.item-card__container_title');
      if (title) {
        title.textContent = "Новая футболка USA " + (index + 1);
      }
    });
  } else {
    console.log("Карточки товаров не найдены");
  }
});

// Функция для рендера случайных карточек товаров
function renderItems(items) {
  const container = document.querySelector('.shop'); // Контейнер для карточек на главной странице
  container.innerHTML = ''; // Очищаем контейнер перед добавлением карточек

  if (items.length === 0) {
    container.innerHTML = '<p>Товары не найдены. Проверьте данные в localStorage.</p>';
    return;
  }

  // Фильтруем товары по категориям
  const categories = ['Футболки', 'Купальники', 'Свитшоты'];

  categories.forEach(category => {
    // Фильтруем товары по текущей категории
    const categoryItems = items.filter(item => item.category === category);
    
    // Если в категории есть товары, выбираем случайный
    if (categoryItems.length > 0) {
      const randomItem = categoryItems[Math.floor(Math.random() * categoryItems.length)];
      
      // Создаем карточку для случайного товара из категории
      const card = document.createElement('div');
      card.className = 'item-card';
      card.innerHTML = `
        <div class="item-card__container item-card__container_photo">
          <img src="../images/${randomItem.image}" alt="${randomItem.name}">
          <div class="item-card__overlay">
            <a href="one_item.html?id=${randomItem.id}" class="item-card__container item-card__container_arrow">
              <img src="../icon/arrow-wight_right.svg" alt="arrow_right">
            </a>
          </div>
        </div>
        <h4 class="card-title item-card__container item-card__container_title">${randomItem.name}</h4>
        <div class="item-card__container item-card__container_price">
          ${randomItem.discounted_price ? `<span class="old-price">${randomItem.price}</span> ${randomItem.discounted_price}` : randomItem.price}
        </div>
      `;
      container.appendChild(card);
    }
  });
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