/*
- creer 2 variables, firstCard et secondCard
- generer une valeur aléatoire en 2-11
- creer une variable sum pour les 2 valeurs
*/

firstCard = 6
secondCard = 9
sum = firstCard + secondCard
hasBlackjack = false
isAlive = true
message = ""
messageEl = document.getElementById('message-el')
sumEl = document.querySelector('#sum-el')
cardsEl = document.getElementById('cards-el')

// cardsEl.textContent = String(firstCard) + '  ' + String(secondCard)

startGame = () => {

    sumEl.textContent += sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

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
}





