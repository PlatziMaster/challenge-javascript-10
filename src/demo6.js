const getMaxNumber = (numbersArray = []) => {
  const maxNumber = numbersArray
    .reduce((counter, value) => counter > value ? counter : value, numbersArray[0] | 0)
  return maxNumber;
}

const getMinNumber = (numbersArray = []) => {
  const minNumber = numbersArray
    .reduce((counter, value) => counter < value ? counter : value, numbersArray[0] | 0)
  return minNumber;
}

const getAverage = (numbersArray = []) => {
  const average = numbersArray
    .reduce((counter, value) => counter + value, 0) / numbersArray.length
  return average;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };