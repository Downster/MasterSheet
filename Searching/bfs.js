const BFS = (tree) => {
    let queue = [];
    let result = [];
    let node = tree.root;

    queue.push(node);
    while (queue.length){
        node = queue.shift()
        result.push(node.value);
        if (node.left){
            queue.push(node.left);
        }
        if (node.right){
            queue.push(node.right);
        }
    }
    return result;
}

module.exports = BFS;
