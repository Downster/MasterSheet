function isSubtree(root, subTree) {
    if (!root && !subTree) return true
    if (!root || !subTree) return false
    if (isSameTree(root, subTree)) return true
    return isSubtree(root.left, subTree) || isSubtree(root.right, subTree)
}


function isSameTree(node, subTree) {
    if (!node && !subTree) return true
    if (!node || !subTree) return false
    if (node.val !== subTree.val) return false
    return isSameTree(node.left, subTree.left) && isSameTree(node.right && subTree.right)
}
