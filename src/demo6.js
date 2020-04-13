const getMaxNumber = (numbersArray) => {
  const maxNumber = numbersArray.reduce((count, value) => {
    return Math.max(count, value);
  });
  return maxNumber;
}

const getMinNumber = (numbersArray) => {
  const minNumber = numbersArray.reduce((count, value) => {
    return Math.min(count, value);
  });
  return minNumber;
}

const getAverage = (numbersArray) => {
  const sum = numbersArray.reduce((count, value) => {
    return count + value;
  });
  return sum / numbersArray.length;
}

// Bonus
const faker = require('faker');
const sales = [];
for (let index = 0; index < 1000; index++) {
  sales.push({
    price: parseInt(faker.commerce.price(), 10),
  });
}
const amount = sales
  .map(sale => sale.price) // Descuento del 20%
  .filter(sale => sale % 2 === 0) // Solo pagaran las cuentas que sean numero pares
  .reduce((count, price) => count + price, 0); // Sumamos las ventas

console.log(amount); // Total de ventas

module.exports = { getMaxNumber, getMinNumber, getAverage };