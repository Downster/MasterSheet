console.time("test");
let arr = [3, 5, 6, 2, 5, 1, 10, 2];


const bubbleSort = (array, counter = 0) => {
    if (array.length === counter) return array;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            [array[i - 1], array[i]] = [array[i], array[i - 1]]
        }
    }
    return bubbleSort(array, ++counter)
}


bubbleSort(arr)
console.log(arr);
console.timeEnd('test');
