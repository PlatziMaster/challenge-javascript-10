'use strict'

const faker = require('faker')

const averageArray = (numbersArray) => () => {
  let suma = 0
  const lengthSum = numbersArray.map(current => suma = suma + current)
  return suma / lengthSum.length
}

const maxNumber = numbersArray => () => {
  let max = 0
  numbersArray.map(current => {
    if (current > max) {
      max = current
    }
  })
  return max
}

const minNumber = numbersArray => () => {
  let min = getMaxNumber(numbersArray)
  numbersArray.map(current => {
    if (current < min) {
      min = current
    }
  })
  return min
}

const getMaxNumber = (numbersArray) => {
  const result = maxNumber(numbersArray)
  return result()
}

const getMinNumber = (numbersArray) => {
  const result = minNumber(numbersArray)
  return result()
}

const getAverage = (numbersArray) => {
  const result = averageArray(numbersArray)
  return result()
}

const arraysNumber = () => () => {
  const totalNumbers = 1000
  let arrayNumbers = []
  for (let i = 0; i < totalNumbers; i++) {
    arrayNumbers = arrayNumbers.concat(faker.random.number())
  }
  return arrayNumbers
}

const fakeNumbers = () => {
  const result = arraysNumber()
  return result()
}

module.exports = { getMaxNumber, getMinNumber, getAverage }
