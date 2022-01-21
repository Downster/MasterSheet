//Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.


const removeLastVowel = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = str.length - 1; i >= 0; i--) {
        if (vowels.includes(str[i])) {
            return str.substring(0, i) + str.substring(i + 1)
        }
    }
    return null;
}


console.log(removeLastVowel('whale')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
