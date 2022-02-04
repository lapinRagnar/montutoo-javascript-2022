welcomeEl = document.getElementById('welcome-el')

function greetUser(salutation, name, emoji){
    welcomeEl.textContent = `Re ${salutation}, monsieur le developpeur ${name} ${emoji} `
}

greetUser("bonjour", "bitro de bitro b", '👏')


