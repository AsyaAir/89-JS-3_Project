const products = [
    {
        "name": "Свитшот Sweet Shot",
        "category": "Свитшоты",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 450,
        "discounted_price": 311,
        "image": "89-JS-3_Project/assets/images/one-item_sweatshot_sweet_shot.png"
    },
    {
        "name": "Свитшот Black Swan",
        "category": "Свитшоты",
        "colors": ["Черный", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 450,
        "discounted_price": 311,
        "image": "89-JS-3_Project/assets/images/item_sweatshot_black_swan.png"
    },
    {
        "name": "Свитшот Harajuku",
        "category": "Свитшоты",
        "colors": ["Бирюзовый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 450,
        "discounted_price": 311,
        "image": "89-JS-3_Project/assets/images/item_sweatshot_harajuku.png"
    },
    {
        "name": "Свитшот Green Stripes",
        "category": "Свитшоты",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 450,
        "discounted_price": 311,
        "image": "89-JS-3_Project/assets/images/item_sweatshot_green_stripes.png"
    },
    {
        "name": "Футболка USA",
        "category": "Футболки",
        "colors": ["Серый", "Белый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 229,
        "discounted_price": 129,
        "image": "89-JS-3_Project/assets/images/header_photos-products_one.png"
    },
    {
        "name": "Футболка Life",
        "category": "Футболки",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 229,
        "discounted_price": 129,
        "image": "89-JS-3_Project/assets/images/item_t_shirt_life.png"
    },
    {
        "name": "Футболка Nice",
        "category": "Футболки",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 229,
        "discounted_price": 129,
        "image": "89-JS-3_Project/assets/images/item_t_shirt_nice.png"
    },
    {
        "name": "Футболка Happy",
        "category": "Футболки",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 229,
        "discounted_price": 129,
        "image": "89-JS-3_Project/assets/images/item_t_shirt_happy.png"
    },
    {
        "name": "Купальник Glow",
        "category": "Купальники",
        "colors": ["Черный", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 129,
        "discounted_price": 107,
        "image": "89-JS-3_Project/assets/images/header_photos-products_two.png"
    },
    {
        "name": "Купальник Black",
        "category": "Купальники",
        "colors": ["Черный", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 129,
        "discounted_price": 107,
        "image": "89-JS-3_Project/assets/images/item_swimsuit_black.png"
    },
    {
        "name": "Купальник Botanical",
        "category": "Купальники",
        "colors": ["Зеленый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 129,
        "discounted_price": 107,
        "image": "89-JS-3_Project/assets/images/item_swimsuit_botanical.png"
    },  
    {
        "name": "Купальник Pink Dreem",
        "category": "Купальники",
        "colors": ["Розовый", "Серый", "Черный", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 129,
        "discounted_price": 107,
        "image": "89-JS-3_Project/assets/images/item_swimsuit_pink_dreem.png"
    },
    {
        "name": "Пальто Light",
        "category": "Пальто",
        "colors": ["Теракотовый", "Серый", "Черный", "Розовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 940,
        "discounted_price": 720,
        "image": "89-JS-3_Project/assets/images/homesec-main_1.png"
    },  
    {
        "name": "Пальто Calm",
        "category": "Пальто",
        "colors": ["Коричневый", "Серый", "Черный", "Розовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 940,
        "discounted_price": 720,
        "image": "89-JS-3_Project/assets/images/item_coat_calm.png"
    },
    {
        "name": "Пальто Over",
        "category": "Пальто",
        "colors": ["Коричневый", "Серый", "Черный", "Розовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 940,
        "discounted_price": 720,
        "image": "89-JS-3_Project/assets/images/item_coat_over.png"
    }, 
    {
        "name": "Пальто Green Dream",
        "category": "Пальто",
        "colors": ["Зеленый", "Серый", "Черный", "Розовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 940,
        "discounted_price": 720,
        "image": "89-JS-3_Project/assets/images/item_coat_green_dream.png"
    }  
]

const createCard = (obj) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <div class="item-card__container" id="item-card">
            <div class="item-card__container item-card__container_photo">
                <img src="${obj.image}" alt="${obj.name}">
                <div class="item-card__overlay">
                    <a href="./assets/script/_one_item.js" class="item-card__container item-card__container_arrow">
                        <img src="../icon/arrow-wight_right.svg" alt="arrow_right">
                    </a>
                </div>
            </div>
            <h4 class="card-title item-card__container item-card__container_title">${obj.name}</h4>
            <div class="item-card__container item-card__container_price">
                $${obj.discounted_price} <span class="original-price">$${obj.price}</span>
            </div>
        </div>
    `;

    return card;
}

const shopCardsContainer = document.querySelector('.shop-container__cards');
products.forEach((element) => {
    const card = createCard(element);
    shopCardsContainer.appendChild(card);
});

const totalCountElement = document.getElementById('total');
const countElement = document.getElementById('count');

//счетчик товаров
totalCountElement.textContent = products.length;
countElement.textContent = products.length; // показано кол-во

// =============== другой варинт ===============

//получение данных из API
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}

//отображение товаров на странице
function createCards(products, category) {
    const container = document.querySelector('.shop-container__cards');
    container.innerHTML = ''; 

    filterProducts.forEach(product => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <div class="item-card__container" id="item-card">
                <div class="item-card__container item-card__container_photo">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="item-cardoverlay">
                        <a href="./assets/script/_one_item.js" class="item-cardc__ontainer item-card__container_arrow">
                            <img src="../icon/arrow-wight_right.svg" alt="arrow_right">
                        </a>
                    </div>
                </div>
                <h4 class="card-title item-cardcontainer item-cardcontainer_title">${product.name}</h4>
                <div class="item-cardcontainer item-card__container_price">$${product.price} $${product.discounted_price}</div>
            </div>
        `;
        container.appendChild(itemCard);
    });

    // счетчик товаров
    document.getElementById('item-count').textContent = filterProducts.length;

    // Фильтруем продукты по категории
    const filterProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
}

// Обработчик кликов по фильтрам
function setupFilters(products) {
    const filterItems = document.querySelectorAll('.filter-item');
    filterItems.forEach(filter => {
        filter.addEventListener('click', () => {
            filterItems.forEach(item => item.classList.remove('active'));
            filter.classList.add('active');
            const category = filter.getAttribute('data-category');
            createCards(products, category);
        });
    });
}

//инициализации страницы
async function init() {
    const products = await fetchProducts(); 
    setupFilters(products); 
    createCards(products, 'all');
}
init();
