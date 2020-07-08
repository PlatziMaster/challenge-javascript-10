const getMaxNumber = (numbersArray) => {
  // your code here
  const max = numbersArray.reduce((acc, el) =>{
    return Math.max(acc, el)
  })
  return max
}

const getMinNumber = (numbersArray) => {
  // your code here
  const min = numbersArray.reduce((acc, el)=>{
    return Math.min(acc, el)
  })
  return min
}

const getAverage = (numbersArray) => {
  // your code here
  const total = numbersArray.reduce((acc, el)=>{
    return (acc + el)
  })
  return total / numbersArray.length
}

module.exports = { getMaxNumber, getMinNumber, getAverage };