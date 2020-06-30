const { getMaxNumber, getMinNumber, getAverage } = require ('./demo6');
const faker = require('faker');

const fakerTest = () => {
  const arrayFaker = new Array(1000).fill(null).map(() =>  faker.random.number());
 
  console.log(`Max: ${getMaxNumber(arrayFaker)}`);
  console.log(`Min: ${getMinNumber(arrayFaker)}`);
  console.log(`Min: ${getAverage(arrayFaker)}`);
}

fakerTest();