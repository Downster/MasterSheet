//Write a function reverseString(str) that takes in a string.
//The function should return a new string where the order of the characters is reversed.

const reverseString = (string) => {
    return string.split("").reverse().join("");
}



console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
