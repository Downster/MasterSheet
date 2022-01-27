/***********************************************************************
Write a FAT ARROW function `miahsCats(obj)` that takes an object, containing
extremely important information about Miah's cats as an argument
and returns an integer representing how many keys and values
in the input object containing the string "cute" or "adorable".

****NOTE: You should account for upper and lowercase letters!****
Checkout MDN documentation on how to solve this issue.


Examples:

obj1 = {"Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte"}
miahsCats(obj2) // 2

obj2 = {"CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face"}
miahsCats(obj3) //

obj3 = {"Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny"}
miahsCats(obj1) // 3



***********************************************************************/

let miahsCats = (obj) => {
    return Object.entries(obj).reduce((output, el) => {
        el.forEach((ele) => {
        if (ele.toLowerCase().includes('cute') || ele.toLowerCase().includes('adorable')){
            output++
        }
        })
        return output;
    }, 0);
}


obj1 = { "Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte" }
console.log(miahsCats(obj1)) // 2

obj2 = { "CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face" }
console.log(miahsCats(obj2)) // 2

obj3 = { "Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny" }
console.log(miahsCats(obj3)) // 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = miahsCats;
} catch(e) {
    module.exports = null;
}
