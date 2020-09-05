const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue))
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue))
}

const getAverage = (numbersArray) => {
  const reduced = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue , 0)
  return reduced / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };

//Paso 5 Faker
const faker = require('faker');
const arr = [];
const fake = (arr, howMany) => {
  for(let i = 0; i <= howMany; i++) {
    let newNum = faker.random.number();
    arr.push(newNum)
  }
}
fake(arr, 1000);
console.log(arr);
