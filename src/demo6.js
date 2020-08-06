const getMaxNumber = (numbersArray) => {
  //Solución reto #2
  return numbersArray.reduce((accumulator, nextValue) => Math.max(accumulator, nextValue));
}

const getMinNumber = (numbersArray) => {
  //Solución reto #1
  return numbersArray.reduce((accumulator, nextValue) => Math.min(accumulator, nextValue));
}

const getAverage = (numbersArray) => {
  //Solución reto #3
  const average =  numbersArray.reduce(function(accumulator, nextValue){
    return (accumulator + nextValue);
  }, 0);
  return average / numbersArray.length;
}

//Solución reto #4
const faker = require('faker');

const randomNumbersArray = [];
const total = 1000;
for (let index = 0; index < total; index++) {
  randomNumbersArray.push(faker.random.number(total));
};
console.log(randomNumbersArray);

module.exports = { getMaxNumber, getMinNumber, getAverage, randomNumbersArray };