console.log ("Ejericio 12:");

let array = [1, 1, 2, 2, 3, 3];

function deleteDuplicates(array) {
 
  let duplicadosEliminados = new Set(array) 
  /*Set crea a partir del array que le doy una suceción de elementos en los que NO SE REPITE NINGUNO. Los que se repiten los rechaza*/
  let resultado = Array.from(duplicadosEliminados);/* Array.from convierte en array el conjunto de elementos que le entreguemos*/

  /*duplicadosEliminados = duplicadosEliminados.split(""); NO SERÍA VÁLIDO PORQUE SPLIT SOLO CONVIERTE EN ARRAY UN STRING*/
  return(resultado); 
}
let newArray = deleteDuplicates(array); /*si meto el resultado de la función en una variable podría trabajar con ese array fuera de la function*/
 console.log(newArray);
 /*console.log(deleteDuplicates(array)) lo pondría así si no necesito el resultado y solo lo quiero enseñar por pantalla*/

