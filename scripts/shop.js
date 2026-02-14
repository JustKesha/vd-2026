// ==================== Shop Configuration ====================
const SHOP_CONFIG = {
    coupons: [
        {
            id: 1365435635653,
            name: "Мастер-Класс",
            description: "По Godot 4.6",
            price: 0,
            rarity: 1, // 1-3
        },
        {
            id: 123543534534,
            name: "Страстный Поцелуй",
            description: "Один нежный поцелуй, когда захочешь ",
            price: 25,
            rarity: 1, // 1-3
        },
        {
            id: 55656354,
            name: "Сладкий Перекус",
            description: "Шоколадка/снек по желанию",
            price: 25,
            rarity: 1,
        },
        
        {
            id: 72342342323542,
            name: "Массаж Плечь",
            description: "15 минут полного расслабления",
            price: 50,
            rarity: 1,
        },
        {
            id: 5234234234,
            name: "Вкусный Кофе",
            description: "Любое кофе на твой выбор",
            price: 50,
            rarity: 1,
        },

        {
            id: 3234234234,
            name: "Массаж Ног",
            description: "30 минут полного расслабления",
            price: 100,
            rarity: 2,
        },
        {
            id: 223423423,
            name: "Бургер Комбо",
            description: "Любое бургер комбо или набор",
            price: 100,
            rarity: 2,
        },

        {   
            id: 42352453,
            name: "Романтический Ужин",
            description: "Готовлю любое блюдо на твой выбор",
            price: 250,
            rarity: 3,
        },
        // {
        //     id: 6423423,
        //     name: "Сюрприз-свидание",
        //     description: "Я всё организую сам",
        //     price: 300,
        //     rarity: 3,
        // },
        {
            id: 536546546456,
            name: "Любое Желание",
            description: "Исполняю одно любое желание",
            price: 300,
            rarity: 3, // 1-3
        },
        {
            id: 11232,
            name: "Фото-Сессия",
            description: "До 26 числа",
            price: -100,
            rarity: 3, // 1-3
        },
    ],
    startMoney: 500,
};

// ==================== Shop State ====================
let purchasedCoupons = new Set(); // Set of coupon ids

// ==================== Initialize Shop ====================
function initShop() {
    const shopGrid = document.querySelector('.shop-grid');
    if (!shopGrid) return;

    // Очищаем грид
    shopGrid.innerHTML = '';

    // Создаём купоны
    SHOP_CONFIG.coupons.forEach(coupon => {
        const couponCard = createCouponElement(coupon);
        shopGrid.appendChild(couponCard);
    });

    // Устанавливаем начальные деньги
    // updateMoneyCounter(SHOP_CONFIG.startMoney);

    updateAllCouponsAvailability();
}

function createCouponElement(coupon) {
    const card = document.createElement('div');
    card.className = `coupon-card coupon-rarity-${coupon.rarity}`;
    card.dataset.couponId = coupon.id;

    // Название
    const name = document.createElement('div');
    name.className = 'coupon-name';
    name.textContent = coupon.name;

    // Описание
    const desc = document.createElement('div');
    desc.className = 'coupon-description';
    desc.textContent = coupon.description;

    // Кнопка с ценой
    const priceBtn = document.createElement('div');
    priceBtn.className = 'coupon-price-btn';
    if(coupon.price > 0) {
        priceBtn.innerHTML = `${coupon.price} <img class="emoji coin" src="https://media.tenor.com/Vl6iJkR2IzMAAAAi/memecoin.gif" alt="emoji">`;
    } else
        priceBtn.innerHTML = `${coupon.price ? 'BONUS +'+Math.abs(coupon.price) : 'FREE'} <img class="emoji coin" src="https://media.tenor.com/l6BNQyeZ1e8AAAAi/bits-8bits.gif" alt="emoji">`;
    priceBtn.dataset.price = coupon.price;

    // Обработчик покупки/продажи
    priceBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePurchase(card, coupon, priceBtn);
    });

    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(priceBtn);

    return card;
}

function togglePurchase(card, coupon, priceBtn) {
    const moneySpan = document.getElementById('money-counter');
    const currentMoney = parseInt(moneySpan.textContent);
    const isPurchased = purchasedCoupons.has(coupon.id);

    if (isPurchased) {
        // Продажа
        purchasedCoupons.delete(coupon.id);
        card.classList.remove('purchased');
        priceBtn.classList.remove('purchased');
        priceBtn.innerHTML = `${coupon.price > 0 ? coupon.price : (coupon.price ? 'BONUS +'+Math.abs(coupon.price) : 'FREE')} <img class="emoji coin" src="https://media.tenor.com/NBbD5GXWKzgAAAAi/bits-8bits.gif" alt="emoji">`;
        updateMoneyCounter(currentMoney + coupon.price);
        playSound('coins.mp3', 0.5)
    } else {
        // Покупка
        if (currentMoney >= coupon.price) {
            purchasedCoupons.add(coupon.id);
            card.classList.add('purchased');
            priceBtn.classList.add('purchased');
            priceBtn.innerHTML = `Продать за ${coupon.price}<img class="emoji coin" src="https://media.tenor.com/Vl6iJkR2IzMAAAAi/memecoin.gif" alt="emoji">`;
            updateMoneyCounter(currentMoney - coupon.price);
            playSound('purches.mp3', 0.5)
        }
    }
    
    // Обновляем состояние доступности всех купонов
    updateAllCouponsAvailability();
}

function updateMoneyCounter(newAmount) {
    const moneySpan = document.getElementById('money-counter');
    if (moneySpan) {
        moneySpan.textContent = newAmount;
    }
}

function updateAllCouponsAvailability() {
    const moneySpan = document.getElementById('money-counter');
    const currentMoney = parseInt(moneySpan.textContent);
    const coupons = document.querySelectorAll('.coupon-card');

    coupons.forEach(card => {
        const couponId = parseInt(card.dataset.couponId);
        const priceBtn = card.querySelector('.coupon-price-btn');
        const price = parseInt(priceBtn.dataset.price);
        
        // Если куплен - не применяем фильтр недостаточности
        if (purchasedCoupons.has(couponId)) {
            card.classList.remove('insufficient');
            return;
        }

        // Проверяем, хватает ли денег
        if (currentMoney < price) {
            card.classList.add('insufficient');
        } else {
            card.classList.remove('insufficient');
        }
    });
}

// Наблюдаем за секцией 6
const section6 = document.getElementById('section6');
if (section6) {
    const observer6 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initShop();
                observer6.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer6.observe(section6);
}

// Обновляем доступность при любых изменениях денег
// (будет вызываться из других скриптов при изменении счёта)
window.updateShopAvailability = updateAllCouponsAvailability;
