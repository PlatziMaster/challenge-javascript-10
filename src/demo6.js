const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((maxNumber, number) => {
    return maxNumber > number ? maxNumber : number;
  }, -Infinity);
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((minNumber, number) => {
    return minNumber < number ? minNumber : number;
  }, Infinity);
}

const getAverage = (numbersArray) => {
  return numbersArray.reduce((sum, number) => sum += number, 0) / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };