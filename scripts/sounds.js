// scripts/play-sound.js
const SOUNDS_PATH = 'sounds/';

function playSound(filename, volume = 1.0) {
    if (!filename) return;
    
    const audio = new Audio(SOUNDS_PATH + filename);
    audio.volume = Math.min(1, Math.max(0, volume));
    
    audio.play().catch(error => {
        console.warn(`Failed to play sound ${filename}:`, error);
    });
    
    return audio;
}

// Make it globally available
window.playSound = playSound;