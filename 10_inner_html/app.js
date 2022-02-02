container = document.getElementById("container")

container.innerHTML = "<button> acheter </button>";

container.addEventListener("click", ()=>{
    container.innerHTML += "<p>Merci pour votre achat!</p>"
})
