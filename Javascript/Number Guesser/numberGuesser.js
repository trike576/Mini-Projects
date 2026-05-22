let playerGuessInput = document.querySelector("#playerGuessInput")
let feedback = document.querySelector("#feedback")
let attempts = document.querySelector("#attempts")
let submitGuess = document.querySelector("#submitGuess")
let resetGame = document.querySelector("#resetGame")


let randomNumber = Math.floor(Math.random() * 100) + 1
let attemptCount = 0

function checkGuess (){
    let playerGuess = parseInt(playerGuessInput.value)

    if(isNaN(playerGuess)){
        feedback.innerText = "Please enter some valid number"
    }
    else if(playerGuess > 100 || playerGuess < 1){
        feedback.innerText = "The number lies between 1 and 100(inclusive)"
    }
    else if(randomNumber === playerGuess){
        feedback.innerText = "You guessed it right"
    }
    else if(randomNumber > playerGuess){
        feedback.innerText = "Try guessing higher"
    }
    else if(randomNumber < playerGuess){
        feedback.innerText = "Try guessing lower"
    }
        attemptCount++
        attempts.innerText = `Attempts: ${attemptCount}`
}

submitGuess.addEventListener('click', checkGuess);


function reset(){
    attemptCount = 0;
    attempts.innerText = `Attempts: ${attemptCount}`
    feedback.innerText = ""
    playerGuessInput.value = ""
    randomNumber = Math.floor(Math.random() * 100) + 1
}

resetGame.addEventListener('click', reset)