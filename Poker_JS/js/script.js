const colors = ["coeur", "carreau", "pique", "trefle"]
const figures = ["valet", "dame", "roi", "as"]
let values = []
let deck = []


for (let i = 2; i <= 10; i++) {
    values.push(i)
}
figures.forEach(figure => {
    values.push(figure)
});


colors.forEach(color => {
    values.forEach(value => {
        deck.push(
            {
                valeur: value,
                couleur: color,
            }
        )
    });    
});

