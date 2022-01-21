/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  let element1;
  let element2;
  if (arr.length === 0) {
    return [arr];
  } else if (arr.length === 1) {
    element1 = [arr[index]];
    result.push(element1);
    return result;
  } else if (index < 2 && !passed3) {
    element1 = [arr[index]];
    result.push(element1);
    return subsets(arr, result, ++index);
  } else if (index === 2 && !passed3) {
    if (arr.length === 2) {
      element1 = [arr[0], arr[1]];
      result.push(element1);
      return result
    } else {
      element1 = [arr[0], arr[1]];
      element2 = [arr[index]];
      result.push(element1);
      result.push(element2);
      return subsets(arr, result, 0, true);
    }
  } else if (index < 2 && passed3) {
    element1 = [arr[index], arr[2]]
    result.push(element1);
    return subsets(arr, result, ++index, true);
  } else {
    element1 = [...arr];
    result.push(element1);
    return result;
  }
}

console.log(subsets([1]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
