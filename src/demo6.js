const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((min, value) => Math.max(min, value));
};

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((min, value) => Math.min(min, value));
};

const getAverage = (numbersArray) => {
  return numbersArray.reduce((a, b) => a + b) / numbersArray.length;
};

module.exports = { getMaxNumber, getMinNumber, getAverage };
