const matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(matriz.length);
console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.table(matriz);

const rta = matriz.reduce((rta, item) => {
  return [...rta, ...item];
}, []);

console.log(matriz);
console.log(rta);