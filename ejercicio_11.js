console.log ("Ejercicio 11");
    
let arrayNumber = [24, 96, 538, 12, 17, 53, 99, 1000];
let copyNumber = [...arrayNumber];

function averiguarElSegundoValorMasAlto() {
    copyNumber = copyNumber.sort((a , b) =>b - a);
    console.log(`El segundo valor más alto de estos números: ${arrayNumber}; es el número: ${copyNumber[1]}.`);
}
averiguarElSegundoValorMasAlto();
