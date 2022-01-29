/* 
    creer quatre fonciton: addition(), soustraction(), division(), multiplication()
    appeler la bonne fonction quand l'utilisateur clique sur un bouton
    afficher le resultat dans une paragraphe id="resultat-el"
*/

num1 = 8
num2 = 2
resultat = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


addition = () => {
    resultat = num1 + num2
    console.log(resultat);
    document.getElementById('resultat').textContent = "resultat de l'addition = " +  resultat
}

soustraction = () => {
    resultat = num1 - num2
    document.getElementById('resultat').textContent = "resultat de soustraction = " +  resultat
}

multiplication = () => {
    resultat = num1 * num2
    document.getElementById('resultat').textContent = "resultat de la multiplication = " +  resultat
}

division = () => {
    resultat = num1 / num2
    document.getElementById('resultat').textContent = "resultat de la division = " +  resultat
}

