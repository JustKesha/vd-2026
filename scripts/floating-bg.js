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
            'https://media.tenor.com/ZKBDtqe2rkwAAAAj/flowers-cherryblossom-pink-gif-png-cute.gif',
            'https://media.tenor.com/ZKBDtqe2rkwAAAAj/flowers-cherryblossom-pink-gif-png-cute.gif',
            'https://media.tenor.com/tFnBhoYzJsIAAAAj/butterflypink.gif',
            'https://media.tenor.com/c5y9ppir6cYAAAAj/loverlyu-pink.gif',
        ],

        // asking to do test
        2: ['https://media.tenor.com/6YfOeUIZLlYAAAAj/emoji-durr.gif'],

        // test 1
        3: [
            'https://media.tenor.com/mAQPhz72wAwAAAAj/pacman.gif',
            'https://media.tenor.com/JFjyMnr-BGAAAAAi/cat-cat-sniff.gif',
            'https://media.tenor.com/qFuH6cOQ-8kAAAAi/3-cat.gif',
            'https://media.tenor.com/JSE4vg7qHg4AAAAi/8bit-pixelart.gif',
        ],
        // test 2
        4: [
            'https://media.tenor.com/lcfEqa5B0hIAAAAj/chad-emoji-gigachad.gif',
            'https://media.tenor.com/6YfOeUIZLlYAAAAj/emoji-durr.gif',
            'https://media.tenor.com/yJU_snJGthsAAAAj/pleading-emoji-discord.gif',
            'https://media.tenor.com/ZD12jmQYQ9IAAAAj/emoji-tiktok-emoji.gif',
            'https://media.tenor.com/d-Q59dYMh9QAAAAj/emoji-tiktok-emoji.gif',
            'https://media.tenor.com/KoozdUVBZkcAAAAj/emoji-durr.gif',
            'https://media.tenor.com/wTvhlU6Pwb4AAAAj/durr-durr-emoji.gif',
            'https://media.tenor.com/waNve2z4oJcAAAAj/emoji-drool.gif',
            'https://media.tenor.com/_VKqE3BnX_sAAAAj/emoji-drool.gif',
        ],

        5: ['https://media.tenor.com/ZKBDtqe2rkwAAAAj/flowers-cherryblossom-pink-gif-png-cute.gif'],
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