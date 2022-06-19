// var has the scope within the function
// let has the scope within the block
// const is used for constants and has the scope of block
// for eg
function varEg() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // the i declared with var is accessible here which is not good
}
function varEg() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  // console.log(i); // i is not accessible here
}
/**
 * So for conclusion
 * use const mostly and use let if variable needs to be reassigned, use var only if its really needed
 */
