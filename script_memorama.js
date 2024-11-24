const totalCards = 20;
const availableCards = [
    'https://i.ibb.co/3kqPj2w/imagen1-removebg-preview.png',
    'https://i.ibb.co/k2XrjCB/imagen2-removebg-preview.png',
    'https://i.ibb.co/vcWHDNk/imagen3-removebg-preview.png',
    'https://i.ibb.co/bJqTXQS/imagen4-removebg-preview.png',
    'https://i.ibb.co/8NdHWky/imagen5-removebg-preview-1.png',
    'https://i.ibb.co/gDc5D22/imagen6-removebg-preview.png',
    'https://i.ibb.co/YZWnHtd/imagen7-removebg-preview.png',
    'https://i.ibb.co/zGVfd5h/imagen8-removebg-preview-2.png',
    'https://i.ibb.co/q12Kbv4/imagen9-removebg-preview.png',
    'https://i.ibb.co/LY8jkcC/imagen10-removebg-preview.png'
];

let cards = [];
let selectedCards = [];
let currentMove = 0;
let currentAttempts = 0;
let matchedPairs = 0;
let timerInterval;
let secondsElapsed = 0;

function startTimer() {
    document.getElementById('timer').innerText = secondsElapsed;
    timerInterval = setInterval(() => {
        secondsElapsed++;
        document.getElementById('timer').innerText = secondsElapsed;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function checkGameCompletion() {
    if (matchedPairs === totalCards / 2) {
        stopTimer();
        alert(`¡Felicidades! Completaste el juego en ${currentAttempts} intentos y ${secondsElapsed} segundos.`);
    }
}

function activate(e) {
    const card = e.currentTarget;
    if (currentMove < 2 && !card.classList.contains('active')) {
        card.classList.add('active');
        selectedCards.push(card);

        if (++currentMove === 2) {
            currentAttempts++;
            document.querySelector('#stats').innerHTML = `${currentAttempts} intentos - Tiempo: ${secondsElapsed} segundos`;

            if (selectedCards[0].querySelector('.face img').src === selectedCards[1].querySelector('.face img').src) {
                matchedPairs++;
                selectedCards = [];
                currentMove = 0;
                checkGameCompletion();
            } else {
                setTimeout(() => {
                    selectedCards.forEach(card => card.classList.remove('active'));
                    selectedCards = [];
                    currentMove = 0;
                }, 400);
            }
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeGame() {
    document.getElementById('game').innerHTML = '';
    selectedCards = [];
    currentMove = 0;
    currentAttempts = 0;
    matchedPairs = 0;
    cards = [];
    let cardValues = availableCards.concat(availableCards);
    cardValues = shuffle(cardValues);

    cardValues.forEach(value => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<div class="back"></div><div class="face"></div>`;

        let img = document.createElement('img');
        img.src = value;
        img.alt = 'Imagen de Carta';
        img.style.width = '100%';
        img.style.height = '100%';
        div.querySelector('.face').appendChild(img);

        div.addEventListener('click', activate);
        document.querySelector('#game').appendChild(div);
        cards.push(div);
    });
}

function startGame() {
    secondsElapsed = 0; // Reiniciar el tiempo
    stopTimer(); // Parar el temporizador en caso de que esté activo
    startTimer(); // Iniciar el temporizador
    initializeGame();
    document.getElementById('reset-button').disabled = false;
    document.getElementById('start-button').disabled = true;
}

function resetGame() {
    location.reload();
}