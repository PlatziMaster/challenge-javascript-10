const getMaxNumber = (numbersArray) => {
  
  const maxNumber = numbersArray.reduce( (last_value,new_value) => {
    if (last_value < new_value ){
      return new_value
    } else {
      return last_value;
    }
  });
  return maxNumber;
}

const getMinNumber = (numbersArray) => {
  const minNumber = numbersArray.reduce( (last_value,new_value) => {
    if (last_value > new_value ){
      return new_value
    } else {
      return last_value;
    }
  });
  return minNumber;
}

const getAverage = (numbersArray) => {
  const amount = numbersArray.reduce( (last_value,new_value) => last_value + new_value);
  const averrage = amount/(numbersArray.length);
  return averrage;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };