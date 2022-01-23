//when given an array of strings, remove each vowel from each string and return the new array as a string.

// let array = ['poop', 'dAd', 'rad', 'mAd', 'coding'];
// let answer = [];
// let vowels = "aeiouAIEOU";


// //iterate through array
// let checkForVowels = function (array) {
//     for (let i = 0; i < array.length; i++) {
//         removeVowels(array[i]);
//         //change word to array using split method
//         //invoke helper function with word


//     }

//     return answer.join(" ");
// }
// //return answer joined together as a string

// let removeVowels = function (word) {
//     let newWord = [];
//     for (let i = 0; i < word.length; i++) {
//         if (!vowels.includes(word[i])) {
//             newWord.push(word[i]);
//         }
//         //get the index of the vowel and remove it
//         //answer.push(newWord.join(""));
//         //push to answer
//     }
//     answer.push(newWord.join(""));
//}
// console.log(checkForVowels(array));


//
//Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1.
//Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
//addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5]);
//Input :   values of array1 and array 2
//Output:   [10, 12, 14]

const addingAllTheWeirdStuff = function (array1, array2) {
    //initilize a new empty array called sumArray
    let oddSumArray = [];
    let evenSumArray = [];
    //initilize a sum variable and set it equal to zero
    let oddSum = 0;
    let evenSum = 0;
    //iterate through array2
    for (let i = 0; i < array2.length; i++) {
        //check if the number is odd
        let arr2 = array2[i];
        if (arr2 % 2 !== 0) {
            oddSum += arr2;
            //add it to sum
        } else {
            evenSum += arr2;
        }
    }

    for (let i = 0; i < array1.length; i++) {
        //iterate through array1
        if (array1[i] < 10) {
            //if the element is less than ten add it to the sum
            oddSumArray.push(oddSum + array1[i]);
            //push that number plus sum into the sumArray
        } else if (array1[i] > 10) {
            evenSumArray.push(evenSum + array1[i]);
        }
    }
    return oddSumArray.concat(evenSumArray);
    //return sumArray



}










//BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.


console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5]));
