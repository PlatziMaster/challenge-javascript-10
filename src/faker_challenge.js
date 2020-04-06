const { getMaxNumber, getMinNumber, getAverage } = require('./demo6');
const faker = require('faker');

function fakerTest() {
  const array_length = 1000;

  const arrayFaker = new Array(array_length)
    .fill(null)
    .map(
      () => faker.random.number()
    );

  console.log(
    `Max: ${getMaxNumber(arrayFaker)}`,
    `Min: ${getMinNumber(arrayFaker)}`,
    `Avg: ${getAverage(arrayFaker)}`);

}

fakerTest(); 