const { getMaxNumber, getMinNumber, getAverage, fakerNumbers, average, max, min } = require ('../demo6');
const fakeList = fakerNumbers();

describe('getMaxNumber', () => {

  it('should return the max number', () => {
    expect(getMaxNumber([1,2,3,4,5,6,8,9])).toBe(9);
    expect(getMaxNumber([1,2,3,4,5,6,8,9,0,100])).toBe(100);
    expect(getMaxNumber([1,2,3,4,5,-66,8,9,0,34])).toBe(34);
    expect(getMaxNumber(fakeList)).toBe(max(fakeList));
  });

});

describe('getMinNumber', () => {

  it('should return the min number', () => {
    expect(getMinNumber([1,2,3,4,5,6,8,9])).toBe(1);
    expect(getMinNumber([1,2,3,4,5,6,8,9,0,100])).toBe(0);
    expect(getMinNumber([1,2,3,4,5,-66,8,9,0,34])).toBe(-66);
    expect(getMinNumber(fakeList)).toBe(min(fakeList));
  });

});

describe('getAverage', () => {

  it('should return the average', () => {
    expect(getAverage([10, 10, 10])).toBe(10);
    expect(getAverage([1,2,3,4,5,6,7,8,9,10])).toBe(5.5);
    expect(getAverage([10,20,30])).toBe(20);
    expect(getAverage(fakeList)).toBe(average(fakeList));
  });

});
