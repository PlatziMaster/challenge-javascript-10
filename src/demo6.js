const getMaxNumber = (numbersArray) => numbersArray.reduce((x,y)=> x > y ?x :y);

const getMinNumber = (numbersArray) => numbersArray.reduce((x,y)=> x < y ?x :y);

const getAverage = (numbersArray) => numbersArray.reduce((x,y)=> x + y )/ numbersArray.length;

module.exports = { getMaxNumber, getMinNumber, getAverage };