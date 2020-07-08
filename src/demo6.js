const getMaxNumber = (numbersArray) => {
  let currentNumber = numbersArray.reduce((acc, val) => val > acc ? val: acc); 
  return currentNumber
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((acc, val) => val < acc ? val: acc); 
}

const getAverage = (numbersArray) => {
  return numbersArray.reduce((acc, val)=> acc + val)/numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };