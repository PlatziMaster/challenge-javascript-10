const faker = require('faker');

const users = {};

for (let index = 0; index < 50; index++) {
  const id = faker.random.uuid();
  users[id] = {
    id,
    name: faker.name.findName(),
    lastName: faker.name.lastName(),
  };
}

console.log(users);
console.log(users['2264458f-d502-44d4-916f-02a9a8190032']);

console.log(Object.keys(users));

// const user = users
// .filter(item => item.id === 'f67d94d1-2274-4369-a2b6-40d10f46c9f5');
// console.log(user);
