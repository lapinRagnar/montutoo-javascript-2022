welcomeEl = document.getElementById('welcome-el')

function greetUser(salutation, name, emoji){
    welcomeEl.textContent = `Re ${salutation}, monsieur le developpeur ${name} ${emoji} `
}

greetUser("bonjour", "bitro de bitro b", '👏')


// fonction qui ajoute 2 nombres et retourne la somme
// console.log(add(3, 4));          doit retourner 7
// console.log(add(9, 102));        doit retourner 111

function add(a, b) {
    return a + b
}

console.log(add(3, 4));
console.log(add(9, 102));



add()