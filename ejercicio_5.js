console.log("Ejercicio 5:");

let word = "reconocer"; 
//buscar cómo era lo de no ser sensibles a mayúsculas

function reverseword() {
   let makeAString= word.split("").reverse().join("");

    if (word === makeAString){
        console.log(`La palabra ${word} SÍ es un palíndromo.`);
    }else {
        console.log(`La palabra ${word} NO es un palíndromo.`);
    }  
}

reverseword()