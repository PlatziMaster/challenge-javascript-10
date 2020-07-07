const getMaxNumber = (numbersArray) => {
  h= numbersArray.reduce((acc, curr)=> Math.max(acc,curr))
  return h
}

const getMinNumber = (numbersArray) => {
  h= numbersArray.reduce((acc, curr)=> Math.min(acc,curr))
  return h
}

const getAverage = (numbersArray) => {
  const reducer = (acc, curr) => (acc+curr);
  var h= numbersArray.reduce(reducer)/numbersArray.length
  return h
}

module.exports = { getMaxNumber, getMinNumber, getAverage };




