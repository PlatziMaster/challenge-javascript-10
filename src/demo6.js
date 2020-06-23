const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((anterior, actual) => {
    let result = anterior
    if(actual > anterior) result = actual
    return result
  }, 0)
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((anterior, actual) => {
    let result = anterior
    if(actual < anterior) result = actual
    return result
  }, 1)
}

const getAverage = (numbersArray) => {
  return (numbersArray.reduce((anterior, actual) => anterior + actual) / numbersArray.length)
}

module.exports = { getMaxNumber, getMinNumber, getAverage };