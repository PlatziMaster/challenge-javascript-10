const axios = require('axios');

const API = 'https://jsonplaceholder.typicode.com';

const getTasks = async (ids) => {
  const promises = ids.map(id => axios.get(`${API}/todos?userId=${id}`))
  const responses = (await Promise.all(promises))
  .map(response => response.data)
  .reduce((totalArray, value) => {
    return [...totalArray, ...value];
  }, []);
  console.log(responses);
};

getTasks([1,4,5,6]);

