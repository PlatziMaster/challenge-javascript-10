const faker = require('faker');
const numbers = [];

for (let index = 0; index < 1000; index++) {
    numbers.push(faker.random.number())
}

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

console.log("Tamaño array de números", numbers.length)
console.log("array de números", numbers)
console.log("El número minimo es:", getMinNumber(numbers));
console.log("El número máximo es:", getMaxNumber(numbers));
console.log("El promedio es:", getAverage(numbers));




module.exports = { getMaxNumber, getMinNumber, getAverage };