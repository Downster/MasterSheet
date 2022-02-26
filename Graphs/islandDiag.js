function getNeighbors(row, col, matrix) {


    const neighbors = [];
    // Check top
    if (row !== 0) {
        if (matrix[row - 1][col] === 1) {
            neighbors.push([row - 1, col]);
        }
    }
    // Check top right
    if (row !== 0 && col < matrix[0].length - 1) {
        if (matrix[row - 1][col + 1] === 1) {
            neighbors.push([row - 1, col + 1]);
        }
    }

    // Check right
    if (col !== matrix[0].length - 1) {
        if (matrix[row][col + 1] === 1) {
            neighbors.push([row, col + 1])
        }
    }

    // Check bottom right
    if (row < matrix.length - 1 && matrix[0].length - 1) {
        if (matrix[row + 1][col + 1] === 1) {
            neighbors.push([row + 1, col + 1]);
        }
    }


    // Check bottom
    if (row !== matrix.length - 1) {
        if (matrix[row + 1][col] === 1) {
            neighbors.push([row + 1, col])
        }
    }

    // Check bottom left
    if (row < matrix.length - 1 && col !== 0) {
        if (matrix[row + 1][col - 1] === 1) {
            neighbors.push([row + 1, col - 1])
        }
    }


    // Check left
    if (col !== 0) {
        if (matrix[row][col - 1] === 1) {
            neighbors.push([row, col - 1]);
        }
    }
    // Check top left
    if (row !== 0 && col !== 0) {
        if (matrix[row - 1][col - 1] === 1) {
            neighbors.push([row - 1, col - 1])
        }
    }

    return neighbors;
}

function countIslands(matrix) {
    // Create a visited set to store visited nodes

    let visited = new Set();
    // Initialize count to 0
    let count = 0;
    let stack = [];
    let colLength = matrix[0].length - 1;
    let rowLength = matrix.length - 1;
    // Iterate through all indices in matrix
    for (let row = 0; row <= rowLength; row++) {
        for (let col = 0; col <= colLength; col++) {
            let node = [row, col];
            let nodeStr = JSON.stringify(node);

    // If an index contains a 1 and has not been visited,
            if (matrix[row][col] === 1 && !visited.has(nodeStr)) {
                // increment island count and start traversing neighbors
                // DO THE THING (increment island count by 1)
                // Add stringified version of current index to the visited set
                count++;
                visited.add(nodeStr);
                // Initialize a stack with current index
                stack.push(node);
                // While stack contains elements
                while(stack.length) {
                    // Pop element from stack
                    let el = stack.pop();
                    // Get valid neighbors of current element
                    let neighbors = getNeighbors(el[0], el[1], matrix);
                    // Iterate over neigbors
                    for (let neighbor of neighbors) {
                        let neighborStr = JSON.stringify(neighbor)
                        // If neighbor has not been visited
                        if(!visited.has(neighborStr)) {
                            // Add neighbor to stack
                            stack.push(neighbor);
                            // Mark neighbor as visited
                            visited.add(neighborStr)
                        }
                    }

                }
            }

        }
    }
    // Return island count
    return count;
}




// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
