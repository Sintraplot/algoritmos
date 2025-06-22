console.log ("Ejercio 15:");

function findPrimerNumbersOf(number){
  let smallerNumbers =[];
  let primersNumbers = [];


  for(let i=number-1; i>=2; i-- ){
    smallerNumbers.push(i) /* 6 5 4 3 2 */
  }

  smallerNumbers.forEach((n)=>{
    let primer = true;//declaro una variable booleana para poder aceptar, o no, un n.
    for(let x = 2; x<n; x++)/*itero desde 2 hasta n-1 para poder sacar los divisores*/{
      if (n % x === 0)/*aquí hacemos un *****meta bucle***** cada n va a iterar sobre x y si se puede dividir entre un número inferior a n se rompe el bucle y se pasa al siguiente n*/{
        primer=false;
        
      }
    }if (primer === true){/* si supera el if anterior y por lo tanto SIGU SIENDO TRUE SE PASA A HACER EL PUSH*/
      primersNumbers.push(n);

    }
  })
  console.log(primersNumbers)
  }
  
  

 
findPrimerNumbersOf(7);

