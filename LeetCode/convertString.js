const convert = function (s, numRows) {
    let splitString = s.split(""),
        array = Array.from(Array(numRows), () => [])
    backwards = false,
        count = 0;


    if (numRows === 1) {
        array[count].push(splitString.join(""))
    } else {
        splitString.forEach((el) => {
            array[count].push(el)
            if (count === numRows - 1) {
                backwards = true;
                count = numRows - 2
            } else if (count === 0 && backwards) {
                count++
                backwards = false;
            } else {
                (backwards) ? count-- : count++

            }
        })
    }
    return array.reduce((output, el) => output += el.join(""), '')
};
