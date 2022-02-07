/***********************************************************************
Write a function `leastFrequentLetter(string)` that will take a
string as an argument and return the character that appears the
least often. In case of a tie, return any character with the
lowest count. The string will have at least one character.

Examples:

***********************************************************************/

function leastFrequentLetter(string) {
    let obj = {};
    let array = string.split('');
    array.forEach(function (key) {
      if (obj[key]) {
        obj[key] += 1
      } else {
      obj[key] = 1
      }
    })
    let k = Object.keys(obj)
    let arr = Object.values(obj)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            return k[i]
        }
    }


}

leastFrequentLetter("mississippi") // "m"
leastFrequentLetter("ananab") // "b"
leastFrequentLetter("Cheese") // "C", "h", or "s"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = leastFrequentLetter;
