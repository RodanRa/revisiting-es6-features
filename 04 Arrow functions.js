//traditional way
function squareTraditional(number) {
  const n = parseInt(number);
  return n * n;
}
//arrow function implementation
const squareArrow = (number) => {
  const n = parseInt(number);
  return n * n;
};
console.log(squareArrow(2));

// implementing function as argument way
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: true },
];
//traditional way
const activeJobsTraditional = jobs.filter(function (job) {
  return job.isActive;
});
// arrow method way
const activeJobsArrow = jobs.filter((job) => job.isActive);
console.log(activeJobsArrow);
