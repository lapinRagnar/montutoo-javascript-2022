element = document.getElementById("count-el")

let count = 0
let message = "ceci est une notification!"

element.innerHTML = "Nombre de gens = " + count

const increment = () => {
    count += 1
    console.log(count);
    element.innerHTML = "Nombre de gens = " + count
}

const decrement= () => {
    count -= 1
    element.innerHTML = "Nombre de gens = " + count
}

const enregistrer = () => {
    console.log('marche');
}

