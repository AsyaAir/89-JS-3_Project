const totalPageCart = document.querySelector('.page-cart__total');

// КАЛЬКУЛЯТОР ТОТАЛ СУММЫ

const itemPriceSumPageCart = document.querySelectorAll('.page-cart__item-price-sum');
const itemPriceSums = Array.from(itemPriceSumPageCart).map((itemPriceSum) => {
   return Number(itemPriceSum.textContent.replace(' ₽', ''));
});

if (itemPriceSums) {
   let total = 0;
   itemPriceSums.forEach(itemsum => total += itemsum);
   totalPageCart.textContent = total + ` ₽`;
} else {
   totalPageCart.textContent = '0 ₽';
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