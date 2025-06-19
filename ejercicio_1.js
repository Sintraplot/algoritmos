

 let numero = 15;

 function averiguarParImpar() {
    if(numero<0 || numero>100){
    console.log ("Número introducido no válido");
 }else if (numero %2 ===0){
    console.log(`${numero} es un número par`);
 }else if (numero %2!=0){
      console.log(`${numero} es un número impar`);
 }else {
    console.log("El dato introducido no es válido" );
 }
}
averiguarParImpar();