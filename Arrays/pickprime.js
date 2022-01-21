//declare is prime helper function with num parameter
const isPrime = (num) => {
    if (num < 2) {
        //if its less than two
        return false
    }
    //return false
    for (let i = 2; i < num; i++) {
        //iterate through numbers from 2 up to num
        if (num % i === 0) {
            //return false
            return false
        }
    }
    return true;
    //if that doesnt happen return true
}

const pickPrime = (nums) => {
    let output = [];
    nums.forEach((el) => {
        if (prime(el)) {
            output.push(el);
        }
    })
    return output;
}


//declare function checkPrime with number parameter

console.log(pickPrime([1, 2, 5, 6]));
