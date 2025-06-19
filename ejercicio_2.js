console.log("Ejercicio 2:");

let palabra = "perro";
let palabraAlReves = palabra.split("");


function invertirElOrden () {
    palabraAlReves = palabraAlReves.reverse();
    palabraAlReves = palabraAlReves.join("");
    console.log(`Si ponemos la palabra ${palabra} al revés, este es el resultado: ${palabraAlReves}.`);
 
}
   invertirElOrden();
