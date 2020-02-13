const faker = require('faker');

const data = [];

for (let index = 0; index < 3000; index++) {
  data.push({
    name: faker.name.firstName(),
    rate: faker.random.number(6)
  });
}

const rta = data
.map(item => item.rate)
.reduce((dict, rate) => {
  if (dict[rate]) {
    dict[rate] += 1;
  } else {
    dict[rate] = 1;
  }
  return dict;
}, {});

console.log(rta);