// 1. Начальное количество товаров и функция обновления счётчика
let cartItemsCount = 0;
const btnMakeOrder = document.querySelector('.page-cart__checkout-btn');
if (btnMakeOrder) {
    // Привязка обработчика событий
} 

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

// 2. Загрузка JSON данных
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
}
