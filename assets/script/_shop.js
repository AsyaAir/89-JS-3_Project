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

// фильтр товаров
const filterItems = document.querySelectorAll('.filter-item');
let currentCategory = "all";
let currentPage = 1; 
const itemsPerPage = 9;

// Функция для отображения товаров на странице
const renderProducts = (category, page) => {
    // Очищаем контейнер
    shopCardsContainer.innerHTML = "";

    // Фильтруем товары по категории
    const filteredProducts = products.filter(product => {
        return category === "all" || product.category === category;
    });

    // Пагинация: расчёт товаров для текущей страницы
    const startIndex = (page - 1) * itemsPerPage;
    const currentPageItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    const totalCountElement = document.getElementById('total');
    const countElement = document.getElementById('count');

    //счетчик товаров
    totalCountElement.textContent = filteredProducts.length;
    countElement.textContent = currentPageItems.length; // показано кол-во

    // добавляем карточки на страницу
    currentPageItems.forEach(product => {
        const card = createCard(product);
        shopCardsContainer.appendChild(card);
    });

    // номер страницы
    document.getElementById('page-number').textContent = currentPage;
};

// Обработчик кликов по фильтрам
filterItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Обновляем активный фильтр
        filterItems.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');

        // Получаем категорию и перерисовываем товары
        currentCategory = e.target.getAttribute('data-category');
        renderProducts(currentCategory, 1);
    });
});

// Обработчик пагинации
document.getElementById('next').addEventListener('click', () => {
    const totalPages = Math.ceil(products.filter(product => currentCategory === "all" || product.category === currentCategory).length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderProducts(currentCategory, currentPage);
    }
});

renderProducts("all", 1);