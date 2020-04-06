const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((acc, value) => (acc > value ? acc : value));
};

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((acc, value) => (acc < value ? acc : value));
};

const getAverage = (numbersArray) => {
  return numbersArray.reduce((acc, value) => acc + value) / numbersArray.length;
};

module.exports = { getMaxNumber, getMinNumber, getAverage };
