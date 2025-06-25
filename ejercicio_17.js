console.log("Ejericio 17:");

function checkParenthesis(string) {
  let counter = 0;

  for (let indice = 0; indice < string.length; indice++) {
    if (string[indice] === "(") {
      counter++;
    }
    if (string[indice] === ")") {
      counter--;
    }
    if (counter < 0) {
      break;
    }
  }
  return counter === 0;
}
checkParenthesis("()perro");
console.log(checkParenthesis("((perro)"));
