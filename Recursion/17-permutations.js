/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// const permutations = (array, count = 0, front = false) => {
//   let copy = array.slice();// copy original array
//   let len = copy.length - 1; // set variable length to swap elements with destructuring
//   if (count === findLength(array.length)) return[]; //basecase: if count is equal to the return value of findlength
//   if (count % 2 === 0){ // if count is even
//   [copy[len - 1], copy[len]] = [copy[len], copy[len - 1]]   //swap the last two elements
//   } else if (!front){
//     let ele = copy.pop();
//     copy.unshift(ele);             // boolean front determines
//     front = true;                 // if the element has recently
//   } else if (front){             // been popped of the back of the copy
//     let ele = copy.shift();     // or if it needs to be shifted
//     copy.push(ele)             // and placed on the back of the copied array
//     front = false;            //alternate this behavior every third time
//   }
//   return [array, ...permutations(copy, ++count, front)];
// };

// const findLength = (length) => {
//   return (length === 0) ? 1 : length * findLength(--length)
// }

function permutations(arr) {
  // no spec for what to actually return here, so you can have an empty array
  if (arr.length === 0) {
    return [];
  }
  // important that this is an array !!!!
  if (arr.length === 1) {
    return [arr];
  }
  let newPerms = [];
  // for each element we generate permutations by appending element to all permutations of the remaining characters.
  for (let i = 0; i < arr.length; i++) {
    let thisEl = arr[i];
    let remainingElements = [...arr.slice(0, i), ...arr.slice(i + 1)];
    let subPerms = permutations(remainingElements);
    for (let perm of subPerms) {
      newPerms.push([thisEl, ...perm]);
    }
  }
  return newPerms;
}

console.log(permutations([1, 2, 3, 4]));



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
