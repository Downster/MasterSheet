//Write a function removeEWords(sentence) that accepts a sentence string as an arg.
//The function should return a new string, containing only the words that don't have the letter "e" in them.

const removeEWords = (sentence) => {
    let array = sentence.split(" ");
    return array.filter((el) => !(el[0] === 'e' || el[0] === 'E')).join(" ");
}


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
