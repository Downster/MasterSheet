/***********************************************************************
Examples:

let arr = [1, 2, 3];
let duped = deepDup(arr); // [1, 2, 3];
arr === duped // false

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
arr === duped // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false
***********************************************************************/


function deepDup(arr) {
    return arr.map((el) => {
      return (Array.isArray(el)) ? deepDup(el) : el
    })
  }

arr = [1, [2, [3]]];

console.log(duped = deepDup(arr)); // [1, [2, [3]]]
console.log(arr === duped) // false
console.log(arr[1] === duped[1]) // false
console.log(arr[1][1] === duped[1][1]) // false



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}
