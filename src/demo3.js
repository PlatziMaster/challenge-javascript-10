const matriz = [
  [1,2,3],
  [4,5,6, [1,2,3]],
  [7,8,9]
];

// [1,2,3,4,5,6,7,8,9]

console.table(matriz);
console.log(matriz[0]); //  1 │ 2 │ 3
console.log(matriz[0][1]); //  2

const rta = matriz.reduce((rta, item)=> {
  return [...rta, ...item];
}, []);

console.log(rta);

const rta1 = matriz.flat(2);
console.log(rta1);