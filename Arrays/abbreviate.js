//Write a function abbreviate(word) that takes in a string arg.
//The function should return a new string where all of its vowels are removed.

const abbreviate = (words) => {
    return words.replaceAll(/[aeiouAEIOU]/ig, "");
}


console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian'));
