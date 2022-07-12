function removeIslands(matrix) {
    //declare a set to keep track of nodes we have visited
    const visited = new Set()
    //iterate through the whole matrix
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (!visited.has(`${row},${col}`) && matrix[row][col] === 1) {
                //call DFS on the node if it isn't in visited and equals 1
                dfs(row, col, matrix, visited)
            }
        }
    }
    //return the modified matrix
    return matrix
}

function dfs(row, col, matrix, visited) {
    //declare stack for DFS
    const stack = [[row, col]];
    //declare an array to store visited nodes
    const nodes = []
    //declare max row
    const maxRow = matrix.length - 1
    //declare max column
    const maxColumn = matrix[0].length - 1
    //declare minimum row/col
    const min = 0;
    //declare boolean hits edge
    let hitsEdge = false;

    //while the stack has length
    while (stack.length) {
        const node = stack.pop()
        nodes.push(node)
        visited.add(`${node}`)
        //check and see it if hits an edge
        if (node[0] === maxRow || node[1] === maxColumn || node[0] === min || node[1] === min) {
            hitsEdge = true;
        }
        const neighbors = getNeighbors(node[0], node[1], matrix)
        neighbors.forEach((neighbor) => {
            if (!visited.has(`${neighbor}`)) {
                stack.push(neighbor)
                // visited.add(`${neighbor}`)
            }
        })
    }
    if (!hitsEdge) {
        nodes.forEach((node) => {
            matrix[node[0]][node[1]] = 0
        })
    }
}

//declare helper fucntion get neighbors
function getNeighbors(row, col, matrix) {
    const neighbors = []
    //top
    if (row - 1 >= 0 && matrix[row - 1][col] === 1) {
        neighbors.push([row - 1, col])
    }
    //bottom
    if (row + 1 <= matrix.length - 1 && matrix[row + 1][col] === 1) {
        neighbors.push([row + 1, col])
    }
    //left
    if (col - 1 >= 0 && matrix[row][col - 1] === 1) {
        neighbors.push([row, col - 1])
    }
    //right
    if (col + 1 <= matrix[0].length - 1 && matrix[row][col + 1] === 1) {
        neighbors.push([row, col + 1])
    }
    return neighbors
}