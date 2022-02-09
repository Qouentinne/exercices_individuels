function askName(){
    let nom = prompt("Bonjour, vous, comment vous appelez-vous ?")
    let salut = "👋 Bonjour " + nom
    let newH2 = document.createElement("h2", salut)
    newH2.innerText = salut
    document.querySelector("body").append(newH2)
}

function askBirthYear(){
    annee = prompt("Merci, en quelle année êtes-vous né(e)?")
    age = new Date().getFullYear() - Number(annee)
    document.body.innerHTML += "<h3>Vous avez " + age + " ans</h3>"
}

askName()
askBirthYear()