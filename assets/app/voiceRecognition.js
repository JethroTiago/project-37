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
}

function displayGuessOnScreen(guess) {
    guessElement.innerHTML = `
        <div>You said:</div>
        <span class="box">${guess}</span>
    `
}