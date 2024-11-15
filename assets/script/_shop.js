const products = [
    {
        "name": "Свитшот Sweet Shot",
        "category": "Свитшоты",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 450,
        "discounted_price": 311,
        "image": "./assets/images/one-item_sweatshot_sweet_shot.png"
    },
    {
        "name": "Свитшот Black Swan",
        "category": "Свитшоты",
        "colors": ["Черный", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 450,
        "discounted_price": 311,
        "image": "./assets/images/item_sweatshot_black_swan.png"
    },
    {
        "name": "Свитшот Harajuku",
        "category": "Свитшоты",
        "colors": ["Бирюзовый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 450,
        "discounted_price": 311,
        "image": "./assets/images/item_sweatshot_harajuku.png"
    },
    {
        "name": "Свитшот Green Stripes",
        "category": "Свитшоты",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 450,
        "discounted_price": 311,
        "image": "./assets/images/item_sweatshot_green_stripes.png"
    },
    {
        "name": "Футболка USA",
        "category": "Футболки",
        "colors": ["Серый", "Белый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 229,
        "discounted_price": 129,
        "image": "./assets/images/header_photos-products_one.png"
    },
    {
        "name": "Футболка Life",
        "category": "Футболки",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 229,
        "discounted_price": 129,
        "image": "./assets/images/item_t_shirt_life.png"
    },
    {
        "name": "Футболка Nice",
        "category": "Футболки",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 229,
        "discounted_price": 129,
        "image": "./assets/images/item_t_shirt_nice.png"
    },
    {
        "name": "Футболка Happy",
        "category": "Футболки",
        "colors": ["Белый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 229,
        "discounted_price": 129,
        "image": "./assets/images/item_t_shirt_happy.png"
    },
    {
        "name": "Купальник Glow",
        "category": "Купальники",
        "colors": ["Черный", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 129,
        "discounted_price": 107,
        "image": "./assets/images/header_photos-products_two.png"
    },
    {
        "name": "Купальник Black",
        "category": "Купальники",
        "colors": ["Черный", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 129,
        "discounted_price": 107,
        "image": "./assets/images/item_swimsuit_black.png"
    },
    {
        "name": "Купальник Botanical",
        "category": "Купальники",
        "colors": ["Зеленый", "Серый", "Розовый", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 129,
        "discounted_price": 107,
        "image": "./assets/images/item_swimsuit_botanical.png"
    },  
    {
        "name": "Купальник Pink Dreem",
        "category": "Купальники",
        "colors": ["Розовый", "Серый", "Черный", "Теракотовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 129,
        "discounted_price": 107,
        "image": "./assets/images/item_swimsuit_pink_dreem.png"
    },
    {
        "name": "Пальто Light",
        "category": "Пальто",
        "colors": ["Теракотовый", "Серый", "Черный", "Розовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 940,
        "discounted_price": 720,
        "image": "./assets/images/homesec-main_1.png"
    },  
    {
        "name": "Пальто Calm",
        "category": "Пальто",
        "colors": ["Коричневый", "Серый", "Черный", "Розовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 940,
        "discounted_price": 720,
        "image": "./assets/images/item_coat_calm.png"
    },
    {
        "name": "Пальто Over",
        "category": "Пальто",
        "colors": ["Коричневый", "Серый", "Черный", "Розовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 940,
        "discounted_price": 720,
        "image": "./assets/images/item_coat_over.png"
    }, 
    {
        "name": "Пальто Green Dream",
        "category": "Пальто",
        "colors": ["Зеленый", "Серый", "Черный", "Розовый"],
        "sizes": ["S", "M", "L", "XL"],
        "price": 940,
        "discounted_price": 720,
        "image": "./assets/images/item_coat_green_dream.png"
    }  
]

    const itemCardContainer = document.getElementById('item-card');
    
    products.forEach((product, index) => {
        const cardProduct = document.createElement('div');
        cardProduct.className = 'item-card__container';
    
        cardProduct.innerHTML = `
            <div class="item-card__container item-card__container_photo">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h4 class="card-title item-card__container item-card__container_title">${product.name}</h4>
            <div class="item-card__container item-card__container_price">${product.discounted_price} <del>${product.price}</del></div>
        `;
    
        itemCardContainer.appendChild(cardProduct);
    });

// переход на страницу товара one_item
function viewProduct(index) {
    localStorage.setItem('selectedProductIndex', index);
    window.location.href = './3_one_item.html';
};

// фильтр товаров
function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}