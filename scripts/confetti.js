// ==================== Конфетти ====================

const confettiOverlay = document.getElementById('confetti-overlay');
const popSound = new Audio('sounds/confetti.mp3');

function startConfetti() {
    if (!confettiOverlay) return;

    // Воспроизводим звук (если файл есть)
    popSound.currentTime = 0; // сбрасываем, чтобы можно было перезапустить
    popSound.play().catch(e => console.log('Аудио не удалось воспроизвести:', e));

    confettiOverlay.style.display = 'block';

    const colors = ['#ff4d6d', '#ffb347', '#4dffb8', '#b84dff', '#ffd966', '#6c757d'];
    const count = 150;

    for (let i = 0; i < count; i++) {
        const conf = document.createElement('div');
        conf.classList.add('confetti');

        const width = Math.random() * 20 + 5;
        const height = Math.random() * 30 + 10;
        conf.style.width = width + 'px';
        conf.style.height = height + 'px';
        conf.style.background = colors[Math.floor(Math.random() * colors.length)];
        conf.style.left = Math.random() * 100 + '%';

        // Длительность анимации от 2 до 5 секунд
        const duration = Math.random() * 4 + 2;
        conf.style.animation = `fall ${duration}s linear forwards`;

        // Случайная задержка, чтобы не все сразу стартовали
        conf.style.animationDelay = Math.random() * 1.5 + 's';

        conf.style.transform = `rotate(${Math.random() * 360}deg)`;

        // Удаляем после окончания анимации
        conf.addEventListener('animationend', () => {
            conf.remove();
            if (confettiOverlay.children.length === 0) {
                confettiOverlay.style.display = 'none';
            }
        });

        confettiOverlay.appendChild(conf);
    }
}

window.startConfetti = startConfetti;