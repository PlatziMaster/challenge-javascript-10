const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((count, item) => Math.max(count, item))
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((count, item) => Math.min(count, item))
}

const getAverage = (numbersArray) => {
  return numbersArray.reduce((count, item) => (count + item)) / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };