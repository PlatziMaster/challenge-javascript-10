const axios = require("axios");

const API = 'https://jsonplaceholder.typicode.com';

const callUsers = async (usersIds) => {

  const promises = usersIds.map(userId => {
    return axios.get(`${API}/todos?userId=${userId}`);
  });

  const rta = (await Promise.all(promises))
  .map(response => response.data)
  .reduce((arrayTotal, array) => {
    return [...arrayTotal, ...array];
  }, []);
  console.log(rta);
  console.log(rta.length);
};


callUsers([1,2,4,5]);