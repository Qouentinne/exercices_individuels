let exerciceMinValue = 0
let exerciceMaxValue = 50
let rangeString = `entre ${exerciceMinValue} et ${exerciceMaxValue}`
let numberToGuess = NaN
let attempts = 0



function startGame(){
    numberToGuess = askNumberToGuess()
    while(checkNumberRange(numberToGuess) == false){
        numberToGuess = askNumberToGuess()
    }
    document.querySelector("button").style.display = 'none'
    let answ_input = document.createElement("input")
    let answInputAttributes = [["type", "number"], ["placeholder", "Trouvez le nombre"], ["min", exerciceMinValue+1], ["max", exerciceMaxValue-1], ["step", 1] , ["name", "answer"]]
    answInputAttributes.forEach(element => {
        answ_input.setAttribute(element[0], element[1])
    })
    let returnButton = document.createElement("button")
    returnButton.innerHTML = "OK"
    returnButton.addEventListener("click", function(){
        didIWin(answ_input.value, numberToGuess)
    })

    document.querySelector("body").appendChild(answ_input)
    document.querySelector("body").appendChild(returnButton) 
    document.querySelector("body").appendChild(document.createElement("p"))

    

    return
}

function returnInfo(s=""){
   document.querySelector("p").innerHTML = s
}

function guessNumber(){
    return parseInt(prompt("Devinez le nombre (" + rangeString + ")"))
}

function askNumberToGuess(){
   return parseInt(prompt("Renseignez un nombre à deviner (" + rangeString + ")"))
}

function checkNumberRange(n){
    if (n > exerciceMinValue  && n < exerciceMaxValue){
        return true
    } else {
        console.log("Le nombre doit être compris " + rangeString)
        return false
    }
}

function didIWin(gNumber, numberToGuess){
    if (gNumber == numberToGuess) {
        console.clear()
        console.log("Bravo ! Vous avez deviné le nombre")
        returnInfo("Bravo ! Vous avez deviné le nombre")
        return true
    } else {
        if (gNumber < numberToGuess){
            console.log("Plus grand")
            returnInfo("Plus grand")
        } else {
            console.log("Plus petit")
            returnInfo("Plus petit")
        }
        return false
        }       
    }


function gamePlay(){    
    let numberToGuess = NaN
    let attempts = 0

    while(checkNumberRange(numberToGuess) == false){
        numberToGuess = askNumberToGuess()
    }
 
    return numberToGuess

    

    // while (didIWin(guessNumber(), numberToGuess) == false){
    //     attempts++
    //     console.log(`${attempts}e tentative`)
    // }

}