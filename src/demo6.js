const getMaxNumber = (numbersArray) => {
  // your code here
  const maxNumber = numbersArray.reduce(function(count, item) {
    if(count > item) {
      return count;
    }else {
      return item;
    }
  } , 0);
  return maxNumber;
}

const getMinNumber = (numbersArray) => {
  // your code here
  const minNumber = numbersArray.reduce(function(count, item) {
    if(item < count) {
      return item;
    }else {
      return count;
    }
  } , 1);
  return minNumber;
}

const getAverage = (numbersArray) => {
  // your code here
   average = numbersArray.reduce((count, item) =>  (count + item), 0);
   return average / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };