const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((previous, current) => {
    return previous >= current ? previous : current;
  });
}

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((previous, current) => {
    return previous <= current ? previous : current;
  });
}

const getAverage = (numbersArray) => {
  let total = numbersArray.reduce((previous, current) => {
    return previous + current;
  });
  return total / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };