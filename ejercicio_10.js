console.log("Ejercicio 10:");

let gradosCelcius = 25;
let gradosFahrenheit = 65;


function calculateFarenheit (gradosC){
     gradosC = (gradosC*9/5)+32;
    return gradosC;
}
console.log(`${gradosCelcius}ºC son ${calculateFarenheit(gradosCelcius)}ºF`);

function calculateCelsius (gradosF){
    gradosF = (gradosF-32)*5/9;
    return gradosF;
}
console.log (`${gradosFahrenheit}ºF equivalen a ${calculateCelsius(gradosFahrenheit)}ºC`);
