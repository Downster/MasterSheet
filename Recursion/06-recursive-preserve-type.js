/***********************************************************************
Write a recursive function `recursivePreserveType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept one string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified type. Note that the returned function only filters elements of one type,
as opposed to the last problem which accepted any number of strings.

const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
console.log(preserveFunc2('boolean')); // prints [ true, false ]

Note: the mocha tests do not test that your solution is implemented recursively.
However, for bonus points try to solve it both with recursion and iteration.
*/

//const eliminateType = require("./assessment-for-sprint-03-practice-pt-6-spec-problems-main/problems/01-eliminate-type");

function recursivePreserveType(array) {
    let copy = array.slice();
    let result = [];
    return rec = (...strings) => {
        //declare result
        if (!copy.length) {
            let ans = result.slice();
            result = [];
            copy = array.slice();
            return ans;
        } else {
            let el = copy.shift();
            if (strings.includes(typeof el)) {
                result.push(el);
                return rec(...strings);
            } else {
                return rec(...strings);
            }
        }
    }
}


//took like an hour and 15-30

const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
//console.log(preserveFunc2('number')); // prints [2, 3]
//console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
//console.log(preserveFunc2('boolean')); // prints [ true, false ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = recursivePreserveType;
} catch (e) {
    module.exports = null;
}
