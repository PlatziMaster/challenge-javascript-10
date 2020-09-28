const getMaxNumber = (numbersArray) => {
	return numbersArray.reduce((count, value)=> {
		return count > value ? count : value;
	});
}

const getMinNumber = (numbersArray) => {
	return numbersArray.reduce((count, value)=> {
		return count < value ? count : value;
	});
}

const getAverage = (numbersArray) => {
	return numbersArray.reduce((count, value)=> {
		return (count + value);
	})/numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };