function checksGuessValidity(chute) {
    const number = +guess;

    if (invalidGuess(number)) {
        guessElement.innerHTML += '<div>Invalid value! Only numbers are accepted</div>';
        return;
    }

    if (greaterOrLessGuess(number)) {
        guessElement.innerHTML += `
            <div>Invalid value. The secret number is between ${lowerValue} and ${highestValue}</div>
        `;
        return;
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>You won!</h2>
            <h3>The secret number was ${secretNumber}!!!</h3>

            <button id="restart" class="btn-restart">Restart</button>
        `;
    } else if (number > secretNumber) {
        guessElement.innerHTML += `
            <div>The secret number is lower <i class="fa-solid fa-arrow-down"></i></div>
        `;
    } else {
        guessElement.innerHTML += `
            <div>The secret number is bigger <i class="fa-solid fa-arrow-up"></i></div>
    `;
    }

}

function invalidGuess(number) {
    return Number.isNaN(number);
}

function greaterOrLessGuess(number) {
    return number > highestValue || number < lowerValue
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'restart') {
        window.location.reload();
    }
});