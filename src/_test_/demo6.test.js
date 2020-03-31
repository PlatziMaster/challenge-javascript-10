const { getMaxNumber, getMinNumber, getAvg } = require('../demo6');

describe('getMaxNumber', () => {
  it('should return the max number', () => {
    expect(getMaxNumber([1, 2, 3, 4, 5, 6, 8, 9])).toBe(9);
    expect(getMaxNumber([1, 2, 3, 4, 5, 6, 8, 9, 0, 100])).toBe(100);
    expect(getMaxNumber([1, 2, 3, 4, 5, -66, 8, 9, 0, 34])).toBe(34);
  });
});

describe('getMinNumber', () => {
  it('should return the min number', () => {
    expect(getMinNumber([1, 2, 3, 4, 5, 6, 8, 9])).toBe(1);
    expect(getMinNumber([1, 2, 3, 4, 5, 6, 8, 9, 0, 100])).toBe(0);
    expect(getMinNumber([1, 2, 3, 4, 5, -66, 8, 9, 0, 34])).toBe(-66);
  });
});

describe('getAvg', () => {
  it('should return the average', () => {
    expect(getAvg([10, 10, 10])).toBe(10);
    expect(getAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
    expect(getAvg([10, 20, 30])).toBe(20);
  });
});
