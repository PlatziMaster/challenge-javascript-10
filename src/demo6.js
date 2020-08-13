const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((max, numero) => {
    if(max < numero) {
      max = numero;
    }
    return max;
});
}

const getMinNumber = (numbersArray) => {
   return numbersArray.reduce((menor, numero) => {
      if(menor > numero) {
        menor = numero;
      }
      return menor;
  });
}

const getAverage = (numbersArray) => {
  let sumatoria = numbersArray.reduce((average, numero) => {
    return average + numero  
});
  let average = sumatoria / numbersArray.length
    return average
}

module.exports = { getMaxNumber, getMinNumber, getAverage };