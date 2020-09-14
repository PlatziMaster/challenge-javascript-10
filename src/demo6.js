// RETO 1
// Usando la función reduce debes buscar el número más pequeño y el más grande.

// Pasos
// Editar el archivo demo6.js
// Usando reduce encontrar el numero más pequeño.
// Usando reduce encontrar el numero más grande.
// Obtener el promedio de un array.


const getMaxNumber = (numbersArray) => {
  // your code here
  //imprime el numero mayor
  return numbersArray.reduce((max, numero) => {
    if(max < numero) {
      max = numero;
    }
    return max;
});
}
//------------------------------------------------------//
const getMinNumber = (numbersArray) => {
  // your code here
  //Imprime el numero menor
  return numbersArray.reduce((menor, numero) => {
    if(menor > numero) {
      menor = numero;
    }
    return menor;
});
}
//------------------------------------------------------//
const getAverage = (numbersArray) => {
  // your code here
  //Promedio de Array
  let suma = numbersArray.reduce((average, numero) => {
    return average + numero  
});
  let average = suma/ numbersArray.length
    return average
}
module.exports = { getMaxNumber, getMinNumber, getAverage }; 