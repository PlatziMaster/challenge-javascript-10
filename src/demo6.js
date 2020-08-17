const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce(maxNumber);
}
function maxNumber(total, num) {
  let mayor;
  mayor = total > num ? total : num;
  return mayor;
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce(minNumber);
}
function minNumber(total, num) {
  let min;
  min = total < num ? total : num;
  return min;
}

const getAverage = (numbersArray) => {
  return numbersArray.reduce(addNumber)/numbersArray.length;
}
function addNumber(total, num) {
  return total+num;
}


module.exports = { getMaxNumber, getMinNumber, getAverage };