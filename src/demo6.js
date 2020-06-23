const getMaxNumber = (numbersArray) => {
  const rta = numbersArray.reduce((initial, current) => {
    if (initial < current) {
      initial = current;
    }
    return initial;
  });
  return rta;
};

const getMinNumber = (numbersArray) => {
  const rta = numbersArray.reduce((initial, current) => {
    if (initial > current) {
      initial = current;
    }
    return initial;
  });
  return rta;
};

const getAverage = (numbersArray) => {
  const rta = numbersArray.reduce((initial, current) => {
    return initial + current;
  });
  return rta / numbersArray.length;
};

module.exports = { getMaxNumber, getMinNumber, getAverage };
