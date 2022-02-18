let exerciceMinValue = 0
let exerciceMaxValue = 50
let rangeString = `entre ${exerciceMinValue} et ${exerciceMaxValue}`
let numberToGuess = NaN
let attempts = 0
let gameIsOn = false



function startGame(){
    numberToGuess = askNumberToGuess()
    while(checkNumberRange(numberToGuess) == false){
        numberToGuess = askNumberToGuess()
    }
    document.querySelector("button").style.display = 'none'
    let answ_input = document.createElement("input")
    let answInputAttributes = [["placeholder", "Trouvez le nombre"], ["min", exerciceMinValue+1], ["max", exerciceMaxValue-1], ["step", 1], ["name", "answer"], ["style", "width: 150px; margin-bottom: 10px"]]
    answInputAttributes.forEach(element => {
        answ_input.setAttribute(element[0], element[1])
    })
    answ_input.addEventListener("keydown", function(e){
        if (e.code === "Enter"){
            didIWin(this.value, numberToGuess)
        }
    })
    let returnButton = document.createElement("button")
    returnButton.innerHTML = "OK"
    returnButton.addEventListener("click", function(){
        didIWin(answ_input.value, numberToGuess)
    })

    document.querySelector("body").appendChild(answ_input)
    document.querySelector("body").appendChild(returnButton)
    document.querySelector("body").appendChild(document.createElement("p"))   
    document.querySelector("body").appendChild(document.createElement("p"))
    
    gameIsOn = true

    return
}

function returnInfo(s=""){
    document.getElementsByTagName("p")[0].innerHTML = `${attempts}e essai` 
    document.getElementsByTagName("p")[1].innerHTML += s+"<br>"
}

function guessNumber(){
    return parseInt(prompt("Devinez le nombre (" + rangeString + ")"))
}

function askNumberToGuess(){
   return parseInt(prompt("Renseignez un nombre à deviner (" + rangeString + ")"))
}

function checkNumberRange(n){
    if (n >= exerciceMinValue  && n <= exerciceMaxValue){
        return true
    } else {
        console.log("Le nombre doit être compris " + rangeString)
        return false
    }
}

function didIWin(gNumber, numberToGuess){
    if (gameIsOn == true){
        attempts ++
        document.getElementsByName("answer").value = ""
        if (gNumber == numberToGuess) {
            console.clear()
            console.log("Bravo ! Vous avez deviné le nombre")
            returnInfo("<b>Bravo ! Vous avez deviné le nombre en " +attempts+ " essais</b>")
            gameIsOn = false
        } else {
            if (gNumber < numberToGuess){
                console.log("Le nombre cherché est plus grand que "+gNumber)
                returnInfo("Le nombre cherché est plus grand que "+gNumber)
            } else {
                console.log("Le nombre cherché est plus petit que "+gNumber)
                returnInfo("Le nombre cherché est plus petit que "+gNumber)
            }
            return false
            }  
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