// ==================== Звуки на стикерах ====================
document.addEventListener('DOMContentLoaded', () => {
    const stickers = document.querySelectorAll('.sticker');
    stickers.forEach(sticker => {
        const soundFile = sticker.dataset.sound;
        if (!soundFile) return; // если атрибут не задан, ничего не делаем

        sticker.addEventListener('click', (e) => {
            e.stopPropagation(); // предотвращаем возможные всплытия (необязательно)
            const audio = new Audio(`sounds/stickers/${soundFile}.mp3`);
            audio.play().catch(err => console.warn('Не удалось воспроизвести звук:', err));
        });

        // Добавляем указатель, чтобы было понятно, что кликабельно (опционально)
        sticker.style.cursor = 'pointer';
    });
});