function breadthFirstSearch(start, end) {
    // your code here
    let queue = [];
    let visited = new Set();
    queue.push(start);
    visited.add(start);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        if (currentNode === end) return true;
        adjList[currentNode].forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
            }
        });
    }
    return false;
}
