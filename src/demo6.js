const getMaxNumber = numbersArray =>
  numbersArray.reduce((accumulator, value) =>
    value > accumulator ? value : accumulator
  );

const getMinNumber = numbersArray =>
  numbersArray.reduce((accumulator, value) =>
    value < accumulator ? value : accumulator
  );

const getAverage = numbersArray =>
  numbersArray.reduce((accumulator, value, index) =>
    index !== numbersArray.length - 1
      ? accumulator + value
      : (value + accumulator) / numbersArray.length
  );

module.exports = { getMaxNumber, getMinNumber, getAverage };
