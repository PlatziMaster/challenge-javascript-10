const getMaxNumber = (numbersArray) =>
  numbersArray.reduce(
    (acc, current) => (acc > current ? acc : current),
    -Infinity
  );

const getMinNumber = (numbersArray) =>
  numbersArray.reduce(
    (acc, current) => (acc < current ? acc : current),
    Infinity
  );

const getAverage = (numbersArray) =>
  numbersArray.reduce((acc, current) => acc + current, 0) / numbersArray.length;

module.exports = { getMaxNumber, getMinNumber, getAverage };
