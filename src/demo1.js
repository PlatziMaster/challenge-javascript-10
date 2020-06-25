const faker = require('faker');

const orders = [];
for (let index = 0; index < 1000; index++) {
  orders.push({
    name: faker.name.findName(),
    zipCode: faker.address.zipCode(),
    product: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
  });
}

const rta = orders
.map(order => order.price)
.filter(item => item > 500)
.reduce((count, value) => count + value, 0);
console.log(rta);