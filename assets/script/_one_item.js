// 1. Начальное количество товаров и функция обновления счётчика
let cartItemsCount = 0;
const btnMakeOrder = document.querySelector('.page-cart__checkout-btn');
if (btnMakeOrder) {
    // Привязка обработчика событий
} 

function updateCartIcon() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  const cartIcon = document.querySelector('.cart-item .cart-item__count');
  if (cartIcon) {
    cartIcon.textContent = totalItems;
    cartIcon.style.display = totalItems > 0 ? 'block' : 'none';
  }
}

// Пример функции добавления товара в корзину
function addToCart() {
  cartItemsCount++;
  updateCartCount(cartItemsCount);
}

// Обработчик событий для кнопки добавления в корзину
document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);


// Функция добавления товара в корзину
function addToCart(product = null) {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  if (!product) {
    console.error('Product not found');
    return;
}

  if (cart[product.name]) {
    cart[product.name].quantity += 1;
  } else {
    cart[product.name] = { ...product, quantity: 1 };
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartIcon();
    showAddedToCartMessage(product.name); // Отображаем сообщение
}


// / Функция для отображения сообщения о добавлении в корзину
function showAddedToCartMessage() {
  // Находим элемент с заголовком товара
  const productTitleElement = document.querySelector('.page-title');    // временно, пока не настрон локальный сторэдж и JSON
  
  // Получаем имя товара из заголовка, если он существует
  const productName = productTitleElement ? productTitleElement.textContent : 'Товар';

  // Создаем элемент сообщения
  const message = document.createElement('div');
  message.className = 'added-to-cart-message';
  message.textContent = `${productName} добавлен(а) в корзину`;

  // Добавляем сообщение в тело документа
  document.body.appendChild(message);

  // Скрываем сообщение через 3 секунды
  setTimeout(() => {
    message.remove();
  }, 3000);
}

// Загрузка JSON данных о товаре
fetch('items.json')
  .then(response => response.json())
  .then(data => {
    const productId = "Свитшот Sweet Shot"; // Уникальный ID товара
    const product = data.find(item => item.name === productId);

    if (product) {
      // Обновление данных на странице
      document.querySelector('.page-title').textContent = product.name;
      document.querySelector('.one-item__img').src = product.image;
      document.getElementById('product-price').textContent = `$${product.price}`;
      document.getElementById('product-old-price').textContent = `$${product.discounted_price}`;

      // Добавление обработчика на кнопку
      document.getElementById('add-to-cart-btn').addEventListener('click', () => {
        addToCart(product);
      });
    }
  })
  .catch(error => console.error('Ошибка загрузки данных:', error));

// Инициализация количества товаров при загрузке страницы
updateCartIcon();







// // 2. Загрузка JSON данных
// fetch('items.json')
//   .then(response => response.json())
//   .then(data => {
//     const productId = "Свитшот Sweet Shot";  // Уникальный ID товара
//     const product = data.find(item => item.name === productId);

//     if (product) {
//       document.getElementById('product-title').textContent = product.name;
//       document.getElementById('product-image').src = product.image;
//       document.getElementById('product-price').textContent = `$${product.price}`;
//       document.getElementById('product-old-price').textContent = `$${product.discounted_price}`;

//       const colorsContainer = document.getElementById('product-colors');
//       colorsContainer.innerHTML = '';
//       product.colors.forEach(color => {
//         const colorOption = document.createElement('div');
//         colorOption.className = 'color-option';
//         colorOption.style.backgroundColor = color;
//         colorsContainer.appendChild(colorOption);
//       });

//       const sizesContainer = document.getElementById('product-sizes');
//       sizesContainer.innerHTML = '';
//       product.sizes.forEach(size => {
//         const sizeOption = document.createElement('div');
//         sizeOption.className = 'size-option';
//         sizeOption.textContent = size;
//         sizesContainer.appendChild(sizeOption);
//       });

//       // Обработчик для кнопки "Добавить в корзину"
//       document.getElementById('add-to-cart-btn').addEventListener('click', () => {
//         addToCart(product);
//       });
//     }
//   })
//   .catch(error => console.error('Ошибка загрузки данных:', error));


