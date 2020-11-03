const getMaxNumber = (numbersArray) => {
  // your code here
  return numbersArray.reduce((previosValue, currentValue) => {
    if (previosValue > currentValue){
      return previosValue;
    }
    return currentValue;
  })
}

const getMinNumber = (numbersArray) => {
  // your code here
  return numbersArray.reduce((previosValue, currentValue) => {
    if (previosValue < currentValue){
      return previosValue;
    }
    return currentValue;
  })
}

const getAverage = (numbersArray) => {
  // your code here
  const rta = numbersArray.reduce((previosValue, currentValue) => {
    return previosValue + currentValue;
  })
}

module.exports = { getMaxNumber, getMinNumber, getAverage };