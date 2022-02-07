let array = [-1, 0, 3, 5, 9, 12, 13]

const binarySearch = (array, target, first = true, mid) => {
    if (array.length - 1 >= 1 && first) {
        let mid = (array.length - 1) / 2 | 0
        first = false;
    }
    if (array[mid] === target) return mid;
    if (array[mid] < target) {
        console.log(mid);
        return binarySearch(array, target, first, ++mid)
    } else if (array[mid] > target) {
        return binarySearch(array, target, first, --mid)
    }
}


console.log(binarySearch(array, 12))
