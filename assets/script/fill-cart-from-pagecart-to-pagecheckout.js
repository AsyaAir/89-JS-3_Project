// Функционал переноса названий + итоговых стоимостей товаров и тотал суммы(с применённой скидкой) со страницы cart на страницу checkout

// Получаем текущий URL
const currentPage = window.location.pathname;

// Код для страницы Cart
if (currentPage.includes('cart.html')) {
   const btnMakeOrder = document.querySelector('.page-cart__checkout-btn');

   const itemNamePageCart = document.querySelectorAll('.page-cart__item-name');
   const itemNames = Array.from(itemNamePageCart).map((item) => {return item.textContent}); // 1 - создаём массив DOM-объектов, 2 - map - преобразуем в массив строк с введёнными значенями(текстом)
   const itemSumPageCart = document.querySelectorAll('.page-cart__item-price-sum');
   const itemSums = Array.from(itemSumPageCart).map((sum) => {return sum.textContent});

   const totalTextPageCart = document.querySelector('.page-cart__total-text');

   const totalPageCart = document.querySelector('.page-cart__total');

   btnMakeOrder.onclick = () => {
      // Сохраняем название и сумму товаров в localStorage
      localStorage.setItem('itemNames', JSON.stringify(itemNames));
      localStorage.setItem('itemSums', JSON.stringify(itemSums));

      // Сохраняем текст ("с или без скидки") в localStorage
      localStorage.setItem('cartTotalText', totalTextPageCart.textContent)

      // Сохраняем `total` в localStorage
      localStorage.setItem('cartTotal', totalPageCart.textContent);

      // Переходим на страницу оформления заказа
      window.location.href = '/89-JS-3_Project/assets/pages/7_checkout.html';
   };
};

// Код для страницы Checkout
if (currentPage.includes('checkout.html')) {
   // Получаем название и сумму товаров из localStorage и вставляем на страницу
   const itemNames = JSON.parse(localStorage.getItem('itemNames'));
   const itemSums = JSON.parse(localStorage.getItem('itemSums'));
   const divCartPageCheckout = document.querySelector('.page-checkout__cart-sum');
   const divCartSummeryPageCheckout= document.querySelector('.page-checkout__cart-sum__result');
   itemNames.forEach((name, index) => {
      const sum = itemSums[index]; // Получаем соответствующую сумму

      const divCartRowContentPageCheckout = document.createElement('div');
      divCartRowContentPageCheckout.classList.add('page-checkout__cart-sum__row-content');
      divCartRowContentPageCheckout.innerHTML = `
         <p>${name}</p>
         <p>${sum}</p>`;
      divCartPageCheckout.insertBefore(divCartRowContentPageCheckout, divCartSummeryPageCheckout); // вставляем внутри divCartPageCheckout, но перед divCartSummeryPageCheckout
   });

   // Получаем текст "Итого с/без скидки"
   const cartTotalText = localStorage.getItem('cartTotalText');
   const totalTextPageCheckout = document.querySelector('.page-checkout__total-text');
   totalTextPageCheckout.textContent = cartTotalText;

   // Получаем `total` из localStorage и вставляем его на страницу
   const cartTotal = localStorage.getItem('cartTotal');
   const totalPageCheckout = document.querySelector('.page-checkout__total');
   if (cartTotal) {
      totalPageCheckout.textContent = cartTotal;
      // localStorage.removeItem('cartTotal'); // Очищаем `localStorage`, если больше не нужно
   };
};