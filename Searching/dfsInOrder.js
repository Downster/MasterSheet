const dfsInOrder = (tree) => {
    let visited = [];
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        visited.push(node.value);
        if (node.right) traverse(node.right);
    }
    traverse(tree.root);
    return visited;
}

module.exports = dfsInOrder;
