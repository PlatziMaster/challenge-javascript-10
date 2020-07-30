const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((acc, cur) => (acc > cur ? acc : cur));
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((acc, cur) => (acc < cur ? acc : cur));
}

const getAverage = (numbersArray) => {
  return numbersArray.reduce((acc, cur) => (acc + cur)) / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };
