//Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet. 
//Assume lowercase and no punctuation.Preserve spaces.


const ceasarCipher = (msg, amt) => {
    //declare a variable to track the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //decalre a varible named result
    let result = '';
    //if amt is equal to 0, we will return the original message
    if (amt === 0) {
        return msg
    }
    //iterate over the message
    for (let i = 0; i < msg.length; i++) {
        //declare variable character set to current character
        const char = msg[i]
        //if the character in message is a space, just insert it into result
        if (char === ' ') {
            result += char
            continue;
        }
        //determine the position of the new letter
        //find the index of the current letter in the alphabet variable
        let idx = alphabet.indexOf(char)
        //calculate the new letter position by adding the amt to the index of that letter and % 26
        let newLetter = alphabet[((idx + amt) % 26)]
        //insert the new letter into result
        result += newLetter
    }
    //return result
    return result
}

console.log(5 / 2)







