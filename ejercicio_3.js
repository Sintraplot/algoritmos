
console.log("Ejercicio 3:")
 let numeros = [5,2,6,18,8, 54, 1,90,16];
 let copiaNumeros = [...numeros];

 function enccontrarElValorMasAlto() {
   let arrayNumerosOrdenados = copiaNumeros.sort((a, b) =>b - a);
 
    
    console.log(`El valor más alto de ${numeros}  es el número ${arrayNumerosOrdenados[0]}`);
 }
 enccontrarElValorMasAlto();