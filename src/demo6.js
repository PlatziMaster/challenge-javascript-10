const getMaxNumber = (numbersArray) => {
  const maxValue = numbersArray.reduce((maxValue, currentValue) => {
    if (currentValue > maxValue) {
      maxValue = currentValue;
    }
    return maxValue;
  }, numbersArray[0])
  return maxValue;
}

const getMinNumber = (numbersArray) => {
  const minValue = numbersArray.reduce((minValue, currentValue) => {
    if (currentValue < minValue) {
      minValue = currentValue;
    }
    return minValue;
  }, numbersArray[0])
  return minValue;
}

const getAverage = (numbersArray) => {
  let average = numbersArray.reduce((total, currentValue) => {
    total += currentValue;
    return total
  }, 0)
  average = average / numbersArray.length;
  return average;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };