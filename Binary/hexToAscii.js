const hexToASCII = (input) => {
    let output = '';
    let accum = ''
    for (let char of input) {
        if (accum.length < 3) {
            accum += char;
        }
        if (accum.length === 2) {
            console.log(accum);
            output += String.fromCharCode(parseInt(accum, 16));
            accum = ''
        }
    }
    return output;
}

// took like 10 min

const arrHexToASCII = (input) => {
    let output = '';
    let accum = ''
    let inputToString = input.join("20")
    for (let char of inputToString) {
        if (accum.length < 3) {
            accum += char;
        }
        if (accum.length === 2) {
            console.log(accum);
            output += String.fromCharCode(parseInt(accum, 16));
            accum = ''
        }
    }
    return output;
}

//took like 5 min


console.log(hexToASCII("736F667477617265"));   //software
console.log(arrHexToASCII(['61707061636164656d79', '70726f626c656d', '736f6c76696e67']))
