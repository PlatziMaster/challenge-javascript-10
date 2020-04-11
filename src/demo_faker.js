const { getMaxNumber, getMinNumber, getAverage } = require ('./demo6');

const faker = require("faker");
let arrayNum = [];

for (let i = 0; i < 1000; i++)
{
    arrayNum.push(faker.random.number());
}

console.log(getMaxNumber(arrayNum));
console.log(getMinNumber(arrayNum));
console.log(getAverage(arrayNum));