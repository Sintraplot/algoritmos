console.log ("Ejercicio 11");
    
let number = [24, 96, 538, 12, 17, 53, 99, 1000];
let copyNumber = [...number];

function averiguarElSegundoValorMasAlto() {
    copyNumber = copyNumber.sort((a , b) =>b - a);
    console.log(`El segundo valor más alto de estos números: ${number}; es el número: ${copyNumber[1]}.`);
}
averiguarElSegundoValorMasAlto();
