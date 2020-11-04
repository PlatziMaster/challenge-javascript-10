const getMaxNumber = (numbersArray) => {
	const maxNumber = numbersArray.reduce((accumulator, currentValue) => {
		return Math.max(accumulator, currentValue);
	});
	return maxNumber;
};

const getMinNumber = (numbersArray) => {
	const minNumber = numbersArray.reduce((accumulator, currentValue) => {
		return Math.min(accumulator, currentValue);
	});
	return minNumber;
};

const getAverage = (numbersArray) => {
	const average =
		numbersArray.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}) / numbersArray.length;
	return average;
};

module.exports = {getMaxNumber, getMinNumber, getAverage};
