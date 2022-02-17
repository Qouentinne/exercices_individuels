function askNumber(){
    return parseInt(prompt("Renseignez un nombre"))
}

function didIWin(gNumber){
    numberToGuess = 22
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
    while (didIWin(askNumber()) == false){
        didIWin(askNumber())
    }

}


gamePlay()
