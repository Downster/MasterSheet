//Write a function factorsOf(num) that takes in a number as an arg.
//The method should return an array containing all positive numbers that are able to divide into num with no remainder.


const factorsOf = (num) => {
    let array = [num]
    return array.reduce((output, currentEl) => {
        for (let i = 1; i <= currentEl; i++){
            if (currentEl % i === 0){
                output.push(i);
            }
        }
        return output;
    }, [])
}

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]
