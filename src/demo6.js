const getMaxNumber = (numbersArray) => {
  const max = numbersArray.reduce((numbermax, number) => {
    if (numbermax < number) {
      numbermax = number;
    }
    return numbermax;
  }, 0);
  return max;
}

const getMinNumber = (numbersArray) => {
  const min = numbersArray.reduce((numbermin, number) => {
    if (numbermin > number) {
      numbermin = number;
    }
    return numbermin;
  });
  return min;
}

const getAverage = (numbersArray) => {
  const Average = numbersArray.reduce((sum, number) => {
    sum += number
    return sum;
  }, 0);
  return Average / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };