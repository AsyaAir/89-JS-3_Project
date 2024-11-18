// при каждом клике на кнопку добавить в корзину
// сохраняется в локал стораж [картинка + назв + ст-ть + кол-во]

// открывая страницу корзина
// необходимо проверить, есть ли что-то в локал стораж,
// и если есть добавить

const currentPage2 = window.location.pathname;

// oneitem page
if (currentPage2.includes('one_item.html')) {
   const itemNamePageOneItem = document.querySelector('.page-title').textContent;
   const itemImgPageOneItem = document.querySelector('.one-item__img').src;
   const itemPricePageOneItem = Number(document.querySelector('.price').textContent.replace('$', ''));
   const itemQuantityPageOneItem = document.querySelector('.quantity__input').value;

   const btnAddToCartPageOneItem = document.querySelector('.button__add-to-cart');

   btnAddToCartPageOneItem.onclick = (evt) => {
      evt.preventDefault();
      localStorage.setItem('itemName', JSON.stringify(itemNamePageOneItem));
      localStorage.setItem('itemImg', JSON.stringify(itemImgPageOneItem));
      localStorage.setItem('itemPrice', JSON.stringify(itemPricePageOneItem));
      localStorage.setItem('itemQuantity', JSON.stringify(itemQuantityPageOneItem));
   };
};

// cart page
if (currentPage2.includes('cart.html')) {
   // const itemNamePageCart = document.querySelector('.page-cart__item-name');
   // const itemImgPageCart = document.querySelector('.page-cart__table-img');
   // const itemPricePageCart = document.querySelector('.page-cart__item-price');
   // const itemQuantityPageCart = document.querySelector('.page-cart__table-cell-quantity');

   const itemName = JSON.parse(localStorage.getItem('itemName'));
   const itemImg = JSON.parse(localStorage.getItem('itemImg'));
   const itemPrice = JSON.parse(localStorage.getItem('itemPrice'));
   const itemQuantity = JSON.parse(localStorage.getItem('itemQuantity'));

   const divTablePageCart = document.querySelector('.page-cart__table');
   divTablePageCart.insertAdjacentHTML('beforeend', 
      `<div class="page-cart__table-row">
         <div class="page-cart__table-row-item">
            <p>x</p>
            <img class="page-cart__table-img" src="${itemImg}" alt="item">
            <p class="page-cart__item-name">${itemName}</p>
         </div>
            <p class="page-cart__table-row-rest page-cart__item-price">${itemPrice} &#8381;</p>
         <div class="page-cart__table-row-rest">
            <input type="number"
            name="itemquantity"
            class="page-cart__table-cell-quantity"
            step="1"
            min="1"
            max="100"
            placeholder="1"
            value="${itemQuantity}">
            <!-- <p class="page-cart__table-cell-quantity">1</p> -->
         </div>
         <p class="page-cart__table-row-rest page-cart__item-price-sum"></p>
      </div>`);
};