function askName(){
    let nom = prompt("Bonjour, vous, comment vous appelez-vous ?")
    let salut = "👋 Bonjour " + nom
    let newH2 = document.createElement("h2", salut)
    newH2.innerText = salut
    document.querySelector("body").append(newH2)
}

function askBirthYear(){
    let annee = prompt("Merci, en quelle année êtes-vous né(e)?")
    let mois = prompt("Quel est votre MOIS de naissance ?")
    let jour = prompt("Et pour finir, votre JOUR de naissance?")
    let unix_age = new Date() - new Date(annee+"."+mois+"."+jour)
    let age = Math.floor(unix_age / 1000 / 60 / 60 / 24 / 365.25)
    document.body.innerHTML += "<h3>Vous avez " + age + " ans</h3>"
}

askName()
askBirthYear()
