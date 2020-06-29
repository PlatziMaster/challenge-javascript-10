const getMaxNumber = (numbersArray) => {
  let max = numbersArray.reduce((acc, val) => val > acc ? val: acc); 
  return max
}

const getMinNumber = (numbersArray) => {
  let min = numbersArray.reduce((acc, val) => val < acc ? val: acc); 
  return min
}

const getAverage = (numbersArray) => {
  let avg = numbersArray.reduce((acc, val)=> acc + val);
  return avg/numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };