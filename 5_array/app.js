card = [6, 7]

// ajouter une ligne apres 7
card.push(9)
console.log(card);

// suprimmer la derniere valeur du tableau
card.pop()
console.log(card);

/* 
La méthode shift() permet de retirer le premier 
élément d'un tableau et de renvoyer cet élément.
Cette méthode modifie la longueur du tableau.
*/

/* 
unshift()
La méthode unshift() ajoute un ou plusieurs éléments au début d'un 
tableau et renvoie la nouvelle longueur du tableau.
*/
largeCountries = [
    "Tuvalu",
    "India",
    "USA",
    "Indonesia",
    "Monaco"
]


console.log(largeCountries);
// premierElement = largeCountries.shift()
// console.log("le 1er element = " + premierElement);
// console.log(largeCountries);

// remplacer Monaco par Pakistant
largeCountries.pop()
largeCountries.push("Pakistan")
console.log(largeCountries);

// remplacer Tuvalu en China
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries);
