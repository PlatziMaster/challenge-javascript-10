const faker = require('faker');

const getMaxNumber = (numbersArray) => {
	// your code here
	return numbersArray.reduce((max, value) => (value > max ? value : max), 0);
};

const getMinNumber = (numbersArray) => {
	// your code here
	if (numbersArray.length === 0) return 0;
	return numbersArray.reduce((min, value) => (value < min ? value : min));
};

const getAverage = (numbersArray) => {
	// your code here
	return (
		numbersArray.reduce((acumulator, value) => acumulator + value, 0) /
			numbersArray.length || 0
	);
};

const array = [];

for (let index = 0; index < 1000; index++) {
	array.push(faker.random.number());
}

console.log(array.toString());

console.log('Maximo', getMaxNumber(array));
console.log('Minimo', getMinNumber(array));
console.log('Average', getAverage(array));

module.exports = { getMaxNumber, getMinNumber, getAverage };
