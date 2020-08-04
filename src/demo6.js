const faker = require('faker');

const randomNumbersArray = [];
const total = 1000;
for (let index = 0; index < total; index++) {
  randomNumbersArray.push(faker.random.number(total));
};
console.log(randomNumbersArray);

const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((accumulator, nextValue) => Math.max(accumulator, nextValue));
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((accumulator, nextValue) => Math.min(accumulator, nextValue));
}

const getAverage = (numbersArray) => {
  const average =  numbersArray.reduce(function(accumulator, nextValue){
    return (accumulator + nextValue);
  }, 0);
  return average / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };