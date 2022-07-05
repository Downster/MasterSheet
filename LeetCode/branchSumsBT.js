function branchSums(root, result = [], sum = 0) {
    //add the current node value to sum
    sum += root.value
    //if the node has a left node, go down
    if (root.left) {
        branchSums(root.left, result, sum)
    }
    //if the node has a right node, go down
    if (root.right) {
        branchSums(root.right, result, sum)
    }
    //if the node is a leaf, push it to the result array
    if (!root.left && !root.right) {
        result.push(sum)
        sum = 0
    }
    //once we have gone through all the options return result
    return result
}