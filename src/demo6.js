const getMaxNumber = (numbersArray) => {
  const numMax = numbersArray.reduce((max, number) => (number > max ? (max = number) : max), 0);

  return numMax;
};

const getMinNumber = (numbersArray) => {
  const numMin = numbersArray.reduce((min, number) => (number < min ? (min = number) : min), 1);

  return numMin;
};

const getAverage = (numbersArray) => {
  const sumTotal = numbersArray.reduce((count, number) => count + number, 0);
  const average = sumTotal / numbersArray.length;

  return average;
};

module.exports = { getMaxNumber, getMinNumber, getAverage };
