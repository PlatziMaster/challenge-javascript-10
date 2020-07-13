const faker = require('faker');

const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((previousValue, currentValue) => {
    if (previousValue > currentValue) {
      return previousValue;
    }
    return currentValue;
  }, 0);
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((previousValue, currentValue) => {
    if (previousValue < currentValue) {
      return previousValue;
    }
    return currentValue;
  });
}

const getAverage = (numbersArray) => {
  const rta = numbersArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  return rta / numbersArray.length;
}

const arrayFaker = [];

for (let i = 0; i < 1000; i++) {
  arrayFaker.push(faker.random.number(1000));
}

console.log(arrayFaker.length);

console.log(getMaxNumber(arrayFaker));
console.log(getMinNumber(arrayFaker));
console.log(getAverage(arrayFaker));

module.exports = { getMaxNumber, getMinNumber, getAverage };