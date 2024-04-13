let firstNumberEl = document.getElementById("firstNumber")
let secondNumberEl = document.getElementById("secondNumber")
let userInputEl = document.getElementById("userInput")
let gameResultEl = document.getElementById("gameResult")

let successMessage = "Congratulations! You got it right.";
let failedMessage = "Please Try Again!";

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    firstNumberEl.textContent = Math.ceil(firstRandomNumber);
    secondNumberEl.textContent = Math.ceil(secondRandomNumber);

    userInputEl.value = "";
    gameResultEl.textContent = "";
}
restartGame()

function checkResult() {
    let firstNumberRandom = +(firstNumberEl.textContent);
    let secondNumberRandom = +(secondNumberEl.textContent);
    let userInputRandom = +(userInputEl.value);

    let sumOfTwoInt = firstNumberRandom + secondNumberRandom;

    if (sumOfTwoInt === userInputRandom) {
        gameResultEl.textContent = successMessage;
        gameResultEl.style.backgroundColor = "#028a0f";
    } else {
        gameResultEl.textContent = failedMessage;
        gameResultEl.style.backgroundColor = "#1e217c";
    }
}