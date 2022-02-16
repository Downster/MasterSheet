let array = [2, 1, 5, 4, 3];

const insertionSort = (array) => {
    //declare a sorted array to insert values to
    let sorted = [];
    while (array.length) {
        //remove first value in array
        let element = array.shift();
        //insert into sorted if there is no length
        if (!sorted.length) {
            sorted.push(element);

        } else if (sorted.length === 1) {
        //if the length is one, comapre the next element to the element at index 0
            //insert accordingly
            if (element > sorted[0]) {
                sorted.push(element)
            } else {
                sorted.unshift(element)
            }

        } else if (sorted.length > 1) {
            //if the length is greater than one
            if (element < sorted[0]) {
                //compare to the beginning
                sorted.unshift(element);
                //if less than the beginning, put at the beginning
            } else if (element > sorted.at(-1)) {
                sorted.push(element);
            } else {
                //iterate through the sorted array
                for (let i = 1; i < sorted.length; i++) {
                    //compare each element until the element is less than the one in front and greater than the one behind it
                    if (element < sorted[i] && element > sorted[i - 1]) {
                        //insert it there
                        let copy = sorted.splice(i)
                        sorted.push(element);
                        sorted.push(...copy);
                        break;
                    }
                }
            }
        }
    }
    return sorted;

}

console.log(insertionSort(array));
