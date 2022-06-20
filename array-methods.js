const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareArr = myArr.map((element) => {
  return element * element;
});
console.log(`square array ${squareArr}`);
const filteredEvenArray = myArr.filter((element) => {
  return element % 2 == 0;
});
console.log(`Even numbers: ${filteredEvenArray}`);
const filteredEvenPositions = myArr.filter((element) => {
  return myArr.indexOf(element) % 2 == 0;
});
console.log(`Filtered even position array: ${filteredEvenPositions}`);

const newCubeArray = [];
myArr.forEach((element) => {
  newCubeArray.push(element * element * element);
});
console.log(`newCubeArray: ${newCubeArray}`);
