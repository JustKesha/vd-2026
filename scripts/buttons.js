// ==================== Звуки ====================
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/awkward.mp3');

// ==================== Кнопка "Да" ====================
const yesBtn = document.getElementById('yesBtn');
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        correctSound.currentTime = 0;
        correctSound.play().catch(e => console.log('correct.mp3 не воспроизведён:', e));
        window.startConfetti();
        window.goToSection(2);
    });
}

// ==================== Кнопка "Нет" с уклонением ====================
const noBtn = document.getElementById('noBtn');
if (noBtn) {
    const NO_TEXT_SEQUENCE = [
        "Нет",
        "Точно? (,,¬﹏¬,,)",
        "Пожалуйста? (⸝⸝> ᴗ•⸝⸝)",
        "Ты разбиваешь мне сердце... (ᵕó_ò)",
        "Почему? (>﹏<)",
        "Последний шанс (ㆆ_ㆆ)",

        '(｡•̀ ⤙ •́ ｡ꐦ) <img class="emoji" src="images/fuck-you-screw-you.gif" alt="emoji">'
    ];
    const MAX_NO_CLICKS = NO_TEXT_SEQUENCE.length-1;
    const SHRINK_FACTOR = 0.95;
    const YES_GROW_FACTOR = 1.1;
    let noClickCount = 0;
    const yesBtn = document.getElementById('yesBtn');

    noBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Если кнопка уже в режиме уклонения — ничего не делаем
        if (noBtn.classList.contains('dodging')) {
            return;
        }

        // Воспроизводим звук только до достижения dodging
        wrongSound.currentTime = 0;
        wrongSound.play().catch(e => console.log('wrong.mp3 не воспроизведён:', e));

        noClickCount++;

        // После третьего клика добавляем картинку слева от кнопки "Да"
        if (noClickCount === 3) {
            const buttonGroup = document.querySelector('.button-group');
            if (!buttonGroup.querySelector('.indicator-emoji')) {
                const img = document.createElement('img');
                img.src = 'images/right-right-point.gif';
                img.alt = 'indicator';
                img.classList.add('emoji', 'indicator-emoji');
                buttonGroup.insertBefore(img, yesBtn);
            }
        }

        const currentScaleNo = 1 - (noClickCount * (1 - SHRINK_FACTOR));
        noBtn.style.transform = `scale(${Math.max(currentScaleNo, 0.5)})`;

        const currentScaleYes = 1 + (noClickCount * (YES_GROW_FACTOR - 1));
        if (yesBtn) yesBtn.style.transform = `scale(${currentScaleYes})`;

        if (noClickCount <= MAX_NO_CLICKS) {
            noBtn.innerHTML = NO_TEXT_SEQUENCE[noClickCount] || NO_TEXT_SEQUENCE[NO_TEXT_SEQUENCE.length - 1];
        }

        if (noClickCount >= MAX_NO_CLICKS) {
            noBtn.classList.add('dodging');
            noBtn.style.setProperty('--dodge-direction', Math.random() > 0.5 ? '1' : '-1');
        }
    });

    noBtn.addEventListener('mouseenter', () => {
        if (noBtn.classList.contains('dodging')) {
            noBtn.style.setProperty('--dodge-direction', Math.random() > 0.5 ? '1' : '-1');
        }
    });
}

// ==================== Кнопки "Далее" ====================
const nextButtons = document.querySelectorAll('.next-btn');
nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        if (target) {
            const index = parseInt(target) - 1;
            window.goToSection(index);
        }
    });
});

// ==================== Ресайз ====================
window.addEventListener('resize', () => {
    if (!window.manualScrollEnabled) {
        const container = document.getElementById('sections-container');
        if (container) {
            container.style.transform = `translateY(-${window.currentSectionIndex * 100}vh)`;
        }
    }
});