function getNeighbors(row, col, graph) {
  //0   0

  const neighbors = [];
  // Check top
  if (row !== 0) {
    if (graph[row - 1][col] !== 0) {
      neighbors.push([row - 1, col]);
    }
  }
  // Check bottom
  if (row !== graph.length - 1) {
    if (graph[row + 1][col] !== 0) {
      neighbors.push([row + 1, col])
    }
  }
  // Check left
  if (col !== 0) {
    if (graph[row][col - 1] !== 0) {
      neighbors.push([row, col - 1]);
    }
  }

  // Check right
  if (col !== graph[0].length - 1) {
    if (graph[row][col + 1] !== 0) {
      neighbors.push([row, col + 1])
    }
  }
  return neighbors;

}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const coordinates = [row, col]
  const stringified = JSON.stringify(coordinates)
  let visited = new Set().add(stringified);
  // Create a stack, put the starting node in the stack
  let stack = [coordinates];
  let islandSize = 0;

  // Initialize size to 0

  // While the stack is not empty,
  while (stack.length) {
    let node = stack.pop();
    if (graph[node[0]][node[1]] !== 0) islandSize++
    // DO THE THING (increment size by 1)
    let neighbors = getNeighbors(node[0], node[1], graph);


    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    neighbors.forEach(neighbor => {
      if (!visited.has(JSON.stringify(neighbor))) {
        visited.add(JSON.stringify(neighbor));
        stack.push(neighbor);
      }
    })
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }
  return islandSize;

  // Your code here
}

module.exports = [getNeighbors, islandSize];
