//Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters.
//The function should print out numbers between min and max at step intervals.
//See the following examples.

const logBetweenStepper = (min, max, step) => {
    for (min; min <= max; min = min + step){
        console.log(min);
    }
}



logBetweenStepper(5, 9, 1);
logBetweenStepper(-10, 15, 5)
