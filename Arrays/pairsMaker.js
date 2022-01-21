//Write a function pairsMaker(arr) that takes in a an array as an argument.
//The function should return a 2D array where the subarrays represent unique pairs of element from the input array.


const pairsMaker = (arr) => {
    let result = [];
    for (let j = 0; j < arr.length - 1; j++){
       for (let i = j + 1; i < arr.length; i++){
            result.push([arr[j], arr[i]]);
       }
    }
    return result;
}

console.log(pairsMaker(['a', 'b', 'c', 'd']));
