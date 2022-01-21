const rotate = (arr, num) => {
    if (num === 0) return arr
    if (num > 0){
        arr.unshift(arr.pop());
        return rotate(arr, --num);
    }
}



let arr = ['a', 'b', 'c', 'd', 'e']

console.log(rotate(arr, 2));
