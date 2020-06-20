const axios = require("axios");
const faker = require('faker');

const API = 'https://jsonplaceholder.typicode.com';

const generateTasks = (userId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: faker.name.findName(),
          rate: faker.random.number(2),
          userId
        },
        {
          name: faker.name.findName(),
          rate: faker.random.number(2),
          userId
        }
      ]);
    }, 200);
  })
}

const getTodos = async (usersIds) => {
  const promises = usersIds.map(userId => generateTasks(userId));
  return (await Promise.all(promises))
  .reduce((rta, item) => {
    return [...rta, ...item];
  }, []);
}

getTodos([1,4]).then(rta => console.log(rta));
