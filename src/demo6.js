const getMaxNumber = numbersArray => {
  const maxNumber = numbersArray.reduce((a, b) => {
    return Math.max(a, b);
  });
  return maxNumber;
};

const getMinNumber = numbersArray => {
  const minNumber = numbersArray.reduce((a, b) => {
    return Math.min(a, b);
  });
  return minNumber;
};

const getAverage = numbersArray => {
  const average = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const averageResult = average / numbersArray.length;
  return averageResult;
};

module.exports = { getMaxNumber, getMinNumber, getAverage };
