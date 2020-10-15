const getMaxNumber = (numbersArray) => {
  solution = numbersArray.reduce((a, b) => {
    if ( a > b) {
      return a
    } else {
      return b
    }
  })

  return solution;
}

const getMinNumber = (numbersArray) => {
  solution = numbersArray.reduce((a, b) => {
    if ( a < b) {
      return a
    } else {
      return b
    }
  })

  return solution;
}

const getAverage = (numbersArray) => {
  const solution = numbersArray.reduce((a, b) => {
    return a + b;
  })

  return solution / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };