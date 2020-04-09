const getMaxNumber = (numbersArray) => numbersArray.reduce((maximum, number) => {
  if (number > maximum)
    maximum = number;
  return maximum;
}, Number.MIN_VALUE);

const getMinNumber = (numbersArray) => numbersArray.reduce((minimum, number) => {
  if (number < minimum)
    minimum = number;
  return minimum;
}, Number.MAX_VALUE);

const getAverage = (numbersArray) => {
  const total = numbersArray.reduce((total, number) => total + number, 0);
  return total/numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };

// Testing with faker

const faker = require('faker')

let testData = [];

for (let i = 0; i < 1000; i++)
  testData.push(faker.random.number());

console.log('Generated array:');
console.log(testData);
console.log(`Average: ${getAverage(testData)}`);
console.log(`Minimum: ${getMinNumber(testData)}`);
console.log(`Maximum: ${getMaxNumber(testData)}`);