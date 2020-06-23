const tasks = [
  {
    id: 1343,
    title: "Fix issue 423",
    duration: 60,
    completed: false,
  },
  {
    id: 2454,
    title: "Make new chart for dashboard",
    duration: 120,
    completed: false,
  },
  {
    id: 32323,
    title: "Show validations in form",
    duration: 180,
    completed: true,
  },
  {
    id: 45434,
    title: "Make new endpoint for login",
    duration: 240,
    completed: true,
  },
];

const rta = tasks
  .map((task) => {
    return {
      ...task,
      durationInHours: task.duration / 60,
    };
  })
  .filter((task) => task.completed)
  .map((task) => task.durationInHours)
  .reduce((count, value) => {
    return count + value;
  }, 0);

console.log(rta);

const rta2 = [2, 3].reduce((count, value) => {
  return count + value;
}, 0);

console.log(rta2);
