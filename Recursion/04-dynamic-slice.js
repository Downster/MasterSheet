/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Do not use the built-in Array#slice method.

    If the start index is less than 0 the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should
    slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(2,4);
    console.log(slicer([0, 1, 2, 3])); // prints [ 2, 3 ]
    console.log(slicer([2, 4, 'hello', false])); // prints ['hello', false]

    const slicer2 = dynamicSlice(-2, 10);
    console.log(slicer2([0,1,2,3])); // prints [0, 1, 2, 3]
*/

function dynamicSlice(start, end) {
    //returns another function that accepts array
    return (array) => {
        let result = [];
        //if the start is less than zero
        if (start < 0 && end > array.length) {
            //return from the beginning of the array to the end
            for (let i = 0; i < array.length; i++) {
                result.push(array[i]);
            }
            return result;
        }
        else if (end > array.length) {
            // if the end is greater than the length
            for (let i = start; i < array.length; i++) {
                result.push(array[i]);
            }
            return result;
            //return up to the end
        } else if (start < 0) {
            for (let i = 0; i < end; i++) {
                result.push(array[i]);
            }
            return result;
        } else {
            for (let i = start; i < end; i++){
                result.push(array[i]);
            }
            return result;
        }
        // else
        //return the section

    }
}

// about 12 minutes

const slicer = dynamicSlice(2, 4);
console.log(slicer([0, 1, 2, 3])); // prints [ 2, 3 ]
console.log(slicer([2, 4, 'hello', false])); // prints ['hello', false]

const slicer2 = dynamicSlice(-2, 10);
console.log(slicer2([0, 1, 2, 3])); // prints [0, 1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = dynamicSlice;
} catch (e) {
    module.exports = null;
}
