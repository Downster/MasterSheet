// HINT:  Review counting islands before starting this problem!

function findNeighbors(node, matrix) {
    let row = node[0];
    let col = node[1];

    const neighbors = [];
    // Check top
    if (row !== 0) {
        if (matrix[row - 1][col] < -5) {
            neighbors.push([row - 1, col]);
        }
    }
    // Check bottom
    if (row !== matrix.length - 1) {
        if (matrix[row + 1][col] < -5) {
            neighbors.push([row + 1, col])
        }
    }
    // Check left
    if (col !== 0) {
        if (matrix[row][col - 1] < -5) {
            neighbors.push([row, col - 1]);
        }
    }

    // Check right
    if (col !== matrix[0].length - 1) {
        if (matrix[row][col + 1] < -5) {
            neighbors.push([row, col + 1])
        }
    }
    return neighbors;
}

function trenchTraversal(node, matrix, visited) {
    // Don't bother traversing if it is to shallow
    let startNodeVal = matrix[node[0]][node[1]];
    if (startNodeVal === -5) return false;
    //Get nodes initial neighbors to check if it is a valid trench
    //if the next node is not in the same row, it is not a valid trench
    const initialNeighbors = findNeighbors(node, matrix);
    if (initialNeighbors[0][0] !== node[0]) return false;
    // if the start node value is less than 5
    if (startNodeVal < -5) {
        const stringified = JSON.stringify(node);
        visited.add(stringified);
        let stack = [node];
        //track moves up and moves down
        let movesUp = 0;
        let movesDown = 0;

        while (stack.length) {
            stackNode = stack.pop()
            //if the row decreases increment movesUp
            if (stackNode[0] < node[0]) movesUp++;
            //if the row increases increment movesDown
            if (stackNode[0] > node[0]) movesDown++
            let neighbors = findNeighbors(stackNode, matrix);


            //otherwise continue DFS
            neighbors.forEach(neighbor => {

                if (!visited.has(JSON.stringify(neighbor))) {
                    visited.add(JSON.stringify(neighbor));
                    stack.push(neighbor)
                }
            })

        }
        //if movesUp doesn't equal zero and moves down equals zero
        //or the opposite is true, it is a valid trench
        //otherwise it is not
        if (movesUp !== 0 && movesDown === 0) return true;
        if (movesDown !== 0 && movesUp === 0) return true;
        return false;
    }

}

function identifyTrench(trenchMatrix, start = [0, 0]) {
    const colLength = trenchMatrix[0].length - 1;
    const rowLength = trenchMatrix.length - 1;
    if (start[0] === colLength && start[1] === rowLength) return false;
    let value = trenchMatrix[start[0]][start[1]];
    let isTrench = false;

    while (value === -5 || value > -5) {
        //if the current column exceeds the length
        //increment the row and reset the column to zero
        if (start[1] === colLength) {
            start[0] += 1;
            start[1] = 0;
            value = trenchMatrix[start[0]][start[1]];
        }
        if (start[0] === rowLength) {
            return false;
        } else {
            start[1] += 1
            value = trenchMatrix[start[0]][start[1]]
        }
    }
    //check if the found value is a trench
    isTrench = trenchTraversal(start, trenchMatrix, new Set());
    //move forward one value
    start[1] += 1
    //if isTrench is truthy, return it, else recusively call identifyTrench
    return(isTrench) ? isTrench : identifyTrench(trenchMatrix, start);

}

// Uncomment for local testing

// // Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]

// console.log(findNeighbors([1,1], sonar_0)) => Expect [[2, 1], [1, 0], [1, 2]];

// // Example 1
// const sonar_1 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-8,-8,-9,-7],
//           [-5,-5,-5,-5,-8],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// // Example 2
// const sonar_2 = [
//           [-5,-5,-5,-7,-5],
//           [-5,-8,-8,-9,-5],
//           [-5,-5,-5,-7,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // Example 3
// const sonar_3 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-5,-5,-5,-5],
//           [-5,-9,-9,-5,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_3)) // <- Expect 'false'


/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyTrench, findNeighbors, trenchTraversal];
