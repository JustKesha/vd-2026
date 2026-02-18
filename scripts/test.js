// ==================== Test Configuration ====================
const TEST_CONFIG = {
    easy: {
        questions: [
            { // еда
                leftImage: 'images/test/chicken-sandwich.gif',
                leftText: 'Маэстро Бургер (KFC)',
                rightImage: 'images/test/nigiri-tamago-sushi.gif',
                rightText: 'Кото-Суши (Домашние)',
                correct: 'left',
                scoreBonus: 2,
                sticker: 'images/test/almarts27-almarts27-hamster.gif',
            },
            { // сериал
                leftImage: 'images/test/heisenberg-dance.gif',
                leftText: 'Breaking Bad',
                rightImage: 'images/test/shingeki-no-kyojin-meme-attack-on-titan.gif',
                rightText: 'Attack On Titan ',
                correct: 'left',
                scoreBonus: 2,
                sticker: 'images/test/anime-dancing.gif',
            },
            { // книга
                leftImage: 'images/test/togata-fire-punch.gif',
                leftText: 'Fire-Punch',
                rightImage: 'images/test/reze-chainsaw-man.gif',
                rightText: 'Chainsaw Man',
                correct: 'left',
                scoreBonus: 1,
                sticker: 'images/test/anime-blue-archive.gif',
            },
            { // сладость
                leftImage: 'images/test/cookie-run-kingdom.gif',
                leftText: 'Salty Caramel Cookie',
                rightImage: 'images/test/costco-guys-costco.gif',
                rightText: 'Double Choc-Chocolate Cookie',
                correct: 'left',
                scoreBonus: 2,
                sticker: 'images/test/milk-and-cookies-chocolate-chip-cookie.gif',
            },
            
            { // напиток
                leftImage: 'images/test/tenor.gif',
                leftText: 'Белый Monster',
                rightImage: 'images/test/red-bull-3d.gif',
                rightText: 'Red-Bull',
                correct: 'right',
                scoreBonus: 1,
                sticker: 'images/test/evernight-dance.gif',
            },
            { // снэк
                leftImage: 'images/test/pringles-crisps.gif',
                leftText: 'Сочная Пачка<br>Рефленых Чипсов Lays<br>(Необязательно с Паприкой)',
                rightImage: 'images/test/movie-theater-cinema.gif',
                rightText: 'Большое Ведро<br>Карамельного Попкорна',
                correct: 'right',
                scoreBonus: 2,
                sticker: 'images/test/train-anime.gif',
            },
            { // питомец
                leftImage: 'images/test/cat-cat-meme.gif',
                leftText: 'Кошечк',
                rightImage: 'images/test/bird-evil.gif',
                rightText: 'Птичк',
                correct: 'right',
                scoreBonus: 1,
                sticker: 'images/test/i-love-you-love-you.gif',
            },
            { // игра
                leftImage: 'images/test/techies-dota.gif',
                leftText: 'Dota',
                rightImage: 'images/test/deadlock-dynamo.gif',
                rightText: 'Deadlock',
                correct: 'right',
                scoreBonus: 1,
                sticker: 'images/test/venti-venti-genshin.gif',
            },
        ],
        nextSection: 4, // после лёгкого теста идём к сложному
    },
    hard: {
        questions: [
            {
                leftImage: 'images/test/dog.jpg',
                leftText: 'Спать до обеда',
                rightImage: 'images/test/d12be3fbef158fbd68e4f9ddcef706c4.jpg',
                rightText: 'Встать в 6 утра',
                correct: 'left',
                scoreBonus: 1,
            },
            {
                leftImage: 'images/test/dush-cool.jpg',
                leftText: 'Green-Shower',
                rightImage: 'images/test/dush.jpg',
                rightText: 'Neon-Shower',
                correct: 'left',
                scoreBonus: 2,
            },
            {
                leftImage: 'images/test/vana-cool.jpg',
                leftText: 'Зимнее Джакузи',
                rightImage: 'images/test/vana.jpg',
                rightText: 'Морское Джакузи',
                correct: 'left',
                scoreBonus: 3,
            },
            
            {
                leftImage: 'images/test/toilet.jpg',
                leftText: 'Вайбовый Туалет',
                rightImage: 'images/test/bed.jpg',
                rightText: 'Переспать здесь с 1 кто<br>появляется после поделиться,<br>больше и телеграм',
                correct: 'right',
                scoreBonus: 1,
            },
            {
                leftImage: 'images/test/image.png',
                leftText: 'Суши Лодка',
                rightImage: 'images/test/fire.gif',
                rightText: 'Уехать Жить в Горы<br>(под дождем в -10)',
                correct: 'right',
                scoreBonus: 2,
            },
            {
                leftImage: 'images/test/shruum.png',
                leftText: 'Съесть Червивый Гриб',
                rightImage: 'images/test/latyao.png',
                rightText: 'Пердеть Всю Ночь',
                correct: 'right',
                scoreBonus: 1,
            },

            {
                leftImage: 'images/test/ural-bridge.jpg',
                leftText: 'Утонуть',
                rightImage: 'images/test/les.png',
                rightText: 'Быть съеденым волками',
                correct: 'both',
                scoreBonus: 1,
            },
            {
                leftImage: 'images/test/koza.png',
                leftText: 'Погулять с Sussy-Козой',
                rightImage: 'images/test/boat.jpg',
                rightText: 'Потеряться в Протоках',
                correct: 'both',
                scoreBonus: 2,
            },
        ],
        nextSection: 5, // после сложного теста идём к секции с купонами
    },
    questionDelay: 1500,
    sounds: {
        correct: new Audio('sounds/correct.mp3'),
        wrong: new Audio('sounds/wrong.mp3'),
    }
};

// ==================== Test State ====================
let currentTest = null;
let remainingQuestions = [];
let currentQuestion = null;
let totalScore = 0;

// Элементы для лёгкого теста
const leftOptionEasy = document.getElementById('test-option-left');
const rightOptionEasy = document.getElementById('test-option-right');
const easyTestSticker = document.getElementById('test-1-sticker');

// Элементы для сложного теста
const leftOptionHard = document.getElementById('test-option-left-hard');
const rightOptionHard = document.getElementById('test-option-right-hard');

const finalScoreCounter = document.getElementById('final-score-counter');
const moneyScore = document.getElementById('money-counter');

// ==================== Initialize Test ====================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initTest(testType, leftOption, rightOption) {
    // Reset for new test
    currentTest = testType;
    remainingQuestions = shuffleArray([...TEST_CONFIG[testType].questions]);
    showNextQuestion(leftOption, rightOption);
}

function showNextQuestion(leftOption, rightOption) {
    if (remainingQuestions.length === 0) {
        // No more questions - go to next section
        console.log(`${currentTest} test completed! Total score:`, totalScore);
        window.totalScore = totalScore;
        
        setTimeout(() => {
            if (window.goToSection) {
                window.goToSection(TEST_CONFIG[currentTest].nextSection);
            }
        }, TEST_CONFIG.questionDelay);
        return;
    }

    // Get next question
    currentQuestion = remainingQuestions.pop();

    // Set background images
    if (currentQuestion.leftImage) {
        leftOption.style.backgroundImage = `url('${currentQuestion.leftImage}')`;
    }
    if (currentQuestion.rightImage) {
        rightOption.style.backgroundImage = `url('${currentQuestion.rightImage}')`;
    }

    // Set Sticker
    if (currentQuestion.sticker) {
        easyTestSticker.src = currentQuestion.sticker
    }

    // Set text labels
    const leftLabel = leftOption.querySelector('.option-label');
    const rightLabel = rightOption.querySelector('.option-label');
    if (leftLabel) leftLabel.innerHTML = currentQuestion.leftText || '';
    if (rightLabel) rightLabel.innerHTML = currentQuestion.rightText || '';

    // Enable clicks
    leftOption.style.pointerEvents = 'auto';
    rightOption.style.pointerEvents = 'auto';
}

function handleOptionClick(selectedSide, leftOption, rightOption) {
    if (!currentQuestion) return;

    // Disable clicks temporarily
    leftOption.style.pointerEvents = 'none';
    rightOption.style.pointerEvents = 'none';

    // Check if correct
    const isCorrect = (selectedSide === currentQuestion.correct || currentQuestion.correct == 'both');

    // Add score if correct
    if (isCorrect && currentQuestion.scoreBonus) {
        totalScore += currentQuestion.scoreBonus;
        console.log('Current score:', totalScore);
        
        // Start confetti
        if (window.startConfetti) {
            window.startConfetti();
        }

        finalScoreCounter.innerHTML = totalScore
        moneyScore.innerHTML = totalScore * 20
    }

    // Play sound
    const sound = isCorrect ? TEST_CONFIG.sounds.correct : TEST_CONFIG.sounds.wrong;
    sound.currentTime = 0;
    sound.play().catch(e => console.log('Sound error:', e));

    // Move to next question after delay
    setTimeout(() => {
        showNextQuestion(leftOption, rightOption);
    }, TEST_CONFIG.questionDelay);
}

// ==================== Event Listeners ====================
// Лёгкий тест
leftOptionEasy.addEventListener('click', () => handleOptionClick('left', leftOptionEasy, rightOptionEasy));
rightOptionEasy.addEventListener('click', () => handleOptionClick('right', leftOptionEasy, rightOptionEasy));

// Сложный тест
leftOptionHard.addEventListener('click', () => handleOptionClick('left', leftOptionHard, rightOptionHard));
rightOptionHard.addEventListener('click', () => handleOptionClick('right', leftOptionHard, rightOptionHard));

// ==================== Section Observers ====================
// Наблюдаем за секцией 3 (лёгкий тест)
const section3 = document.getElementById('section3');
if (section3) {
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initTest('easy', leftOptionEasy, rightOptionEasy);
                observer3.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer3.observe(section3);
}

// Наблюдаем за секцией 4 (сложный тест)
const section4 = document.getElementById('section4');
if (section4) {
    const observer4 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initTest('hard', leftOptionHard, rightOptionHard);
                observer4.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer4.observe(section4);
}