hands = ['rock', 'paper', 'scissor']

// create a function that returns a random from the array


getHand = () => {
    tailleTableau = hands.length
    nombreAleatoire = Math.floor(Math.random() * tailleTableau)
    return hands[nombreAleatoire]
}


console.log(getHand());