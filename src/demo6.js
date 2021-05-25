const getMaxNumber = (numbersArray) => {
  let max = numbersArray.reduce((a, b) =>{ 
    return Math.max(a,b)
  });
  return max;
}

const getMinNumber = (numbersArray) => {
  let min = numbersArray.reduce((a, b) =>{ 
    return Math.min(a,b)
  });
  return min;
}

const getAverage = (numbersArray) => {
  let sum = numbersArray.reduce((a,b) => a + b);
  sum = sum / numbersArray.length;
  return sum;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };