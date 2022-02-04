let array = [3, 2, 4, 1]

/****************
 * Function is declared with input array parameter and a last biggest parameter
 *  ---- The last biggest parameter tracks where the last biggest element found was ---
 * For example, after you find 12 in the input array, slice and flip it 12 is now at the back of
 * the array. You then decrement lastbiggest which moves the pointer to the element before the last
 * biggest element. This prevents you from flipping values that are already sorted.
 * Once the pointer reaches the front of the array
 * the array has been sorted
 ***************/

const pancakeSort = (arr, lastBiggest = arr.length) => {
    if (lastBiggest === 0) return arr; //base case -- if the lastBiggest element is the front of the array we are done

    //find the maximum element in the array ignoring the last biggest element
    let max = findMax(arr, lastBiggest);


    /**********************
     *If the maximum element is in the front:
     * 1) slice array up to the end and store to maxSlice
     * 2) slice from the last biggest element to the end and store to rest
     * 3) reverse maxSlice and concat to rest, stor to newArr
     * 4) recursively call pancake sort and decrement lastBiggest
     *
     * Otherwise :
     * 1) slice array from its beginning up to the max (inclusive), store to maxSlice
     * 2) slice array from max + 1, up to lastBiggest number, store to restWithoutEnd
     * 3) store the previously sorted elements to sorted end
     * 4) reverse maxSlice and concat to restWithoutEnd, then reverse that and concat the sorted end to it, store to newArr
     * 5) recursively call pancake sort and decrement lastBiggest
     *
     ********************/

    if (max === 0) {
        let maxSlice = arr.slice(0, lastBiggest)
        let rest = arr.slice(lastBiggest)
        let newArr = maxSlice.reverse().concat(rest);
        console.log("flipped! @ " + max)
        return pancakeSort(newArr, --lastBiggest);
    } else {
        let maxSlice = arr.slice(0, max + 1)
        let restWithoutEnd = arr.slice(max + 1, lastBiggest)
        let sortedEnd = arr.slice(lastBiggest);
        let newArr = maxSlice.reverse().concat(restWithoutEnd).reverse().concat(sortedEnd);
        console.log("flipped! @ " + max + "and 0")
        return pancakeSort(newArr, --lastBiggest);
    }

}


/********
 * Find the biggest element, ignoring the last biggest element that you found
 * Each last biggest element will be at the end of the array, moving inward
 *
 *****************/

const findMax = (arr, lastBiggest) => {
    let max = arr[0]
    let index = 0
    for (let i = 1; i < lastBiggest; i++) {
        if (arr[i] > max) {
            max = arr[i]
            index = i;
        }
    }
    return index;
}

console.log(pancakeSort(array))
