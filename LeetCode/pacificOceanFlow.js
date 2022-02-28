var pacificAtlantic = function (heights) {

};


const findNeighbors = (row, col, matrix) => {
    //create valid neighbors array
    let validNeighbors = [];

    //get left neighbor
    if (col !== 0 && matrix[row][col - 1] <= matrix[row][col]) {
        validNeighbors.push([row, col - 1])
    }

    //get neighbor up and left
    if (col !== 0 && row !== 0 && matrix[row - 1][col - 1] <= matrix[row][col]) {
        validNeighbors.push([row - 1, col - 1])
    }

    //get neighbor up
    if (row !== 0 && matrix[row - 1][col] <= matrix[row][col]) {
        validNeighbors.push([row - 1, col])
    }

    //get neighbor up and right
    if (row !== 0 && col !== matrix[0].length - 1 && matrix[row - 1][col + 1] <= matrix[row][col]) {
        validNeighbors.push([row - 1, col + 1])
    }

    //get neighbor right
    if (col !== matrix[0].length - 1 && matrix[row][col + 1] <= matrix[row][col]) {
        validNeighbors.push([row, col + 1])
    }

    //get neighbor down and right
    if (row !== matrix.length - 1 && col !== matrix[0].length - 1 && matrix[row + 1][col + 1] <= matrix[row][col]) {
        validNeighbors.push([row + 1, col + 1])
    }

    //get neighbor down
    if (row !== matrix.length - 1 && matrix[row + 1][col] <= matrix[row][col]) {
        validNeighbors.push([row + 1, col])

    }

    //get neighbor down and left
    if (row !== matrix.length - 1 && col !== 0 && matrix[row + 1][col - 1] <= matrix[row][col]) {
        validNeighbors.push([row + 1, col - 1])
    }

    return validNeighbors;

}



const island = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]];

console.log(pacificAtlantic(island));



