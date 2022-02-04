// difference entre parametre et argument

welcomeEl = document.getElementById('welcome-el')

// parametre veut dire dans la fonction
function greetUser(salutation, name, emoji){
    welcomeEl.textContent = `Re ${salutation}, monsieur le developpeur ${name} ${emoji} `
}


// argument veut dire - à l'exterieur de la fonction
// ex: hi, "bitro de bitro b", '👏' sont des arguments
hi = 'bonjour'
greetUser(hi, "bitro de bitro b", '👏')


// fonction qui ajoute 2 nombres et retourne la somme
// console.log(add(3, 4));          doit retourner 7
// console.log(add(9, 102));        doit retourner 111

function add(a, b) {
    return a + b
}

console.log(add(3, 4));
console.log(add(9, 102));



add()