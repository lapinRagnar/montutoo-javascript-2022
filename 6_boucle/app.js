// for (let count = 1; count < 11 ; count++){
//     console.log(count);
// }

messages = [
    "salut les gens",
    "comment va-tu?",
    "cool, tranquile 😀",
    "au revoir"
]

messages.forEach((message) => { console.log(message);})

for (i in messages) {
    console.log(i, messages[i]);
}

cards = [7, 2, 7]

for (j=0; j< cards.length; j++){
    console.log(cards[j]);
}


// affichier cette array sur le html
phrase = [
    "Bonjour. ",
    "je suis un tuto en js. ",
    "c'est compliqué! mais ",
    "merci 😁"
]

paragraphEl = document.getElementById('paragraph-el')
console.log(paragraphEl);
for (i=0; i<phrase.length; i++){
    paragraphEl.textContent += phrase[i]
}
