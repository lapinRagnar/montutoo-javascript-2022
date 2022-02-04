credits = 0

if (credits > 0){
    console.log("tu peux jouer");
} else{
    console.log("tu as pardu!");
}


// truthy

/* 
    falsy value
    -----------------
    - false
    - 0
    - ""
    - null    ---> le developpeur signale le vide
    - undefined ---> javascript signale le vide
    - NaN
*/

trueOrFalse = Boolean('hello')
console.log(trueOrFalse);       // retourne true

console.log(Boolean(''));       //  false
console.log(Boolean('0'));      //  true
console.log(Boolean(100));      //  true
console.log(Boolean(null));     //  false
console.log(Boolean([0]));      //  true
console.log(Boolean(-0));       //  false


