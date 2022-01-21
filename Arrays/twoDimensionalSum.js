//Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.


const twoDimensionalSum = (arr) => {
    return arr.reduce((output, currentEl) => {
        currentEl.forEach((el) => {
            output += el;
        });
        return output;
    }, 0);
}



let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2));
