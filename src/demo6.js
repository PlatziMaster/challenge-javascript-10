const getMaxNumber = (numbersArray) => {
    const reducer = numbersArray.reduce((acumulator, currentValue)=>acumulator>currentValue? acumulator:currentValue)
    console.log(`The max number is ${reducer}`)
    
}

const getMinNumber = (numbersArray) => {
    const reducer = numbersArray.reduce((acumulator, currentValue)=>acumulator<currentValue? acumulator:currentValue)
    console.log(`The min number is ${reducer}`)
}

const getAverage = (numbersArray) => {
    const arrayLength = numbersArray.length
    const reducer = numbersArray.reduce((acumulator, currentValue)=>acumulator+currentValue)
    console.log("The average is", reducer/arrayLength)
}

getMaxNumber = (numbersArray)
getMinNumber = (numbersArray)
getAverage = (numbersArray)


module.exports = { getMaxNumber, getMinNumber, getAverage };
