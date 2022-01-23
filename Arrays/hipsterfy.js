//Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.

function hipsterfy(sentence) {
    const regex = /[aeiou](?!.*[aeiou])/g
    let split = sentence.split(" ")
    let result = split.reduce((output, currentEl) => {
        output.push(currentEl.replace(regex, ""))
        return output
    }, [])
    return result.join(" ");
}



console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals'));
