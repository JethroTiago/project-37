function checksGuessValidity(chute) {
    const number = +guess;

    if (invalidGuess(number)) {
        console.log('Invalid value');
    }

    if (greaterOrLessGuess(number)) {
        console.log(`Invalid value. The secret number is between ${lowerValue} and ${highestValue}`);
    }

}

function invalidGuess(number) {
    return Number.isNaN(number);
}

function greaterOrLessGuess(number) {
    return number > highestValue || number < lowerValue
}