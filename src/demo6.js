const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((max, value) => Math.max(max, value));
};

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((min, value) => Math.min(min, value));
};

const getAverage = (numbersArray) => {
  return numbersArray.reduce((a, b) => a + b) / numbersArray.length;
};

module.exports = { getMaxNumber, getMinNumber, getAverage };
