const faker = require('faker');

const numbersArray = [];

for (let index = 0; index < 1000; index++) {
  numbersArray.push({
    number: faker.random.number(1000),
  });
}

const getMaxNumber = numbersArray => {
  return numbersArray.reduce((num, value) => (value > num ? value : num));
};

const getMinNumber = numbersArray => {
  return numbersArray.reduce((num, value) => (value < num ? value : num));
};

const getAvg = numbersArray => {
  return numbersArray.reduce(
    (sum, value) => sum + value / numbersArray.length,
    0,
  );
};

module.exports = { getMaxNumber, getMinNumber, getAvg };
