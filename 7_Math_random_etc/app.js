/*
Math.random()  ===> valeur aleatoire
Math.random() * 6  ===> valeur aleatoire entre 0 et 5
Math.floor() ==> enlever les virgules

*/


// dé 6 faces ....
// generer un nombre aléatoire entre 1 et 6
rollDice = ()=>{
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}



nombre = rollDice()
console.log(nombre);