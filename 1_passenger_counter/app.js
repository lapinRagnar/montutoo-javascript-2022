let element = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
let message = "ceci est une notification!"

element.innerHTML = count

function increment() {
    count += 1    
    element.innerHTML = count
}

function decrement() {
    count -= 1
    element.innerHTML = count
}

console.log(count);

function enregistrer() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}

