const { getMaxNumber, getMinNumber, getAverage } = require('./demo6');

function randomGenerator(size) {
  const min = 0;
  const max = Math.floor(Math.random() * 99999);
  const arrayOfRandomNumbers = [];

  for (let i = 0; i < size; i++) {
    arrayOfRandomNumbers.push(Math.floor(Math.random() * (max - min) + min));
  }

  return arrayOfRandomNumbers;
}

const randomNumbers = randomGenerator(1000);

console.log('Max:', getMaxNumber(randomNumbers));
console.log('Min:', getMinNumber(randomNumbers));
console.log('Average:', getAverage(randomNumbers));
