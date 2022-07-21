//declare a function named make change with two parameters, the first being a number- the amount we are trying to make
//the second being an array of possible values

function makeChange(amt, coins) {
    //declare count variable to track how many coins we have used
    let count = 0;
    let values = [];

    //if the amount is zero, return NaN
    if (amt === 0) return NaN
    if (!coins.length) return NaN
    //sort the coins
    coins.sort((a, b) => b - a)

    //while true
    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            let startingCoin = coins[i]
        }
    }
    return values

}


coins = [3, 4, 5]
amt = 5
console.log(makeChange(14, [10, 7, 1]))