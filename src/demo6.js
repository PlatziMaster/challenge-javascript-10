const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((bigger, num) => {
    if(bigger > num) {
      return bigger;
    } else {
      return num;
    }
  }, Number.NEGATIVE_INFINITY);
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((smaller, num) => {
    if(smaller < num) {
      return smaller;
    } else {
      return num;
    }
  }, Infinity);
}

const getAverage = (numbersArray) => {
  return numbersArray.reduce((a, b) => a + b) / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };