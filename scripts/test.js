// ==================== Test Configuration ====================
const TEST_CONFIG = {
    easy: {
        questions: [
            { // еда
                leftImage: 'https://media.tenor.com/8Jy_OhQdxjQAAAAj/chicken-sandwich.gif',
                leftText: 'Маэстро Бургер (KFC)',
                rightImage: 'https://media.tenor.com/HK9yi0doH1QAAAAi/nigiri-tamago-sushi.gif',
                rightText: 'Кото-Суши (Домашние)',
                correct: 'left',
                scoreBonus: 2,
                sticker: 'https://media.tenor.com/al9KcsQTxLEAAAAj/almarts27-almarts27-hamster.gif',
            },
            { // сериал
                leftImage: 'https://media1.tenor.com/m/bo9DIBG5LdoAAAAd/heisenberg-dance.gif',
                leftText: 'Breaking Bad',
                rightImage: 'https://media1.tenor.com/m/8THsUxvVm-gAAAAd/shingeki-no-kyojin-meme-attack-on-titan.gif',
                rightText: 'Attack On Titan ',
                correct: 'left',
                scoreBonus: 2,
                sticker: 'https://media.tenor.com/kOeE0Cs8gy0AAAAi/anime-dancing.gif',
            },
            { // книга
                leftImage: 'https://media1.tenor.com/m/Cm8Pa6KdIVoAAAAC/togata-fire-punch.gif',
                leftText: 'Fire-Punch',
                rightImage: 'https://media1.tenor.com/m/3FGMyzpGwmwAAAAC/reze-chainsaw-man.gif',
                rightText: 'Chainsaw Man',
                correct: 'left',
                scoreBonus: 1,
                sticker: 'https://media.tenor.com/vOAo8trkjDgAAAAj/anime-blue-archive.gif',
            },
            { // сладость
                leftImage: 'https://media.tenor.com/Q2jXHfSLa1AAAAAj/cookie-run-kingdom.gif',
                leftText: 'Salty Caramel Cookie',
                rightImage: 'https://media1.tenor.com/m/pbNAvUre4KEAAAAd/costco-guys-costco.gif',
                rightText: 'Double Choc-Chocolate Cookie',
                correct: 'left',
                scoreBonus: 2,
                sticker: 'https://media.tenor.com/GqY95ZIlXHIAAAAi/milk-and-cookies-chocolate-chip-cookie.gif',
            },
            
            { // напиток
                leftImage: 'https://media1.tenor.com/m/2OIHEpqXmr4AAAAd/white-monster-wmster.gif',
                leftText: 'Белый Monster',
                rightImage: 'https://media.tenor.com/DM7nXe-d7_UAAAAi/red-bull-3d.gif',
                rightText: 'Red-Bull',
                correct: 'right',
                scoreBonus: 1,
                sticker: 'https://media.tenor.com/ROZrff3gfMwAAAAi/evernight-dance.gif',
            },
            { // снэк
                leftImage: 'https://media.tenor.com/RtjDRtO7pBkAAAAi/pringles-crisps.gif',
                leftText: 'Сочная Пачка<br>Рефленых Чипсов Lays<br>(Необязательно с Паприкой)',
                rightImage: 'https://media1.tenor.com/m/F4I8qeOpE-4AAAAC/movie-theater-cinema.gif',
                rightText: 'Большое Ведро<br>Карамельного Попкорна',
                correct: 'right',
                scoreBonus: 2,
                sticker: 'https://media.tenor.com/pMwkTQjlRHMAAAAj/train-anime.gif',
            },
            { // питомец
                leftImage: 'https://media1.tenor.com/m/mSq6alLS7pYAAAAd/cat-cat-meme.gif',
                leftText: 'Кошечк',
                rightImage: 'https://media1.tenor.com/m/ZtsciOUIDNQAAAAC/bird-evil.gif',
                rightText: 'Птичк',
                correct: 'right',
                scoreBonus: 1,
                sticker: 'https://media.tenor.com/EdT51Rd9YHIAAAAj/i-love-you-love-you.gif',
            },
            { // игра
                leftImage: 'https://media.tenor.com/lf4DoUAPZ4gAAAAi/techies-dota.gif',
                leftText: 'Dota',
                rightImage: 'https://media.tenor.com/BSDu5_FFAn8AAAAi/deadlock-dynamo.gif',
                rightText: 'Deadlock',
                correct: 'right',
                scoreBonus: 1,
                sticker: 'https://media.tenor.com/6b5B5iBInYYAAAAj/venti-venti-genshin.gif',
            },
        ],
        nextSection: 4, // после лёгкого теста идём к сложному
    },
    hard: {
        questions: [
            {
                leftImage: 'https://i.pinimg.com/736x/56/ea/9b/56ea9b86d521d004e607661289c45764.jpg',
                leftText: 'Спать до обеда',
                rightImage: 'https://i.pinimg.com/736x/d1/2b/e3/d12be3fbef158fbd68e4f9ddcef706c4.jpg',
                rightText: 'Встать в 6 утра',
                correct: 'left',
                scoreBonus: 1,
            },
            {
                leftImage: 'https://i.pinimg.com/1200x/63/66/d9/6366d9d906422cd312e04a27d8126a78.jpg',
                leftText: 'Green-Shower',
                rightImage: 'https://i.pinimg.com/736x/c3/d9/bd/c3d9bd79ecc4f5c6aa0ef139c00d8d52.jpg',
                rightText: 'Neon-Shower',
                correct: 'left',
                scoreBonus: 2,
            },
            {
                leftImage: 'https://i.pinimg.com/1200x/40/2e/87/402e8784ad3cd2860e8dbf7ad9a6ce8b.jpg',
                leftText: 'Зимнее Джакузи',
                rightImage: 'https://i.pinimg.com/1200x/35/65/3d/35653d18b03aaa3b7435dd90d23802d6.jpg',
                rightText: 'Морское Джакузи',
                correct: 'left',
                scoreBonus: 3,
            },
            
            {
                leftImage: 'https://i.pinimg.com/736x/70/2a/e0/702ae089434a63faedd37bc6caa6c343.jpg',
                leftText: 'Вайбовый Туалет',
                rightImage: 'https://i.pinimg.com/736x/c2/07/76/c2077612869a7030f8a6f6cf8c158c3d.jpg',
                rightText: 'Переспать здесь с 1 кто<br>появляется после поделиться,<br>больше и телеграм',
                correct: 'right',
                scoreBonus: 1,
            },
            {
                leftImage: 'https://media.discordapp.net/attachments/1229518358022717594/1472239776043372545/image.png?ex=6991d9a3&is=69908823&hm=67b32a9043713bee22e1a503fb5755b923d400718d50c1f8448615f16347eecf&animated=true',
                leftText: 'Суши Лодка',
                rightImage: 'https://cdn.discordapp.com/attachments/721759505712545913/1282092592204349440/fire.gif?ex=69919406&is=69904286&hm=816902be3db510c6258da57c527f6f5ea56b5e42160abd5719a40b7dd9396168&',
                rightText: 'Уехать Жить в Горы<br>(под дождем в -10)',
                correct: 'right',
                scoreBonus: 2,
            },
            {
                leftImage: 'https://media.discordapp.net/attachments/721759505712545913/1255972311891185766/image.png?ex=6991799d&is=6990281d&hm=b1ff23bcbdbdddd6e89712d6e6334462aeef45470cf4df771d1f33fa58264a26&animated=true',
                leftText: 'Съесть Червивый Гриб',
                rightImage: 'https://media.discordapp.net/attachments/1229518358022717594/1472241119130554378/image.png?ex=6991dae3&is=69908963&hm=e998953ae375453732f4fcb4aae64dc7eff6ce0c21adcc5dc0209e4adf06bf3d&animated=true',
                rightText: 'Пердеть Всю Ночь',
                correct: 'right',
                scoreBonus: 1,
            },

            {
                leftImage: 'https://media.discordapp.net/attachments/721759505712545913/1274782548949471272/20240814_184907.jpg?ex=69915a03&is=69900883&hm=89468f9e0d18c8bc9ebc21ff326c5c14131817c2ace32fe124bc481fc3c02691&animated=true&width=1162&height=2066',
                leftText: 'Утонуть',
                rightImage: 'https://media.discordapp.net/attachments/721759505712545913/1274782549889122315/20240818_220047.jpg?ex=69915a04&is=69900884&hm=b435bd44e76c462b8b694bb419813167f2e5db626df9ec517e6f407c9d1f2131&animated=true&width=2279&height=1053',
                rightText: 'Быть съеденым волками',
                correct: 'both',
                scoreBonus: 1,
            },
            {
                leftImage: 'https://media.discordapp.net/attachments/721759505712545913/1258130761723281468/IMG_3845_1.JPG?ex=69916ad4&is=69901954&hm=2d8fddf6ffc896195eb9b816a5216873f9dce7107e4d7cec71d9bd8ec4f4a3b0&animated=true&width=1265&height=1897',
                leftText: 'Погулять с Sussy-Козой',
                rightImage: 'https://media.discordapp.net/attachments/721759505712545913/1255977920170688554/photo_5472183910638151292_y.jpg?ex=69917ed7&is=69902d57&hm=9a7578cd735593c67aff8b2a1bdb23f76f0fad883c98334a96cfe2154dd132f2&animated=true',
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