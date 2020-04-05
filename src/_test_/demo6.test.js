
const { getMaxNumber, getMinNumber, getAverage } = require ('../demo6');
const faker = require ('faker');

const array = [];

for (let i = 0; i < 1000; i++){
  array.push(faker.random.number());
}

describe('getMaxNumber', () => {

  it('should return the max number', () => {
    expect(getMaxNumber([1,2,3,4,5,6,8,9])).toBe(9);
    expect(getMaxNumber([1,2,3,4,5,6,8,9,0,100])).toBe(100);
    expect(getMaxNumber([1,2,3,4,5,-66,8,9,0,34])).toBe(34);
  });

});

describe('getMinNumber', () => {

  it('should return the min number', () => {
    expect(getMinNumber([1,2,3,4,5,6,8,9])).toBe(1);
    expect(getMinNumber([1,2,3,4,5,6,8,9,0,100])).toBe(0);
    expect(getMinNumber([1,2,3,4,5,-66,8,9,0,34])).toBe(-66);
  });

});

describe('getAverage', () => {

  it('should return the average', () => {
    expect(getAverage([10, 10, 10])).toBe(10);
    expect(getAverage([1,2,3,4,5,6,7,8,9,10])).toBe(5.5);
    expect(getAverage([10,20,30])).toBe(20);
  });

});

describe('getMaxNumber - FakerApi', () => {
  console.log(Math.max([...array]))
  it('should return the max number', () => {
    expect(getMaxNumber(array)).toBe(Math.max(...array));
  });
});

describe('getMinNumber - FakerApi', () => {
  it('should return the min number', () => {
    expect(getMinNumber(array)).toBe(Math.min(...array));
  });
});

describe('getAverageNumber - FakerApi', () => {
  let values = array;
  let count = values.length;
  values = values.reduce((previous, current) => current += previous, 0);
  values /= count;
  it('should return the average number', () => {
    expect(getAverage(array)).toBe(values);
  });

});