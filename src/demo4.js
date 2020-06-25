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
  const promises = usersIds
  .map(id => axios.get(`${API}/todos?userId=${id}`));
  return (await Promise.all(promises))
  .map(response => response.data)
  .flat();
}

getTodos([3,5])
.then(rta => {
  console.log(rta);
});
