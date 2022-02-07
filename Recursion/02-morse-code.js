/***********************************************************************
Write a function `morseCode` that takes an array containing a series
of either 'dot' or 'dash' strings. Your function should `console.log`
each string in order, followed by a pause of 100ms after each `dot`
and 300ms after each `dash`.


Example:

let code = ['dot', 'dash', 'dot'];

morseCode(code);
// print 'dot'
// pause for 100ms
// print 'dash'
// pause for 300ms
// print 'dot'
// pause for 100ms

***********************************************************************/

function morseCode(code) {
  if (!code.length) return;
  let ele = code.shift ();
    if (ele === 'dash') {
      console.log('dash');
      setTimeout(() => {morseCode(code)}, 300)
    }
    if (ele === 'dot') {
      console.log('dot');
      setTimeout(() => {morseCode(code)}, 100)
    }
  }
    let code = ['dot', 'dash', 'dot'];

    console.log(morseCode(code));
    // print 'dot'
    // pause for 100ms
    // print 'dash'
    // pause for 300ms
    // print 'dot'
    // pause for 100ms
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = morseCode;
} catch {
  module.exports = null;
}
