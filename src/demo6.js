const faker = require('faker');

const getMaxNumber = (numbersArray) => {
  // your code here
  const maxNumber = numbersArray.reduce((acum, elem) => {
    if (elem > acum) return elem
    else return acum
  })
  return maxNumber
}

const getMinNumber = (numbersArray) => {
  // your code here
  const minNumber = numbersArray.reduce((acum, elem) => {
    return acum < elem ? acum : elem
  })
  return minNumber
}

const getAverage = (numbersArray = []) => {
  // your code here
  return numbersArray.reduce((acum, elem) => acum + elem) / numbersArray.length
}

const generateNumberFaker = () => {
  let numbers = []
  // faker.locale = 'es'
  console.log(faker.internet.email())
  console.log({ lng: faker.address.longitude(), lat: faker.address.latitude() })
  Object.entries(faker.hacker).forEach((elem) => console.log( `-${elem[0]}: `, elem[1]() ))
  for (let i = 0; i < 1000; i++) {
    numbers.push(faker.random.number(100))
  }
  return numbers
}
console.log(generateNumberFaker())

module.exports = { getMaxNumber, getMinNumber, getAverage };