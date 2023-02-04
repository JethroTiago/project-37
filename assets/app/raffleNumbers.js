const secretNumber = generateRandomNumber();

function generateRandomNumber() {
    return parseInt(Math.random() * 100);
}

console.log('The secret number is:', secretNumber);