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