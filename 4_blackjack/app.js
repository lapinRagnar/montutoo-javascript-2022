/*
- creer 2 variables, firstCard et secondCard
- generer une valeur aléatoire en 2-11
- creer une variable sum pour les 2 valeurs
*/

player = {
    name: "Moi-meme",
    chips: 145
}
firstCard = getRandomCard()
secondCard = getRandomCard()
cards = []
sum = 0
hasBlackjack = false
isAlive = false
message = ""
messageEl = document.getElementById('message-el')
sumEl = document.querySelector('#sum-el')
cardsEl = document.getElementById('cards-el')



playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": " + player.chips +" €"

startGame = () => {
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

renderGame = () => {

    sumEl.textContent = "sum: " + sum
    cardsEl.textContent = "Cards: " 

    for (i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if ( sum <= 20 ) {
        message = "est-ce que tu veux une autre carte?? 😇"
    } else if ( sum === 21 ){
        message = "wooooooow, blackjack mon pote! 😆 🍾"
        hasBlackjack = true
    } else {
        message = " tu as perdu! 🤮"
        isAlive = false
    }
    
    messageEl.textContent = message
}

newCard = () => {
    if (isAlive === true && hasBlackjack === false){
        card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}

function getRandomCard() {
    // en blackjack:
    // si le nombre aléaroire = 1, on return 11
    // si 11, 12, 13, on retourne 10
    randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber = 1) {
        return 11
    } else {
        return randomNumber
    }
}





