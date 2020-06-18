const getMaxNumber = (numbersArray) => {
    let answer = numbersArray.reduce((count, item) => {
        if (item > count) return item;
        return count;
    });
    return answer;
}

const getMinNumber = (numbersArray) => {
    let answer = numbersArray.reduce((count, item) => {
            if (count > item) return item;
            return count;
        },
        numbersArray[0])
    return answer;
}

const getAverage = (numbersArray) => {
    let answer = numbersArray.reduce((count, item) => {
        return (count + item);
    }, 0)

    return answer / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage };