/***********************************************************************
Write a recursive function called `productMatch` which takes
an array of numbers and a target product and returns a boolean indicating
whether any pair of distinct numbers matches the product when multiplied
together.

Your function should accept a default argument called which
holds the return value. Each recursive step should reduce the size of the
numbers array after checking to see if pairs of numbers multiply to match the
target product.


// Examples:

productMatch([4, 2, 5, 8], 16);       // true
productMatch([8, 1, 9, 3], 8);        // true
productMatch([3, 4], 12);             // true
productMatch([3, 4, 6, 2, 5], 12);    // true
productMatch([4, 2, 5, 7], 16);       // false
productMatch([8, 4, 9, 3], 8);        // false
productMatch([3], 12);                // false

***********************************************************************/

function productMatch(numbers, product, boolean=false) {
  if (!numbers.length) return boolean;

  for (let i = 1; i < numbers.length; i++){
    if (numbers[0] * numbers [i] === product){
      boolean = true;
    }
  }
  numbers.shift()
  return productMatch(numbers, product, boolean);
  // 1. Check if a number in the array multiplied by any other number in the array equals the product

  // 2. Adjust the boolean value as needed

  // 3. Remove an item from the array

  // 4. Recurse until the `numbers` array is empty (base case)

  // took 10 min
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = productMatch;
} catch {
  module.exports = null;
}
