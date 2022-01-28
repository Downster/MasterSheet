/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/
// console.time("test")
// function sort(nums, result = []) {
//     if (!nums.length){
//         return result;
//     }else {
//         let i;
//         result.push(nums.reduce((output, el, index) => {
//             if (el < output){
//                 output = el;
//                 i = index;
//             }
//             return output;
//         }))
//         nums.splice(i, 1);
//         return sort(nums, result);
//     }

// }

// //took about 10 min, no help
// console.log(sort([])) // prints []
// console.log(sort([9])) // prints [9]
// console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
// console.timeEnd('test');
// //console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]

// console.time('test');
// let arr = [1, 5, 8, 7, 9];
// console.log(arr.sort());
// console.timeEnd('test');

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
