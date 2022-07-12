function hasSingleCycle(array) {
    //declare a count variable to track how many iterations we have gone through
    let count = 0;
    //declare a index variable to track where we are at in the array
    let idx = 0;
    //while the count is less than the array length
    while (count < array.length) {
        //if the count is greater than 0 and the index is zero a cycle occured too soon
        //return false
        if (count > 0 && idx === 0) return false
        //otherwise increment count
        count++
        //find the new index
        idx = findIndex(idx, array[idx], array.length)
    }
    //if we iterate through and the index equals zero there is a proper cycle
    return idx === 0
}

function findIndex(currentIdx, element, length) {
    //declare the value to add to the index
    let value = element
    //calculate the next index
    let nextIdx = (currentIdx + value) % length
    //if the next index is greater than or equal to zero  return next index, otherwise add next index to length
    return nextIdx >= 0 ? nextIdx : nextIdx + length
    //if the value is less than zero

}