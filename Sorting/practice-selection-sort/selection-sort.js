

function selectionSort(arr) {

  // Copy the original array
  let copy = arr.slice();
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while (copy.length){
    // Do not move this console.log
    console.log(sorted.join(","));
    // Find the index of the minimum value in the unsorted half
    let min = Math.min(...copy);
    // Save and remove the value at the min index
    copy.splice(copy.indexOf(min), 1);
    // Add the min value to the end of the sorted array
    sorted.push(min);
  }
  return sorted;

}



function selectionSortInPlace(arr) {

  // Repeat while the unsorted half is not empty:
  for (let i = 0; i < arr.length; i++){
    // Do not move this console.log
    console.log(arr.join(","));
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest]
    arr[lowest] = temp;
  }
  return arr;

}


module.exports = [selectionSort, selectionSortInPlace];
