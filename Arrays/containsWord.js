//Write a function containsWord(sentence, targetWord) that accepts two strings as args. The function should return a boolean indicating whether the targetWord is found inside of the sentence.
//Solve this without using String's indexOf() or includes() methods.

const containsWord = (sentence, targetWord) => {
    let array = sentence.split(" ");
    if (!sentence.length){
        return false;
    } else if (array.pop().toLowerCase() === targetWord){
        return true;
    } else {
        let newSentence = array.join(" ");
        return containsWord(newSentence, targetWord);
    }
}





console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false
