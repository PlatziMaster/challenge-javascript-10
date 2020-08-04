const getMaxNumber = (numbersArray) => {
  return answerMax = numbersArray.reduce((max, actualNum) => Math.max(max, actualNum))
}

const getMinNumber = (numbersArray) => {
  return answerMin = numbersArray.reduce((min, actualNum) => Math.min(min, actualNum))
}

const getAverage = (numbersArray) => {
  const sumNum = numbersArray.reduce((a, b) => a + b)
  return avaNum = (sumNum / numbersArray.length)
}

module.exports = { getMaxNumber, getMinNumber, getAverage };


