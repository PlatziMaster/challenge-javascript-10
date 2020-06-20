// const numbers = [1,3,5,7];

// const rta = numbers.reduce((count, item) => {
//   return count + item;
// }, 0);

// console.log(rta);

const tasks = [
  {
    id: 1343,
    title: 'Fix issue 423',
    duration: 60,
    completed: true,
  },
  {
    id: 2454,
    title: 'Make new chart for dashboard',
    duration: 120,
    completed: false,
  },
  {
    id: 32323,
    title: 'Show validations in form',
    duration: 180,
    completed: true,
  },
  {
    id: 45434,
    title: 'Make new endpoint for login',
    duration: 240,
    completed: true,
  },
];

const rta = tasks
.map(task => {
  return {
    ...task,
    durationInHours: task.duration / 60
  };
})
.filter(task => task.completed)
.map(item => item.durationInHours)
.reduce((count, item) => count + item, 0);

console.log(rta);