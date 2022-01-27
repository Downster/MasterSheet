/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/
// console.time('test');
// let minValueCallback = function(arr, cb) {
//   if(!cb) return Math.min(...arr);
//   else {
//     return arr.reduce((output, el) => {
//       if(cb(el) < output) {
//       output = cb(el);
//       }
//       return output;
//     }, cb(arr[0]))
//   }
// };
// console.timeEnd('test');
// console.time('test');
let minValueCallback = function (arr, cb) {
  return (!cb) ? Math.min(...arr) : cb(Math.min(...arr));
};
console.timeEnd('test');






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
