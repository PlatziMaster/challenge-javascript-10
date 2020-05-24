const randomValues = () =>{

  const faker = require('faker')
  let arr = []  

  for( i = 0; i < 1000; i++){
    arr.push(faker.random.number())
  }

  return arr;
}

const getMaxNumber = (numbersArray) => {
  const reducer = (acc, cVal) => {
    acc = ( acc === undefined || cVal > acc ) ? cVal : acc
    
    return acc;
  }
  
  return numbersArray.reduce(reducer);
}

const getMinNumber = (numbersArray) => {
  const reducer = (acc, cVal) => {
    acc = ( acc === undefined || cVal < acc ) ? cVal : acc
    
    return acc;
  }

  return numbersArray.reduce(reducer);
}

const getAverage = (numbersArray) => {
  const reducer = (acc, cVal) => {
    acc += cVal
    
    return acc;
  }

  const average = numbersArray.reduce(reducer)/numbersArray.length;

  return average;
}

arr = randomValues();
console.log(arr);
console.log(getMaxNumber(arr));
console.log(getMinNumber(arr));
console.log(getAverage(arr));

module.exports = { getMaxNumber, getMinNumber, getAverage };