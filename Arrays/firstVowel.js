//Write a function firstVowel(str) that takes in a string and returns the first vowel that appears sequentially in the string.
//If the string does not contain a vowel, return null.


const firstVowel = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            return str[i];
        }
    }
    return null;
}

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null
