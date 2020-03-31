const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((num, value)=> value > num ? value : num);
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((num, value)=> value < num ? value : num);
}

module.exports = { getMaxNumber, getMinNumber };