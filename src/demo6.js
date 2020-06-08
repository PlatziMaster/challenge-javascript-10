const getMaxNumber = (numbersArray) =>
  numbersArray.reduce((acum, current) =>
    acum > current ? acum : current)

const getMinNumber = (numbersArray) =>
  numbersArray.reduce((acum, current) =>
    acum < current ? acum : current)

const getAverage = (numbersArray) => {
  let sum = numbersArray.reduce((acum, current) => acum + current)

  return sum / numbersArray.length
}

module.exports = { getMaxNumber, getMinNumber, getAverage };