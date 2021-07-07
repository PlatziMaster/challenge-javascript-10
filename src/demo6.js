const getMaxNumber = (numbersArray) => {
  const reducer = (a,b) => a > b ? a : b;
  return numbersArray.reduce(reducer);
}

const getMinNumber = (numbersArray) => {
  const reducer = (a,b) => a < b ? a : b;
  return numbersArray.reduce(reducer);
}

const getAverage = (numbersArray) => {
  const reducer = (a,b) => a += b;
  return numbersArray.reduce(reducer)/numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };