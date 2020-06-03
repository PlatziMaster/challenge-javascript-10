const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((max, number) => max < number ? number : max);
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((min, number) => min > number ? number : min);
}

const getAverage = (numbersArray) => {
  return numbersArray.reduce((count, number) => count + number) / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };