const faker = require('faker')

const getMaxNumber = (numbersArray) => {
  // your code here
  const result = numbersArray.reduce((a, b) => Math.max(a, b))
  return result
}

const getMinNumber = (numbersArray) => {
  // your code here
  const result = numbersArray.reduce((a, b) => Math.min(a, b))
  return result
}

const getAverage = (numbersArray) => {
  // your code here
  const result = numbersArray.reduce((accum, currentValue) => accum + currentValue)
  const avg = result / numbersArray.length
  return avg
}


const fakerNumbers = () => {
  numbers = []
  for (let i = 0; i < 1000; i++) {
    numbers.push(faker.random.number())
  }
  return numbers
}

const average = (numbersArray) => {
  let total = 0;
  for(let i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];
  }
  const avg = total / numbersArray.length;
  return avg
}

const max = (numbersArray) => {
  let maximum = numbersArray[0]
  for (let i = 0; i < numbersArray.length; i++) {
    if (maximum >= numbersArray[i]) {
      continue
    } else {
      maximum = numbersArray[i]
    }
  }
  return maximum
}


const min = (numbersArray) => {
  let minimum = numbersArray[0]
  for (let i = 0; i < numbersArray.length; i++) {
    if (minimum <= numbersArray[i]) {
      continue
    } else {
      minimum = numbersArray[i]
    }
  }
  return minimum
}


module.exports = { getMaxNumber, getMinNumber, getAverage, fakerNumbers, average, max, min};