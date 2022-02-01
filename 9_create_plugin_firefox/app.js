/* 
    1. grab the box from the DOM and store it in a variable
    2. add a click event listener to the box
    3. log out "je veux ouvrir la boite!"
*/

box = document.getElementById('box')
box.addEventListener('click', () => {
    console.log("Je veux ouvrir la boite!");
})


