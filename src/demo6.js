'use strict'

const faker = require('faker')

const averageArray = (numbersArray) => () => {
  const sum = (accumulator, current) => current + accumulator
  return numbersArray.reduce(sum) / numbersArray.length
}

const maxNumber = numbersArray => () => {
  const accumulator = 0
  const max = (accumulator, current) => {
    if (current > accumulator) {
      return accumulator = current
    } else {
      return accumulator
    }
  }
  return numbersArray.reduce(max, accumulator)
}

const minNumber = numbersArray => () => {
  let min = getMaxNumber(numbersArray)
  const max = (accumulator, current) => {
    if (current < accumulator) {
      return accumulator = current
    } else {
      return accumulator
    }
  }
  return numbersArray.reduce(max, min)
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
  let arrayNumbers = []
  const totalNumbers = 1000
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
