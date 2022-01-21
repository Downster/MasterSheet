//Write a function longestWord(sentence) that takes in a sentence string as an argument.
//The function should return the longest word in the sentence.

const longestWord = (sentence) => {
    let array = sentence.split(" ");
    return array.reduce((output, el) => {
        if(output.length < el.length){
            output = el;
        }
        return output;
    }, "")
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord(''));
