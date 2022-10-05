// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let media = 0;
    for (let i = 0; i < param.length; i++) {
        media = media + param[i] / param.length;
    }
  return media;
}

console.log(average(numbers));