/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(item) {
  return item.reduce((output, el) => output.concat(Array.isArray(el) ? flatten(el) : el), [])
}

//const flatten = (arr) => !arr.length ? [] : Array.isArray(arr[0]) ? flatten([...arr[0], ...arr.slice(1)]) : [arr[0], ...flatten(arr.slice(1))];

console.log(flatten([1, [2, [3]]]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
