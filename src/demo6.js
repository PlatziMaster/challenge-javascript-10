



let numbersArray = [ 2, 4, 6, 8];


const getMaxNumber = (numbersArray) => {
  return numberMax = numbersArray.reduce((max, number) => {
    if (max < number){
      max = number
    }
    return max
  });
}

const getMinNumber = (numbersArray) => {
  return numberMin = numbersArray.reduce((min, number) => {
    if (min > number){
      min = number
    }
    return min
  });
}


const getAverage = (numbersArray) => {
  let suma = numbersArray.reduce((average, number) => {
    return average + number
  });
  let average = suma / numbersArray.length
  return promedio =  average
}

getMaxNumber(numbersArray);
console.log(numberMax)


getMinNumber(numbersArray);
console.log(numberMin)

getAverage(numbersArray);
console.log(promedio)


module.exports = { getMaxNumber, getMinNumber, getAverage };

















