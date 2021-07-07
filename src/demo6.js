const getMaxNumber = (numbersArray) => numbersArray.reduce((a,b) => a > b ? a : b);

const getMinNumber = (numbersArray) => numbersArray.reduce((a,b) => a < b ? a : b);

const getAverage = (numbersArray) => numbersArray.reduce((a,b) => a + b) / numbersArray.length;

module.exports = { getMaxNumber, getMinNumber, getAverage };