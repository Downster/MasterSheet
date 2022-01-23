//Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.

const spiralOrder = (matrix) => {
    //create columns
    let columns = createColumns(matrix);
    //let result = [];
    //let first = true;
    //add first array to output array
    //add last column to output array
    //add last array reversed to outputarray
    //add first column reversed to output array
    //add second row to output array
     let result = [...matrix[0], ...columns[columns.length - 1],
      ...matrix[matrix.length -1].reverse(), ...columns[0].reverse(),
      ...matrix[1]];
    // for (let j = 0; j < 1; j++) {
    //     if (first) {
    //         for (let i = j; i < matrix[0].length; i++) {
    //             result.push(matrix[0][i]);
    //             first = false;
    //             //console.log(result)
    //         }
    //     }

    //     for (let k = j + 1; k < matrix.length; k++) {
    //         result.push(columns[columns.length - 1][k]);
    //         //console.log(result)
    //     }

    //     for (let l = matrix[j].length - 2 - j; l >= 0; l--) {
    //         result.push(matrix[matrix.length - 1 - j][l]);
    //         //console.log(result)
    //     }

    //     for (let f = columns[j].length - 2; f > j; f--) {
    //         result.push(columns[j][f]);
    //         //console.log(result);
    //     }

    //     for (let p = j + 1; p < matrix[j].length - 1 - j; p++) {
    //         result.push(matrix[j + 1][p]);
    //         console.log(result);
    //     }
    // }



    return uniqueArray(result);         //remove duplicate elements and return result
}

const uniqueArray = (array) => {
    return [...new Set(array)];
}


const createColumns = (matrix) => {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}





matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[9, 10, 11, 12],
[9, 10, 11, 12]]

//spiralOrder(matrix); // [1,2,3,4,8,12,12,12,11,10,9, 9, 9, 10, 11, 11, 11, 10]
