/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/


function hasThreeVowels(string) {
    let vowelArray = ['a', 'e', 'i', 'o', 'u']
    let vowels = vowelArray.reduce((output, currentEl) => {
        if (string.includes(currentEl)) {
            output.push(currentEl)
        }
        return output
    }, [])
    return vowels.length >= 3
}

console.log(hasThreeVowels('delicious'))
console.log(hasThreeVowels('bootcamp prep'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
