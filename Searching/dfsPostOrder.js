const dfsPostOrder = (tree) => {
    let visited = [];
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.value);
    }
    traverse(tree.root);
    return visited;
}

module.exports = dfsPostOrder;
