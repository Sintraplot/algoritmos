console.log("Ejericio 8:");


let thisIsAWord = "coco"
let letter = "a";
//ver si puedo arreglar el tema de los acentos

function counter (){
  let arrayWorld = thisIsAWord.split("")
  let newArrayWorld = arrayWorld.filter((eachLetter) => (eachLetter === letter) );
  let counterLetters = newArrayWorld.length

   
   console.log(`La palabra ${thisIsAWord} tiene ${counterLetters} veces la letra ${letter}.`);
    
} 
counter();