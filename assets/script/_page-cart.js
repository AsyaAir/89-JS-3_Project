// const btnMakeOrder = document.querySelector('.page-cart__checkout-btn');

// const totalPageCart = document.querySelector('.page-cart__total');
// const totalPageCheckout = document.querySelector('.page-checkout__total');

// console.log(totalPageCheckout);

// // при нажатии на кнопку:
// btnMakeOrder.onclick = () => {
//    // - открой страницу оформление заказа
//    window.open('/89-JS-3_Project/assets/pages/7_checkout.html')
//    // - вставь список выбранных товаров
//    // - вставь тотал
//    totalPageCheckout.textContent = totalPageCart.value + " &#8381;";
// };

// ----- Функционал переноса тотал суммы (с применённой скидкой) со страницы cart на страницу checkout 
// Получаем текущий URL
const currentPage = window.location.pathname;

// Код для страницы Cart
if (currentPage.includes('cart.html')) {
   const btnMakeOrder = document.querySelector('.page-cart__checkout-btn');
   const totalPageCart = document.querySelector('.page-cart__total');

   btnMakeOrder.onclick = () => {
      // Сохраняем `total` в localStorage
      localStorage.setItem('cartTotal', totalPageCart.textContent);

      // Переходим на страницу оформления заказа
      window.location.href = '/89-JS-3_Project/assets/pages/7_checkout.html';
   };
};

// Код для страницы Checkout
if (currentPage.includes('checkout.html')) {
   const totalPageCheckout = document.querySelector('.page-checkout__total');

   // Получаем `total` из localStorage и вставляем его на страницу
   const cartTotal = localStorage.getItem('cartTotal');
   if (cartTotal) {
      totalPageCheckout.textContent = cartTotal;
      // localStorage.removeItem('cartTotal'); // Очищаем `localStorage`, если больше не нужно
   };
};
