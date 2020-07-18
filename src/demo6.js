const faker = require('faker');
const numbersArray = [];

for (let index = 0; index < 1000; index++) {
    numbersArray.push(faker.random.number())
}

const getMaxNumber = (numbersArray) => numbersArray.reduce((number1, number2) => number1> number2 ?number1 :number2);

const getMinNumber = (numbersArray) => {
	return numbersArray.reduce((number1, number2) => {
		if(number1 < number2){
			return number1;
		}else {
			number1=number2
			return number1;
		}
	});
}

const getAverage = (numbersArray) => numbersArray.reduce((acum, number) => (acum + number))/numbersArray.length;

module.exports = { getMaxNumber, getMinNumber, getAverage };