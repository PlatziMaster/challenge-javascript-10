const getMaxNumber = (numbersArray) => {
  // your code here
  console.log(numbersArray);
  let maxNumber = numbersArray.reduce((a, b) => Math.max (a, b));
  console.log(maxNumber);
}

const getMinNumber = (numbersArray) => {
  // your code here
  console.log(numbersArray);
  let minNumber = numbersArray.reduce((a, b) => Math.min (a, b));
  console.log(minNumber);
}

const getAverage = (numbersArray) => {
  // your code here
  console.log(numbersArray);
  let avgNumber = numbersArray.reduce((a, b) => (a + b)) / numbersArray.length;
  console.log(avgNumber);
}


getMaxNumber([2,4,5,6]);
getMinNumber([2,4,5,6]);
getAverage([10,10,10]);



module.exports = { getMaxNumber, getMinNumber, getAverage };