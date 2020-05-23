const maxAcum = (accumulator, currentValue) => accumulator >= currentValue ? accumulator : currentValue;
const getMaxNumber = (numbersArray) => numbersArray.reduce(maxAcum)

const lessAcum = (accumulator, currentValue) => accumulator <= currentValue ? accumulator : currentValue;
const getMinNumber = (numbersArray) => numbersArray.reduce(lessAcum)

const sum = (accumulator, currentValue) => accumulator + currentValue;
const getAverage = (numbersArray) => numbersArray.reduce(sum) / numbersArray.length

module.exports = { getMaxNumber, getMinNumber, getAverage };