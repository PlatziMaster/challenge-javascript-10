const getMaxNumber = (numbersArray) => {
  return Math.max(...numbersArray)
}

const getMinNumber = (numbersArray) => {
  return Math.min(...numbersArray)
}

const getAverage = (numbersArray) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var h= numbersArray.reduce(reducer)/numbersArray.length
  return h
}

module.exports = { getMaxNumber, getMinNumber, getAverage };




