const faker = require('faker');

const users = [];

for (let index = 0; index < 50; index++) {
  users.push({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    lastName: faker.name.lastName(),
  });
}

console.log(users);
