const lowerValue = 1;
const highestValue = 100;

const secretNumber = generateRandomNumber();

function generateRandomNumber() {
    return parseInt(Math.random() * highestValue + 1);
}

console.log('The secret number is:', secretNumber);

const lowestValueElement = document.getElementById('lowest-value');
lowestValueElement.innerHTML = lowerValue;

const highestValueElement = document.getElementById('highest-value');
highestValueElement.innerHTML = highestValue;