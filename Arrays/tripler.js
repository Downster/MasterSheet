//Write a function tripler(nums) that takes in an array as an arg.
//The function should return a new array containing three times every number of the original array.

// const tripler = (nums) => {
//     return nums.map((el) => el * 3);
// }

const tripler = (nums, result = []) => {
    if (!nums.length){
        return result;
    } else {
        result.push(3 * nums.shift());
        return tripler(nums, result);
    }
}


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
