const getMaxNumber = numbersArray => numbersArray.reduce((acc, value) => Math.max(acc, value));


const getMinNumber = numbersArray => numbersArray.reduce((acc, value) => Math.min(acc, value));


const getAverage = (numbersArray) => {
  let sum = numbersArray.reduce((acc, value) => acc + value);
  return sum / numbersArray.length;
}


module.exports = { getMaxNumber, getMinNumber, getAverage };