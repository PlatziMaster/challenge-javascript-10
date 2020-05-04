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
.reduce((count, value) => {
  console.log(`count=${count}`);
  console.log(`value=${value}`);  
  const retorno = count + value;
  return retorno;
}, 0);
console.log(rta);