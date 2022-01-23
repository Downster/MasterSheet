//  Write a function `deezNutz` that takes an array containing a series
// of either 'deez' or 'nutz' strings.Your function should `console.log`
// each string in order, followed by a pause of 200ms after each`deez`
// and 600ms after each`nuts`.


const deezNuts = (array) => {
    if (!array.length) {
        return;
    } else {
        let word = array.shift();
        if (word === 'deez') {
            console.log(word);
            setTimeout(deezNuts, 2000, array)
        } else {
            console.log(word);
            setInterval(deezNuts, 6000, array);
        }
    }
}


let code = ['deez', 'nutz', 'deez'];

deezNuts(code);
// print 'deez'
// pause for 200ms
// print 'nutz'
// pause for 600ms
// print 'deez'
// pause for 200ms

//***********************************************************************
