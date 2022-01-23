//Write a function additionMutator that accepts an array and a number as an arguments.
//The function should mutate the input array such that every element has the given number added to it.

// const additionMutator = (array, num) => {
//     for (let i = 0; i < array.length; i++){
//         array[i] = array[i] + num;
//     }
//     return array;
// }

const additionMutator = (array, num) => {
    return array.forEach((el, i) => {
        array[i] = array[i] + num;
    })
    return array;
}




let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]
