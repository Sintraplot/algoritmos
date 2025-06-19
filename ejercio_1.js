

 let numero = (prompt("introduce un número entre 0 y 100"));

 function averiguarParImpar() {
    if(numero<0 || numero>100){
    console.log ("Número introducido no válido");
 }else if (numero %2 ===0){
    console.log(`${numero} es un número par`);
 }else if (numero %2!=0){
      console.log(`${numero} es un número impar`);
 }else(nu) {
    console.log("El dato introducido no es válido" );
 }
}
averiguarParImpar();