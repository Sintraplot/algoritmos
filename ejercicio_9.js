console.log("Ejercicio 9:");


let year = 2000;

if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
    console.log (`${year} es un año bisiesto.`);
}else if (year % 4 === 0 &&  year % 100===0 &&  year % 400===0) {
    console.log (`${year} es un año bisiesto.`);

}else if(year % 4 === 0 &&  year % 100 === 0 &&  year % 400 !== 0){
    console.log (`${year} no es un año bisiesto.`);

}else {
    console.log (`${year} no es un año bisiesto.`);

}