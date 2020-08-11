const faker = require("faker");
var {
    getAverage,
    getMaxNumber,
    getMinNumber
} = require("./demo6");



let neArray = new Array()
let arrow = async (number ) => {
    for (let i = 0; i < number; i++) {
        neArray.push(faker.random.number())
    }
}
arrow(1000)
console.log(neArray);
console.log(getAverage(neArray))
console.log(getMaxNumber(neArray))
console.log(getMinNumber(neArray))

