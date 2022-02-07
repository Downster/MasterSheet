/***********************************************************************

Write a function `getAverage` using fat arrow syntax that takes in an arbitrary
number of arguments, adds them up and returns a string containing the
average amount with a dollar sign in front.

Hint: Look up `toFixed()` on MDN.

Examples:

getAverage(30, 70); // '$50.00'
getAverage(1.12, 2.23, 3.34, 4.45); // '$2.79'
getAverage(4.99, 9.99, 19.99); // '$11.66'
***********************************************************************/
const getAverage = (...args) => {
  let sum = 0;
  args.forEach(num => sum += num)

  return '$' + (sum / args.length).toFixed(2)
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = getAverage;
} catch {
  module.exports = null;
}
