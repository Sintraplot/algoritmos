console.log ("Ejericio 14:");

function chekAnagrame(word1, word2) {
  let stringOne = word1;
  let stringTwo = word2;

  stringOne = word1.split("");
  stringTwo = word2.split("");

  if (stringOne.length !== stringTwo.length) {
    console.log(`${word1} y ${word2}  no son un anagrama`);
    return;
  }
  stringOne = stringOne.sort().join("");
  stringTwo = stringTwo.sort().join("");

  if (stringOne === stringTwo) {
    console.log(`${word1} y ${word2} son un anagrama`);
   
  }else {
    console.log(`${word1} y ${word2} no son un anagrama`);
  }
}

chekAnagrame("perro", "perra");
