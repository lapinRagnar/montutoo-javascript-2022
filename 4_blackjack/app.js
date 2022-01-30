/*
- creer 2 variables, firstCard et secondCard
- generer une valeur aléatoire en 2-11
- creer une variable sum pour les 2 valeurs
*/

firstCard = 6
secondCard = 9
cards = [firstCard, secondCard]
sum = firstCard + secondCard
hasBlackjack = false
isAlive = true
message = ""
messageEl = document.getElementById('message-el')
sumEl = document.querySelector('#sum-el')
cardsEl = document.getElementById('cards-el')

startGame = () => {
    renderGame()
}

renderGame = () => {

    sumEl.textContent = "sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    if ( sum <= 20 ) {
        message = "est-ce que tu veux une autre carte?? 😇"
    } else if ( sum === 21 ){
        message = "wooooooow, blackjack mon pote! 😆 🍾"
        hasBlackjack = true
    } else {
        message = " tu as perdu! 🤮"
        isAlive = false
    }
    
    console.log(message);
    messageEl.textContent = message
}

newCard = () => {
    console.log("ok");
    card = 7
    sum += card
    cards.push(card)
    renderGame()
}





