//Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string.
//Note that the string may contain capitalization.


const lastVowel = (str) => {
    let vowels = ['a', 'e', 'i', 'o','u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = str.length -1; i >= 0 ; i--){
        if (vowels.includes(str[i])){
            return str[i];
        }
    }
    return null;
}


console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
