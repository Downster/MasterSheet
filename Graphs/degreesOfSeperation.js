function degreesOfSeparation(start, end) {
    const queue = [[start]];
    const visited = {};
    let currentVertex;
    let currentPath;
    visited[start] = true;

    while (queue.length) {
        currentPath = queue.shift();
        currentVertex = currentPath[currentPath.length - 1]

        if (currentVertex === end) {
            return currentPath.length - 1
        }

        adjList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                let copy = currentPath.slice();
                copy.push(neighbor)
                queue.push(copy);
            }
        });
    }
    return false;
}


