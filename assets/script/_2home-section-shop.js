// Настя
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