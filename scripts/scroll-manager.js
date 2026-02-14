let currentSectionIndex = 0;
const sections = document.querySelectorAll('.section');
const container = document.getElementById('sections-container');
const totalSections = sections.length;
let manualScrollEnabled = false;

function goToSection(index) {
    if (index < 0 || index >= totalSections) return;
    if (manualScrollEnabled) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        return;
    }
    currentSectionIndex = index;
    container.style.transform = `translateY(-${index * 100}vh)`;

    sections[index].classList.add('animate-in');

    if (index === totalSections - 1) {
        enableManualScroll();
    }
}

function enableManualScroll() {
    if (manualScrollEnabled) return;
    manualScrollEnabled = true;

    // Убираем трансформацию, чтобы секции встали в нормальный поток
    container.style.transition = 'none';
    container.style.transform = 'none';
    // Разрешаем обычный скролл страницы
    document.body.style.overflow = 'auto';
    // Прокручиваем к последней секции, чтобы она была видна
    sections[totalSections - 1].scrollIntoView({ behavior: 'smooth' });
}

// Инициализация
goToSection(0);

window.goToSection = goToSection;