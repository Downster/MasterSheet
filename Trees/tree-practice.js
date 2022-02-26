const { createUnsupportedError } = require("mocha/lib/errors");
const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  //iterative

  let node = rootNode;
  while (node.left) node = node.left;
  return node.val;

  /*recursive

let node = rootNode;
if (!node.left){
  return node.val
}
return findMinBST(node.left)
*/
}

function findMaxBST(rootNode) {
  let node = rootNode;
  while (node.right) {
    node = node.right;
  }
  return node.val;
}

function findMinBT(rootNode) {
  const stack = [];
  let min = rootNode.val;
  stack.push(rootNode);
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val < min) min = node.val;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return min;

  /* trying recursion
let currentNode = rootNode;
if (!currentNode) return min;
if (currentNode.val < min) min = currentNode.val

if (currentNode.right) findMinBT(currentNode.right, min);
else if (currentNode.left) findMinBT(currentNode.left, min);
*/
}

function findMaxBT(rootNode) {
  //traverse entire tree, storing largest value

  const stack = [];
  let max = rootNode.val;
  stack.push(rootNode);
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val > max) max = node.val;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;
  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);
  return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  // if (!rootNode.left && !rootNode.right) {
  //   return 1
  // }

  // const myStack = [];
  // // let counter = 0;
  // let rightCount = 0;
  // let leftCount = 0;
  // myStack.push(rootNode);
  // while (myQueue.length > 0) {
  //   // let boolean = false;
  //   let node = myQueue.pop();

  //   if (node.left) {
  //     //boolean = true
  //     leftCount++
  //     myQueue.push(node.left);
  //   }
  //   if (node.right) {
  //     //boolean = true
  //     rightCount++
  //     myQueue.push(node.right);
  //   }
  //   //console.log(`LC : ${leftCount} RC: ${rightCount}at Node:${node.val} Left: ${node.left.val} Right ${node.right.val}`)
  // }

  // return leftCount
  //return (rightCount > leftCount) ? rightCount : leftCount;
}

function countNodes(rootNode) {
  let count = 0;
  const traverse = (rootNode) => {
    if (rootNode.left) {
      count++;
      traverse(rootNode.left);
    }
    if (rootNode.right) {
      count++;
      traverse(rootNode.right);
    }
    return count + 1;
  };
  return traverse(rootNode);
}

function balancedTree(rootNode) {
  if (!rootNode) return -1;
  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);
  return leftHeight === rightHeight ? true : false;
}

function getParentNode(rootNode, target) {
  if (rootNode.val === target) return null;
  // if (rootNode.left && rootNode.left.val === target) return rootNode;
  // if (rootNode.right && rootNode.right.val === target) return rootNode;
  // if (rootNode.left) return getParentNode(rootNode.left, target);
  // if (rootNode.right) return getParentNode(rootNode.right, target);
  let queue = [];
  let node = rootNode;

  queue.push(node);
  while (queue.length) {
    node = queue.shift();
    if (node.left) {
      if (node.left.val === target) return node;
      queue.push(node.left);
    }
    if (node.right) {
      if (node.right.val === target) return node;
      queue.push(node.right);
    }
  }
  return undefined;
}

function inOrderPredecessor(rootNode, target) {
  // if (rootNode.val === target) return null;

  let visited = [];
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    visited.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(rootNode);
  if (visited[0] === target) return null;
  return visited[visited.indexOf(target) - 1];
}

/*
    if (!rootNode) {
        return;
    }
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
    */

function deleteNodeBST(rootNode, target) {
  let parent;
  // if target doesn't exist - return undefined
  if (!BinarySearchTree.search(target, rootNode)) return undefined;
  if (rootNode.val === target) {
    parent = rootNode;
  } else {
    parent = getParentNode(rootNode, target);
  }
  let targetNode = rootNode;
  //if no parent and no children - return null
  if (parent === null && !parent.left && !parent.right) return null;

  // assign targetNode to a variable
  if (parent.left && parent.left.val === target) {
    targetNode = parent.left;
  } else if (parent.right && parent.right.val === target) {
    targetNode = parent.right;
  }
  // if target has no children, set appropriate parent pointer to null
  if (!targetNode.left && !targetNode.right) {
    if (parent.left.val === target) parent.left = null;
    else parent.right = null;
  }

  if ((!targetNode.right && targetNode.left) || (!targetNode.left && targetNode.right)) {
    //take the parent and point its next to the child
    if (parent.right === targetNode) {
      //right side of the tree
      if (targetNode.right) {
        parent.right = targetNode.right;
      } else {
        parent.right = targetNode.left;
      }
    } else {
      //left side of the tree
      if (targetNode.right) {
        parent.left = targetNode.right;
      } else {
        parent.left = targetNode.left;
      }
    }
  }
  ///////ABOVE WORKS/////////


  if (targetNode.right && targetNode.left) {
    //replace targetNode's value with in-order predecessor

    let predValue = inOrderPredecessor(rootNode, target);
    //delete in-order predecessor
    //breadth first search for the predecessor
    //find the predecessor
    deleteNodeBST(rootNode, predValue);
    targetNode.val = predValue;
  }
  //     //replace targetNode's value with in-order predecessor
  //     targetNode.val = inOrderPredecessor(rootNode, target)
  //     //delete in-order predecessor

  //     let predecessor;
  //     let predParent = getParentNode(rootNode, targetNode.val)
  //     if (predParent.left.val === targetNode.val) {
  //         predecessor = parent.left;
  //     } else {
  //         predecessor = parent.right;
  //     }
  //     deleteNodeBST(rootNode, predecessor)
  // }




  ///////////////
  //console.log(parent);
  // Do a traversal to find the node. Keep track of the parent

  // if (rootNode)
  //if (parent.left && parent.right) {
  //let node = inOrderPredecessor(parent, target);
  //console.log(node);
  //}
  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:

  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null
  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
