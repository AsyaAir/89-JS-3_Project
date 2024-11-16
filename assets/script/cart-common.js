const currentPage = window.location.pathname;

// oneitem page
if (currentPage.includes('one_item.html')) {
   const itemNamePageOneItem = document.querySelector('.page-title').textContent;
   const itemImgPageOneItem = document.querySelector('.one-item__img').src;
   const itemPricePageOneItem = Number(document.querySelector('.price').textContent.replace('$', ''));
   const itemQuantityPageOneItem = document.querySelector('.quantity__input').value;

   const btnAddToCartPageOneItem = document.querySelector('.button__add-to-cart');

   // запоминаем, какие товары выбрали
   btnAddToCartPageOneItem.onclick = (evt) => {
      evt.preventDefault();

      const itemInfo = {
         name: itemNamePageOneItem,
         img: itemImgPageOneItem,
         price: itemPricePageOneItem,
         quantity: itemQuantityPageOneItem
      }

      let cart = [];
      cart.push(itemInfo);
      localStorage.setItem('cart', JSON.stringify(cart));
   };
};

// cart page
if (currentPage.includes('cart.html')) {
   // получаем и вставляем выбранные товары
   const divTablePageCart = document.querySelector('.page-cart__table');
   const cart = JSON.parse(localStorage.getItem('cart'));
   cart.forEach((item) => {
      divTablePageCart.insertAdjacentHTML('beforeend', 
         `<div class="page-cart__table-row">
            <div class="page-cart__table-row-item">
               <p>x</p>
               <img class="page-cart__table-img" src="${item.img}" alt="item">
               <p class="page-cart__item-name">${item.name}</p>
            </div>
               <p class="page-cart__table-row-rest page-cart__item-price">${item.price} &#8381;</p>
            <div class="page-cart__table-row-rest">
               <input type="number"
               name="itemquantity"
               class="page-cart__table-cell-quantity"
               step="1"
               min="1"
               max="100"
               placeholder="1"
               value="${item.quantity}">
               <!-- <p class="page-cart__table-cell-quantity">1</p> -->
            </div>
            <p class="page-cart__table-row-rest page-cart__item-price-sum"></p>
         </div>`
      );
   });

   // КАЛЬКУЛЯТОРЫ

   const totalPageCart = document.querySelector('.page-cart__total');
   const itemPriceAll = document.querySelectorAll('.page-cart__item-price');
   const itemQuantityAll = document.querySelectorAll('.page-cart__table-cell-quantity');
   const itemPriceSumCellAll = document.querySelectorAll('.page-cart__item-price-sum');
   const btnUpdateCart = document.querySelector('.page-cart__update-btn');

   // КАЛЬКУЛЯТОР СТОИМОСТИ "ВСЕГО" В ЗАВИСИМОСТИ ОТ КОЛИЧЕСТВА

   function updateCart() {
      itemPriceSumCellAll.forEach((itemPriceSumCell, index) => {
         const price = Number(itemPriceAll[index].textContent.replace(' ₽', ''));
         const quantity = itemQuantityAll[index].value;
         const itemPriceSum = price * quantity;
         itemPriceSumCell.textContent = itemPriceSum + ` ₽`;
      });
      calculateTotal();
   };
   updateCart();

   // КАЛЬКУЛЯТОР ТОТАЛ СУММЫ

   function calculateTotal() {
      if (itemPriceSumCellAll.length > 0) {
         let total = 0;
         itemPriceSumCellAll.forEach((itemPriceSumCell => {
            const itemPriceSum = Number(itemPriceSumCell.textContent.replace(' ₽', ''));
            total += itemPriceSum;
         }))
         totalPageCart.textContent = total + ` ₽`;
      } else {
         totalPageCart.textContent = '0 ₽'; // пока не работает
      };
   };

   btnUpdateCart.onclick = (evt) => {
      evt.preventDefault();
      updateCart();
   };

   // КАЛЬКУЛЯТОР СКИДКИ
   // discount20

   const inputDiscount = document.querySelector('.page-cart__input-discount');
   const btnAddDiscount = document.querySelector('.page-cart__discount-btn');
   const totalTextPageCart = document.querySelector('.page-cart__total-text');

   btnAddDiscount.onclick = (evt) => {
      evt.preventDefault();
      if (inputDiscount.value === 'discount20') {
         totalTextPageCart.textContent = 'Итого со скидкой:';

         let total = Number(totalPageCart.textContent.replace(' ₽', ''));
         totalPageCart.textContent = total * 0.8 + ` ₽`;

         inputDiscount.value = '';
      } else {
         inputDiscount.value = '';
      };
   };

   // Функционал переноса названий + итоговых стоимостей товаров и тотал суммы(с применённой скидкой) со страницы cart на страницу checkout
   const btnMakeOrder = document.querySelector('.page-cart__checkout-btn');

   const itemNamePageCart = document.querySelectorAll('.page-cart__item-name');
   const itemSumPageCart = document.querySelectorAll('.page-cart__item-price-sum');
   // const totalTextPageCart = document.querySelector('.page-cart__total-text');

   // const totalPageCart = document.querySelector('.page-cart__total');

   btnMakeOrder.onclick = () => {
      // 1 - создаём массив DOM-объектов, 2 - map - преобразуем в массив строк с введёнными значенями(текстом)
      const itemNames = Array.from(itemNamePageCart).map((item) => {return item.textContent});
      const itemSums = Array.from(itemSumPageCart).map((sum) => {return sum.textContent});
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