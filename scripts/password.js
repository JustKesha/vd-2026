// ==================== Password Section ====================
document.addEventListener('DOMContentLoaded', () => {
    const passwordContainer = document.querySelector('.password-container');
    if (!passwordContainer) return;

    const correctPassword = passwordContainer.dataset.correctPassword;
    const nextSection = parseInt(passwordContainer.dataset.nextSection);
    const input = document.getElementById('password-input');
    const submitBtn = document.getElementById('password-submit');
    const messageDiv = document.getElementById('password-message');
    const correctSound = new Audio('sounds/correct.mp3');
    const wrongSound = new Audio('sounds/wrong.mp3');

    function checkPassword() {
        const enteredPassword = input.value.trim();
        
        if (enteredPassword === correctPassword) {
            // Правильный пароль
            input.classList.remove('shake');
            input.classList.add('success');
            messageDiv.textContent = '✓ Пароль верный! Переходим...';
            messageDiv.style.color = '#4dff88';
            
            // Звук успеха
            correctSound.currentTime = 0;
            correctSound.play().catch(e => console.log('Sound error:', e));
            
            // Конфетти
            if (window.startConfetti) {
                window.startConfetti();
            }
            
            // Блокируем кнопку
            submitBtn.disabled = true;
            input.disabled = true;
            
            // Переход к следующей секции
            setTimeout(() => {
                if (window.goToSection) {
                    window.goToSection(nextSection);
                }
            }, 1500);
        } else {
            // Неправильный пароль
            input.classList.add('shake');
            input.classList.remove('success');
            messageDiv.textContent = '✗ Неправильный пароль, попробуй ещё';
            messageDiv.style.color = '#ff4d4d';
            
            // Звук ошибки
            wrongSound.currentTime = 0;
            wrongSound.play().catch(e => console.log('Sound error:', e));
            
            // Убираем класс тряски через секунду
            setTimeout(() => {
                input.classList.remove('shake');
            }, 500);
            
            // Очищаем поле
            input.value = '';
            input.focus();
        }
    }

    // Обработчики событий
    submitBtn.addEventListener('click', checkPassword);
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    // Очищаем сообщение при вводе
    input.addEventListener('input', () => {
        messageDiv.textContent = '';
        input.classList.remove('shake', 'success');
    });
});