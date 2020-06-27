const faker = require('faker');

const getMaxNumber = (numbersArray) => {
  return numbersArray
  .reduce((valorAnterior, valorActual) => ((valorAnterior > valorActual) ? valorAnterior : valorActual) );
}

const getMinNumber = (numbersArray) => {
  return numbersArray
    .reduce((valorAnterior, valorActual) => ((valorAnterior < valorActual) ? valorAnterior : valorActual) );
}

const getAverage = (numbersArray) => {
  let acumulator = numbersArray.reduce((count, value) => (count + value));
  return acumulator / numbersArray.length;
}

let numbersArray = []
for (let index = 0; index < 1000; index++) {
  numbersArray.push(faker.random.number(1000));
}
console.log(getAverage(numbersArray));
console.log(getMaxNumber(numbersArray));
console.log(getMinNumber(numbersArray));


module.exports = { getMaxNumber, getMinNumber, getAverage };