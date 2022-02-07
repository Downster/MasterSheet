/***********************************************************************
Write a function called `createAddress(street)`. The createAddress function will
return a new function. This new function will allow us to specify the rest of the address.

Look below to see how this function is invoked:


***********************************************************************/

function createAddress(street) {
let arr = [street];
return function (address) {
  arr.push(address)
  return arr.join(' ')
}

}


const address1 = createAddress("123 Main St");       // returns a function
console.log(address1("Los Angeles, CA 90001"));                   // "123 Main St Los Angeles, CA 90001"

const address2 = createAddress("2 Grimmauld Place"); // returns a function
address2("LONDON, SW1A 2AA");                        // "2 Grimmauld Place LONDON, SW1A 2AA"

const address3 = createAddress("42 Wallaby Way");    // returns a function
address3("Blaxland NSW 2774");                       // "42 Wallaby Way Blaxland NSW 2774"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = createAddress;
