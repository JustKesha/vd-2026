// ==================== Floating background elements (slow falling GIFs) ====================
const FLOATING_CONFIG = {
    countPerSection: 15,          // количество элементов на секцию
    minSize: 30,                  // минимальный размер в пикселях
    maxSize: 80,                  // максимальный размер
    minDuration: 10,               // минимальная длительность падения (сек)
    maxDuration: 25,               // максимальная длительность
    // Массив изображений для каждой секции (индекс = номер секции, начиная с 0)
    images: {
        // greeting
        0: [],

        // statement
        1: [
            'images/flowers-cherryblossom-pink-gif-png-cute.gif',
            'images/flowers-cherryblossom-pink-gif-png-cute.gif',
            'images/butterflypink.gif',
            'images/loverlyu-pink.gif',
        ],

        // asking to do test
        2: ['images/emoji-durr-2.gif'],

        // test 1
        3: [
            'images/pacman.gif',
            'images/cat-cat-sniff.gif',
            'images/3-cat.gif',
            'images/8bit-pixelart.gif',
        ],
        // test 2
        4: [
            'images/chad-emoji-gigachad.gif',
            'images/emoji-durr.gif',
            'images/pleading-emoji-discord.gif',
            'images/emoji-tiktok-emoji.gif',
            'images/emoji-tiktok-emoji.gif',
            'images/emoji-durr-2.gif',
            'images/durr-durr-emoji.gif',
            'images/emoji-drool-2.gif',
            'images/emoji-drool-3.gif',
        ],

        5: ['images/flowers-cherryblossom-pink-gif-png-cute.gif'],
    }
};

function initFloatingBg() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        // Создаём контейнер для плавающих элементов, если его нет
        let bgContainer = section.querySelector('.floating-bg');
        if (!bgContainer) {
            bgContainer = document.createElement('div');
            bgContainer.className = 'floating-bg';
            section.appendChild(bgContainer);
        } else {
            bgContainer.innerHTML = ''; // очищаем при повторном вызове
        }

        const images = FLOATING_CONFIG.images[index] || FLOATING_CONFIG.images[0];
        if (!images || images.length === 0) return;

        for (let i = 0; i < FLOATING_CONFIG.countPerSection; i++) {
            const img = document.createElement('img');
            img.src = images[Math.floor(Math.random() * images.length)];
            img.className = 'floating-item';
            img.style.left = Math.random() * 100 + '%';
            const size = Math.random() * (FLOATING_CONFIG.maxSize - FLOATING_CONFIG.minSize) + FLOATING_CONFIG.minSize;
            img.style.width = size + 'px';
            img.style.height = 'auto';
            const duration = Math.random() * (FLOATING_CONFIG.maxDuration - FLOATING_CONFIG.minDuration) + FLOATING_CONFIG.minDuration;
            img.style.animationDuration = duration + 's';
            img.style.animationDelay = Math.random() * -20 + 's'; // чтобы начальные позиции были разные
            img.style.opacity = 0.7; // лёгкая полупрозрачность
            bgContainer.appendChild(img);
        }
    });
}

// Запускаем после полной загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingBg);
} else {
    initFloatingBg();
}