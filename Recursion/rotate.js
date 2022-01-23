// const rotate = (arr, num) => {
//     if (num === 0) return arr
//     if (num > 0){
//         arr.unshift(arr.pop());
//         return rotate(arr, --num);
//     }
// }



// let arr = ['a', 'b', 'c', 'd', 'e']

// console.log(rotate(arr, 2));

const rotate = (array, num) => {
    if (num === 0) return array;
    if (num > 0){
        array.unshift(array.pop());
        return rotate(array, --num)
    } else if (num < 0) {
        array.push(array.shift());
        return rotate(array, ++num);
    }

}




let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 3);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals);
