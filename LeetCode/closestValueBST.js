function findClosestValueInBst(tree, target) {
    //declare a variable closest to store the value of the closest node
    let closest = tree.value;
    //declare a variable difference to store the value of the closest difference
    let difference = Math.abs(tree.value - target);
    //declare a variable to store the node
    let node = tree;

    //while the node does not equal null
    while (node !== null) {
        //calculate the difference between the current node and the target
        let currDiff = Math.abs(node.value - target)
        //if it is smaller than the stored difference
        if (currDiff < difference) {
            //update the difference
            difference = currDiff
            //update the closest node to that value
            closest = node.value
        }
        //check and see if the current node is less than the target
        //if so we go right
        if (node.value < target) {
            node = node.right
            //else
        } else {
            //we go left
            node = node.left
        }
    }
    return closest
}