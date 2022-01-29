/*  creer 2 variables firstName et fullName et le console.log la concatenation de ces 2 variables */

let firstName = "jean", lastName="Renaud"
let fullName = firstName + " " + lastName

console.log(fullName);

/* creer une fonction qui affiche deux varibles */

let name = "Linda"
let greeting = "Bonjour"

afficher = () => {
    console.log(greeting + ", " + name);
}

afficher()

/* quand on clique sur le bouton acheter afficher une message d'erreur */

paragrapheErreur = document.getElementById('erreur')

console.log(paragrapheErreur);
afficherMessage = () => {
    paragrapheErreur.textContent = "Erreur, reessayer plus tard!"
    setTimeout(() => {
        paragrapheErreur.textContent = ""
    }, 2000);
}

