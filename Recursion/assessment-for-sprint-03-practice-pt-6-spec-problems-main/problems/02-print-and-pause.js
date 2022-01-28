/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

Run tests on just this file by typing `npm test test/02-print-and-pause-spec.js`
on the command line.

***********************************************************************/

function printAndPause(nums) {
  if (!nums.length){
    return;
  }else {
    let ele = nums.shift();
    console.log(ele);
    setTimeout(printAndPause, ele, nums);
  }
}

printAndPause([2000, 8000, 2000, 8000, 2000, 8000])

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
