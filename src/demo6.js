const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((pre, curr) => pre < curr ? curr : pre);
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((pre, curr) => pre < curr ? pre : curr);
}

const getAverage = (numbersArray) => {
  return numbersArray.reduce((pre, curr) => pre + curr)/numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };