const matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

console.log(matriz[0][1]);
console.log(matriz[0][2]);

const numbers = [];

matriz.forEach(array => {
  array.forEach(number => {
    numbers.push(number);
  })
});

console.log(numbers);

const rta = matriz.reduce((arrayTotal,current) => {
  return [...arrayTotal, ...current];
}, [])

console.log(rta);