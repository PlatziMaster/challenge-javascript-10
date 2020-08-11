const getMaxNumber = (numbersArray ) => {
  // your code here
  return numbersArray.reduce((acum, curr) => {
    if (acum < curr) {
      acum = curr
    }
    return acum
  })
}

const getMinNumber = (numbersArray= [1, 2, 3, 20, 1, 0, 2]) => {
  // your code here
  return numbersArray.reduce((acum, curr) => {
    if (acum > curr) {
      acum = curr

    }
    return acum
  })
}

const getAverage = (numbersArray) => {
  // your code here
  let total = numbersArray.reduce((acum, curr) => {
    return acum + curr
  })

  let promedio = total / numbersArray.length
  return promedio
}

module.exports = {
  getMaxNumber,
  getMinNumber,
  getAverage
};