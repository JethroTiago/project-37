const guessElement = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    guess = e.results [0] [0].transcript
    displayGuessOnScreen(guess);
    checksGuessValidity(guess);
    gameOver(guess);
}

function displayGuessOnScreen(guess) {
    guessElement.innerHTML = `
        <div>You said:</div>
        <span class="box">${guess}</span>
    `
}

function gameOver(guess) {
    if (guess === 'game over') {
        document.body.innerHTML = `
            <h2>Game Over!!!</h2>
            <h3>Press the button to play again</h3>
            <button id="restart" class="btn-restart">Play Again</button>
        `;
        document.body.style.backgroundColor = "black";
    }
}

recognition.addEventListener('end', () => recognition.start());