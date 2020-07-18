const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((rta, item) => {
    if (item > rta) {
      rta = item
    }
    return rta
  }, 0)
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((rta, item) => {
    if (item < rta) {
      rta = item
    }
    return rta
  }, getMaxNumber(numbersArray))
}

const getAverage = (numbersArray) => {
  let sum = numbersArray.reduce((count, item) => {
    return (count + item)
  }, 0)
  return sum / numbersArray.length
}

module.exports = { getMaxNumber, getMinNumber, getAverage };