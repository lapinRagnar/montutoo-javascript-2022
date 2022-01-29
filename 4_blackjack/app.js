/*
- creer 2 variables, firstCard et secondCard
- generer une valeur aléatoire en 2-11
- creer une variable sum pour les 2 valeurs
*/

firstCard = 6
secondCard = 9
sum = firstCard + secondCard

if ( sum < 21 ) {
    console.log("est-ce que tu veux une autre carte?? 😇");
} else if ( sum === 21 ){
    console.log("wooooooow, blackjack mon pote! 😆 🍾");
} else {
    console.log(" tu as perdu! 🤮");
}



