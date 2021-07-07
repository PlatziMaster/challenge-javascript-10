const getMaxNumber = (numbersArray) => numbersArray.reduce(
  (maximum, number) => number > maximum ? number : maximum
  );

const getMinNumber = (numbersArray) => numbersArray.reduce(
  (minimum, number) => number < minimum ? number : minimum
  );

const getAverage = (numbersArray) => {
  const total = numbersArray.reduce((total, number) => total + number);
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