// Write a function avgVal(arr) that accepts an array as an arg. The function should return the average of all values in the array.
//If the array is empty, it should return null.

const avgVal = (arr) => {
    return (!arr.length) ? null : arr.reduce((output, currentEl) => {
        output += currentEl;
        return output;
    }, 0) / arr.length;
}


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
