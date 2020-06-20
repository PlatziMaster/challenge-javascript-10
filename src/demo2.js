const faker = require('faker');

const exams = [];

for (let index = 0; index < 1000; index++) {
  exams.push({
    name: faker.name.findName(),
    rate: faker.random.number(6), // 0 - 6
  });
}

const rta = exams
.map(item => item.rate)
.reduce((rta, item) => {
  if(rta[item]) { // si
    rta[item] = rta[item] + 1;
  } else { // no
    rta[item] = 1;
  }
  return rta;
}, {})

console.log(rta);


// console.log(result);

// const expect =  {
//   key: value,
//   0: 123,
//   1: 1213,
//   2: 1245,
//   3: 2323,
//   4: 1212,
//   5: 23,
//   6: 232
// }
