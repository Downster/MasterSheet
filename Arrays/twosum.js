// ```Write a function that intakes an array of numbers and a targetSum.
// The function should return true
// if ANY combination of 2 numbers in the array equals the targetSum.
// Can be the same numb```

//declare function the intakes an array of numbers abd a targetSum
const twoSum = (array, targetSum) => {
    //iterate through the array (nested loops)
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[i] + array[j] === targetSum){
                return true;
            }
        }
    }
    return false;
}

// if num + num equals target sum
            //return true

    //else return false

    console.log(twoSum([1,2,3], 3));
    console.log(twoSum([1, 2, 3], 7));
