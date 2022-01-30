fruit = ["pomme", "orange", "pomme", "pomme", "orange"]

appleShelf = document.querySelector('.apple-shelf')
orangeShelf = document.querySelector('.orange-shelf')

console.log(appleShelf);
console.log(orangeShelf);

sortFruit = () => {

    for (i=0; i<fruit.length; i++){
    
        if (fruit[i] == "pomme"){
            appleShelf.textContent += "pomme "
        } else if (fruit[i] == "orange") {
            orangeShelf.textContent += "orange "
        }
    }

}

sortFruit()


