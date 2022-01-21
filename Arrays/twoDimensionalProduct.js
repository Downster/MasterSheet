//Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument.
//The function should return the total product of all numbers multiplied together.

const twoDimensionalProduct = (array) => {
    return array.reduce((output, currentEl) => {
        currentEl.forEach((el) => {
            output *= el;
        });
        return output;
    }, 1);
}



let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2));
