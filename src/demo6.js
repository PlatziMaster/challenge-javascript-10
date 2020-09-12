const getMaxNumber = (numbersArray) => {
  // your code here
  return numbersArray.reduce((max, numero) => {
    if(max < numero) {
      max = numero;
    }
    return max;
});
}

const getMinNumber = (numbersArray) => {
  // your code here
  return numbersArray.reduce((menor, numero) => {
    if(menor > numero) {
      menor = numero;
    }
    return menor;
});
}

const getAverage = (numbersArray) => {
  // your code here
  let sumatoria = numbersArray.reduce((average, numero) => {
    return average + numero  
});
  let average = sumatoria / numbersArray.length
    return average
}

module.exports = { getMaxNumber, getMinNumber, getAverage };