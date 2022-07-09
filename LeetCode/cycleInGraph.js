function cycleInGraph(edges) {
    //for all of the edges check and see if there is a cycle
    for (let i = 0; i < edges.length; i++) {
        //to determine if there is a cycle, do a DFS on the current node
        const hasCycle = dfs(edges, i)
        //if our DFS returns true
        if (hasCycle) {
            //return true
            return hasCycle;
        }
    }
    //if we make it through all of the edges without returning true
    //there is no cycle, return false
    return false
}



function dfs(edges, target) {
    //DFS uses a stack
    let stack = [target]
    //declare a visited set to check if the nodes have been visited
    let visited = new Set()
    //while the stack has length
    while (stack.length) {
        //take the last element of the stack
        const currNode = stack.pop()
        //if the current nodes edgees include our target node
        //stop here and return true, that is a cycle
        if (edges[currNode].includes(target)) {
            return true
        }
        //add the current node to visited
        visited.add(currNode)
        //for each edge of the current node check and see if it exists in the set
        edges[currNode].forEach((el) => {
            if (!visited.has(el)) {
                //if it hasn't been visited add it to the stack, otherwise do nothing, we don't want to repeat
                stack.push(el)
            }
        })
    }
    return false
}
