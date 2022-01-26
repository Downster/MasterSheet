//Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order.
// A lucky number is the minimum element in its row and the maximum in its column.


//declare function luckyNumbers which takes in a matrix
const luckyNumbers = (matrix) => {
    let ans = [];       //declare empty answer array
    let columns = column(matrix); //create columns out of the matrix
    matrix.forEach((el)=> {     //for every element in the matrix
        let min = Math.min(...el);      //find the minimum of the row and set to minimum
        columns.forEach((columnEl) => {     //for every column in the matrix
            let max = Math.max(...columnEl);        //find the maximum of the column and set it equal to max
            if (max === min) {      // if the max equals the min, it is a lucky number
                ans.push(max);      //push the maximum to answer
            }
        })
    })
    return ans;     //return the answer

}


//create columns to be compared
const column = (matrix) => {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));

}







matrix = [[5, 9, 21],
        [9, 19, 6],
        [12, 14, 15]]


console.log(luckyNumbers(matrix)); // [12]

matrix = [[5, 10, 8, 6],
        [10, 2, 7, 9],
        [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
