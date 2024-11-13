// 1. Начальное количество товаров и функция обновления счётчика
let cartItemsCount = 0;

function updateCartCount(count) {
  const cartCountElement = document.querySelector('.cart-item__count');
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}

// Пример функции добавления товара в корзину
function addToCart() {
  cartItemsCount++;
  updateCartCount(cartItemsCount);
}

// Обработчик событий для кнопки добавления в корзину
document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);

// 2. Реализация навигации "Хлебные крошки"
const breadcrumbContainer = document.querySelector('.breadcrumbs');
if (breadcrumbContainer) {
  breadcrumbContainer.innerHTML = '';
  const breadcrumbs = [
    { name: 'Главная', url: './1_page_home.html' },
    { name: 'Свитшоты', url: 'http://' },
    { name: 'Свитшот Sweet Shot', url: '' } // Последний элемент без URL
  ];

  breadcrumbs.forEach((crumb, index) => {
    if (crumb.url) {
      const link = document.createElement('a');
      link.href = crumb.url;
      link.textContent = crumb.name;
      breadcrumbContainer.appendChild(link);
    } else {
      const span = document.createElement('span');
      span.textContent = crumb.name;
      breadcrumbContainer.appendChild(span);
    }

    if (index < breadcrumbs.length - 1) {
      const separator = document.createElement('span');
      separator.textContent = ' — ';
      breadcrumbContainer.appendChild(separator);
    }
  });
}

// 3. Загрузка JSON данных
fetch('items.json')
  .then(response => response.json())
  .then(data => {
    const productId = "Свитшот Sweet Shot";  // Уникальный ID товара
    const product = data.find(item => item.name === productId);

    if (product) {
      document.getElementById('product-title').textContent = product.name;
      document.getElementById('product-image').src = product.image;
      document.getElementById('product-price').textContent = `$${product.price}`;
      document.getElementById('product-old-price').textContent = `$${product.discounted_price}`;

      const colorsContainer = document.getElementById('product-colors');
      colorsContainer.innerHTML = '';
      product.colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.style.backgroundColor = color;
        colorsContainer.appendChild(colorOption);
      });

      const sizesContainer = document.getElementById('product-sizes');
      sizesContainer.innerHTML = '';
      product.sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizesContainer.appendChild(sizeOption);
      });

      // Обработчик для кнопки "Добавить в корзину"
      document.getElementById('add-to-cart-btn').addEventListener('click', () => {
        addToCart(product);
      });
    }
  })
  .catch(error => console.error('Ошибка загрузки данных:', error));

// Функция добавления товара в корзину
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};

  if (cart[product.name]) {
    cart[product.name].quantity += 1;
  } else {
    cart[product.name] = { ...product, quantity: 1 };
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartIcon();
}

// Обновление иконки корзины
function updateCartIcon() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  const cartIcon = document.querySelector('.cart-item .cart-item__count');
  if (totalItems > 0) {
    cartIcon.textContent = totalItems;
    cartIcon.style.display = 'block';
  } else {
    cartIcon.style.display = 'none';
  }
}

// Инициализация количества товаров при загрузке страницы
updateCartIcon();