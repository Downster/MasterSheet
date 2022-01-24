
function getProduct(nums) {
    return nums.reduce((output, el) => {
        output *= el;
        return output;
    }, 1)
}

function highestProduct(numsList) {
    let highest = 0;

    return numsList.reduce((output, el, index) => {
        if (getProduct(el) > highest) {
            highest = getProduct(el);
            output = index;
            return output;
        }
    }, 0)
}

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 7];
const arrayC = [20, 100, 1, 2];
const arrayD = [1, 3, 2, 300];

console.log(highestProduct([arrayA, arrayB, arrayC, arrayD]))
