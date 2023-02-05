function checksGuessValidity(chute) {
    const number = +guess;

    if (invalidGuess(number)) {
        guessElement.innerHTML += '<div>Invalid value! Only numbers are accepted</div>';
    }

    if (greaterOrLessGuess(number)) {
        guessElement.innerHTML += `
            <div>Invalid value. The secret number is between ${lowerValue} and ${highestValue}</div>
        `;
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>You won!</h2>
            <h3>The secret number was ${secretNumber}!!!</h3>
        `;
    }

}

function invalidGuess(number) {
    return Number.isNaN(number);
}

function greaterOrLessGuess(number) {
    return number > highestValue || number < lowerValue
}