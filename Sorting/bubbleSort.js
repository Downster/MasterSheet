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

function bubbleSort(arr) {
    let hasSwapped = true;
    while (hasSwapped) {
        hasSwapped = false;
        // Iterate through the array
        for (let i = 0; i < arr.length - 1; i++) {
            // If the current value is greater than its neighbor to the right
            if (arr[i] > arr[i + 1]) {
                // Swap those values
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                hasSwapped = true;
                // Do not move this console.log
                console.log(arr.join(","));
            }
        }
        // If you get to the end of the array and no swaps have occurred, return
        if (!hasSwapped) return arr;
    }

    // Otherwise, repeat from the beginning
    return arr;
}


bubbleSort(arr)
console.log(arr);
console.timeEnd('test');
