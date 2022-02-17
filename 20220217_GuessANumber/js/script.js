function guessNumber(){
    return parseInt(prompt("Devinez le nombre (entre 0 et 50)"))
}

function askNumberToGuess(){
   return parseInt(prompt("Renseignez un nombre à deviner (entre 0 et 50)"))
}

function checkNumberRange(n){
    if (n > 0  && n < 50){
        return true
    } else {
        console.log("Le nombre doit être compris entre 0 et 50")
        return false
    }
}

function didIWin(gNumber, numberToGuess){
    if (gNumber == numberToGuess) {
        console.log("Bravo ! Vous avez deviné le nombre")
        return true
    } else {
        if (gNumber < numberToGuess){
            console.log("Plus grand")
        } else {
            console.log("Plus petit")
        }
        return false
        }       
    }


function gamePlay(){
    let numberToGuess = NaN
    while(checkNumberRange(numberToGuess) == false){
        numberToGuess = askNumberToGuess()
    }

    while (didIWin(guessNumber(), numberToGuess) == false){
        didIWin(guessNumber())
    }

}


gamePlay()
