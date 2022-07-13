var rightSideView = function (root) {
    if (!root) return [];
    const queue = [root];
    const levels = [];
    while (queue.length) {
        const nodes = []
        const length = queue.length
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            nodes.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        levels.push(nodes)
    }
    return levels.map((el) => el[el.length - 1])
};