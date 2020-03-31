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
.reduce((result, rate) => {
  if (result[rate]) {
    result[rate] += 1;
  } else {
    result[rate] = 1;
  }
  return result;
}, {});

console.log(rta);