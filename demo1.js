const faker = require('faker');

const orders = [];

for (let index = 0; index < 3000; index++) {
  orders.push({
    name: faker.name.firstName(),
    price: parseInt(faker.commerce.price(), 10)
  });
}

const rta = orders
.map(item => item.price)
.reduce((count, value) => count + value, 0);

console.log(rta);