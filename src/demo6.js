const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce(function(accumulator, currentValue){
    if(accumulator >= currentValue) return accumulator;
    return currentValue;
  });
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce(function(accumulator, currentValue){
    if(accumulator <= currentValue) return accumulator;
    return currentValue;
  });
}

const getAverage = (numbersArray) => {
  return (numbersArray.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }) / numbersArray.length);
}

module.exports = { getMaxNumber, getMinNumber, getAverage };