//Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order.
// A lucky number is the minimum element in its row and the maximum in its column.


//declare function luckyNumbers which takes in a matrix
const luckyNumbers = (matrix) => {
    let ans = [];
    let columns = column(matrix);
    matrix.forEach((el)=> {
        let min = Math.min(...el);
        columns.forEach((columnEl) => {
            let max = Math.max(...columnEl);
            if (max === min) {
                ans.push(max);
            }
        })
    })
    return ans;

}

//create columns

const column = (matrix) => {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));

}



//reduce to the minimum in each row and save to array
// const minRow = (matrix) => {
//     return matrix.reduce((output, el) => {
//         output.push(Math.min(...el));
//         return output;
//     }, [])
// }





matrix = [[5, 9, 21],
        [9, 19, 6],
        [12, 14, 15]]


console.log(luckyNumbers(matrix)); // [12]

matrix = [[5, 10, 8, 6],
        [10, 2, 7, 9],
        [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
