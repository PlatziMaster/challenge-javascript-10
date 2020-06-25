const getMaxNumber = (numbersArray) => {
  const rta = numbersArray.reduce((number, item)=>{
    if(item > number[0]){
      number[0] = item;
    }else{
      number[0] = number[0];
    }
    return number
  }, [0])
  return rta[0];
}


const getMinNumber = (numbersArray) => {
  // your code here
  const rta = numbersArray.reduce((number, item)=>{
    if(number[0] !== undefined){
      if(item < number[0]){
        number[0] = item;
      }else{
        number[0]=number[0];
      }
    }else{
      number[0] = item;     
    }
    return number
  }, [])
  return rta[0];
}


const getAverage = (numbersArray) => {
  // your code here
  const rta = numbersArray.reduce((number, item)=>{
    if(number[0]){
      number[0] += item;
    }else{
      number[0] = item
    }
    return number
  }, [])
  return rta[0] /  numbersArray.length
}

module.exports = { getMaxNumber, getMinNumber, getAverage };








