/***********************************************************************
Write a function `applesAndOranges(obj)` that takes an object as
an argument and returns an integer representing how many keys and values
in the input object contain the string "apple" or "orange".

For example, `{"fruit": "pineapple", "orange": "juice"}` has two strings
containing "apple" or "orange".

Examples:


***********************************************************************/

function applesAndOranges(obj) {
    let count = 0;
    let k = Object.keys(obj)
    let v = Object.values(obj)
    k.forEach(key => {
        if(key === "apple" || key === 'orange') count++
    })
    v.forEach(value => {
        if(value === "apple" || value === 'orange') count++
    })
    return count
}


obj1 = {"banana": "fruit", "apple": "fruit", "carrot": "vegetable", "cherry": "fruit"}
applesAndOranges(obj1) // 1

obj2 = {"alex": "orange", "erin": "pineapple", "cody": "mango", "daniel": "apple"}
console.log(applesAndOranges(obj2) )// 3

obj3 = {"orange-juice": "orange", "apple-sauce": "apple", "snapple": "peach-tea"}
console.log(applesAndOranges(obj3)) // 5

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = applesAndOranges;
