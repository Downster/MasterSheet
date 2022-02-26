function printDepthFirst(start) {
    // your code here
    let stack = [];
    let visited = new Set();

    stack.push(start);
    visited.add(start);

    while (stack.length > 0) {
        let currentNode = stack.pop();
        console.log("current:", currentNode);
        adjList[currentNode].forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
                visited.add(neighbor);
            }
        });
    }
}
