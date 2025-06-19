console.log("Ejercicio 13:");

const numbers = [51,75,35,2,10];
let numbersCopy = [... numbers]; 

function sumar() {
    numbersCopy = numbersCopy.reduce ((acc , valor)=> acc + valor,0);
    console.log(`La suma de estos valores ${numbers} es igual a: ${numbersCopy}.`);
}
sumar();





