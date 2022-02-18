const dfsPreOrder = (tree) => {
    let visited = [];
    const traverse = (node) => {
        visited.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(tree.root);
    return visited;
}

module.exports = dfsPreOrder;
