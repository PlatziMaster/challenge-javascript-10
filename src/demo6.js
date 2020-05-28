const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((anterior, actual) => Math.max(anterior, actual))
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((anterior, actual) => Math.min(anterior, actual))
}

const getAverage = (numbersArray) => {
  return (numbersArray.reduce((anterior, actual) => anterior + actual) / numbersArray.length)
}

module.exports = { getMaxNumber, getMinNumber, getAverage };