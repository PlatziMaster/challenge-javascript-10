const { getMaxNumber, getMinNumber, getAverage } = require("./demo6");

const faker = require("faker");
let fakeNum = [];

const runTest = () => {
  for (let i = 0; i < 1000; i++) {
    fakeNum.push(faker.random.number());
  }

  console.log(getMaxNumber(fakeNum));
  console.log(getMinNumber(fakeNum));
  console.log(getAverage(fakeNum));
};


runTest();