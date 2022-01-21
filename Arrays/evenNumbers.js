//Write a function evenNumbers(max) that takes in a number as an arg.
// function should return an array containing all positive, even numbers that are less than max.

const evenNumbers = (max) => {
    let result = [];
    while (max !== 1) {
        max--;
        if (max % 2 === 0){
            result.push(max);
        }
    }
    return result;
}


console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]


