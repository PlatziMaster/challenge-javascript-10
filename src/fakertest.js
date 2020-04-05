const faker = require ('faker')
const { getAverage } = require ('./demo6');

const array = []
const testArray = [1,2,3,4,5]

for (let i = 0; i < 1000; i++){
  array.push(faker.random.number());
}

console.log(getAverage(array))