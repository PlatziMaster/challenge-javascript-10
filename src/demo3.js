const matriz = [ [1,2,3], [4,5,6], [7,8,9]];

const rta = matriz.reduce((result, array) => {
  return [...array, ...result];
}, []);

console.log(rta);