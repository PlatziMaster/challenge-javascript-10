const faker = require('faker');

const exams = [];

for (let index = 0; index < 1000; index++) {
  exams.push({
    name: faker.name.findName(),
    rate: faker.random.number(6),
  });
}

const rta = exams
.map(exam => exam.rate)
.reduce((result, value) => {
  if (result[value]) {
    result[value] = result[value] + 1;
  } else {
    result[value] = 1;
  }
  return result;
}, {});

console.log(rta);
