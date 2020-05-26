const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((count, item) => Math.max(count, item))
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((count, item) => Math.min(count, item))
}

const getAverage = (numbersArray) => {
  return numbersArray.reduce((count, item) => (count + item)) / numbersArray.length;
}


//Plus: Crear un array de 1000 números y probar las funciones

const faker = require('faker');

const orders = [];
for (let index = 0; index < 1000; index++) {
  orders.push(parseInt(faker.random.number(10)));
}

console.log(getMaxNumber(orders))
console.log(getMinNumber(orders))
console.log(getAverage(orders))

module.exports = { getMaxNumber, getMinNumber, getAverage };