/*******************************************************************************

You work at a grocery store, and items over $10 are getting a 20% discount.
Write a function that takes in an array of grocery items and returns an array
of grocery items that qualify for the sale. Include their new sale price.

Example:


*******************************************************************************/
// Your code here
function applySale(items) {
    result = []
    for(let i = 0; i < items.length; i++) {
        let item = items[i]
        if (item.price > 10){
             item.price = item.price * 0.8
            result.push(item)
            }
    }
    return result
}

groceryItems = [
    {name: "eggs", price: 6},
    {name: "bread", price: 5},
    {name: "milk", price: 4},
    {name: "walnuts", price: 15}
    ];
console.log(applySale(groceryItems)); // [ {name: "walnuts", price: 12} ]
/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
module.exports = applySale;
