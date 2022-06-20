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

const myArrToString = myArr.toString();
console.log(`myArrToString: ${myArrToString}`);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// slice returns selection of array start and end position given as args end is actually end-1 pos
console.log(fruits.slice(1, 3));
console.log(fruits);
/* Removing 2 elements from index 2 */
console.log(`removed:${fruits.splice(2, 2)}`);
console.log(`new fruits: ${fruits}`);
