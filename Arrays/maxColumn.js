//Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column.
//The array length should be equal to the number of columns, such that returnArrayi is equal to the max value in the ith column.


const maxColumn = (matrix) => {
    let columns = matrix[0].map((col, i) => matrix.map(row => row[i]));
    return columns.reduce((output, el) => {
        output.push(Math.max(...el));
        return output;
    }, [])
}









matrix = [[5, 9, 21],
[9, 19, 6],
[12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]
