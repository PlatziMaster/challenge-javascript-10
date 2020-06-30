const getMaxNumber = (numbersArray) => numbersArray.reduce((last, curr) => last < curr ? curr : last);

const getMinNumber = (numbersArray) => numbersArray.reduce((last, curr) => last < curr ? last : curr);

const getAverage = (numbersArray) => numbersArray.reduce((last, curr) => last + curr) / numbersArray.length;

module.exports = { getMaxNumber, getMinNumber, getAverage };