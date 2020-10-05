'use strict'

const axios = require("axios");

const API = 'https://jsonplaceholder.typicode.com';

const fetchUsers = async () => {
  const usersIds = [1,2,3,4,5]

  const promises = usersIds
  .map(userId => axios.get(`${API}/users/${userId}/todos?_limit=2`))

  const rta = (await Promise.all(promises))
  .map(response => response.data)
  .reduce((totalArray, value) => {
    return [...totalArray, ...value];
  }, []);

  console.log(rta);
};

fetchUsers();