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