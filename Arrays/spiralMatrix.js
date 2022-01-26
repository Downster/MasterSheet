//Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.

// const spiralOrder = (matrix) => {
//     //create column
//     let result;


//     if (matrix.length === 3) {
//         return uniqueArray(createFullSpiral(matrix));
//     }
//     else if (matrix.length === 4) {
//         return uniqueArray(createSpiralPlus2(matrix));
//     } else {
//         return uniqueArray(createSpiralPlus3(matrix));
//     }


// }

// const createFullSpiral = (matrix,) => {
//     let columns = createColumns(matrix);
//     return [...matrix[0], ...columns[columns.length - 1],
//     ...matrix[matrix.length - 1].reverse(), ...columns[0].reverse(),
//     ...matrix[1]];
// }

// const createSpiralPlus2 = (matrix) => {
//     let columns = createColumns(matrix);
//     return [...matrix[0], ...columns[columns.length - 1],
//     ...matrix[matrix.length - 1].reverse(), ...columns[0].reverse(),
//     ...matrix[1], ...columns[columns.length - 2], ...matrix[matrix.length - 2].reverse()];

// }

// const createSpiralPlus3 = (matrix) => {
//     let columns = createColumns(matrix);
//     return [...matrix[0], ...columns[columns.length - 1],
//     ...matrix[matrix.length - 1].reverse(), ...columns[0].reverse(),
//     ...matrix[1], ...columns[columns.length - 2], ...matrix[matrix.length - 2].reverse(), ...columns[1].reverse()];
// }

// const createSpiralPlus4 = (matrix) => {
//     let columns = createColumns(matrix);
//     return [...matrix[0], ...columns[columns.length - 1],
//     ...matrix[matrix.length - 1].reverse(), ...columns[0].reverse(),
//     ...matrix[1], ...columns[columns.length - 2], ...matrix[matrix.length - 2].reverse(), ...columns[1].reverse(), ...matrix];
// }

// const uniqueArray = (array) => {
//     return [...new Set(array)];
// }


// const createColumns = (matrix) => {
//     return matrix[0].map((col, i) => matrix.map(row => row[i]));
// }


const spiralOrder = (matrix) => {
    let top = 0,
        down = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1,
        dir = 0,
        result = [];

    //dir = 0 is right, 1 is down, 2 is left. 3 is up
    while (top <= down && left <= right) {
        if (dir === 0) {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            dir++;
            top++;
        } else if (dir === 1) {
            for (let i = top; i <= down; i++) {
                result.push(matrix[i][right]);
            }
            dir++
            right--;
        } else if (dir === 2) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[down][i]);
            }
            dir++;
            down--;
        } else if (dir === 3) {
            for (let i = down; i >= top; i--) {
                console.log(matrix[i][left]);
                result.push(matrix[i][left])
            }
            dir = (dir + 1) % 4
            left++;
        }
    }
    return result;
}




// matrix = [[1, 2, 3, ],
// [4, 5, 6],
// [7, 8, 9]]

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4, 21],
[5, 6, 7, 8, 22],
[9, 10, 11, 12, 23],
[13, 14, 15, 16, 24],
[17, 18, 19, 20, 25]
];

console.log(spiralOrder(matrix)) // [1,2,3,4,8,12,16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10]
