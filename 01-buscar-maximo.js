// Iteración #1: Buscar el máximo
// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
    if(numberOne > numberTwo) return numberOne
    else if(numberOne < numberTwo) return numberTwo
    else return ("Los números son iguales");
  }

  console.log(sum(9, 5));
  console.log(sum(3, 5));
  console.log(sum(5, 5));


