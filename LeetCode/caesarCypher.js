function caesarCipherEncryptor(string, key) {
    //declare output variable
    let result = ""
    //make variable alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //iterate through the input string
    for (let i = 0; i < string.length; i++) {
        //find its position in the alphabet
        let index = ((alphabet.indexOf(string[i]) + key) % 26)
        //add the key to it
        //if the position plus the key is greater than 26, make sure we wrap
        //add that character to result
        result += alphabet[index]
    }
    return result

}
