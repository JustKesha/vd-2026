// ==================== Музыка для каждой секции ====================
(function() {
    const MUSIC_CONFIG = {
        volume: 0.5,
        // можно добавить fade, пока без него
    };

    let currentAudio = null;
    let currentSrc = '';

    function playMusic(filename) {
        if (!filename) {
            // Останавливаем текущую музыку, если есть
            if (currentAudio) {
                currentAudio.pause();
                currentAudio = null;
                currentSrc = '';
            }
            return;
        }

        const filePath = `sounds/music/${filename}.mp3`;
        if (currentAudio && currentSrc === filePath) {
            // Тот же файл – ничего не делаем
            return;
        }

        // Останавливаем предыдущую
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }

        // Создаём и запускаем новую
        currentAudio = new Audio(filePath);
        currentAudio.loop = true;
        currentAudio.volume = MUSIC_CONFIG.volume;
        currentSrc = filePath;

        // Пытаемся воспроизвести (может быть заблокировано браузером)
        currentAudio.play().catch(err => {
            console.warn('Не удалось воспроизвести музыку:', err);
        });
    }

    // Наблюдаем за секциями
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const musicFile = entry.target.dataset.music;
                playMusic(musicFile);
            }
        });
    }, { threshold: 0.5 }); // секция считается видимой при 50%

    sections.forEach(section => observer.observe(section));
})();