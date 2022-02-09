

function binarySearch(arr, target) {
    let high = arr.length - 1;
    let low = 0;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        let current = arr[mid]
        if (current > target) {
            high = mid - 1
        } else if (current < target) {
            low = mid + 1
            //console.log(low)
        } else {
            return mid;
            //console.log(high)
        }
    }
return -1;
}

console.log(binarySearch([5], 5));
