class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    static insert(val, currentNode = this.root) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }
        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = new TreeNode(val);
                return;
            } else {
                this.insert(val, currentNode.left);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = new TreeNode(val);
                return;
            } else {
                this.insert(val, currentNode.right);
            }
        }
    }

    static search(val, currentNode = this.root) {
        if (!currentNode) {
            return false;
        } else if (val === currentNode.val) {
            return true;
        } else if (val < currentNode.val) {
            return this.search(val, currentNode.left);
        } else {
            return this.search(val, currentNode.right);
        }
        /* ITERATIVE
            let currentNode = this.root;
            while(currentNode){
                if (val < currentNode.val) {
                    currentNode = currentNode.left;
                } else if (val > currentNode.val){
                    currentNode = currentNode.right
                } else{
                    return false
                }

            }
            return false;
        */
    }

    static preOrderTraversal(currentNode = this.root) {
        if (!currentNode) {
            return;
        }
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
    }

    static inOrderTraversal(currentNode = this.root) {
        if (!currentNode) {
            return;
        }
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
    }

    static postOrderTraversal(currentNode = this.root) {
        if (!currentNode) {
            return;
        }
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        const myQueue = []
        myQueue.push(this.root)
        while (myQueue.length > 0) {
            let node = myQueue.shift();
            console.log(node.val);
            if (node.left) myQueue.push(node.left);
            if (node.right) myQueue.push(node.right);
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal(currentNode = this.root) {

        const stack = []
        stack.push(this.root)
        while (stack.length > 0) {
            let node = stack.pop();
            console.log(node.val);
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }

        // RECURSIVE:
        // if (!currentNode) return
        // console.log(currentNode.val);
        // this.depthFirstTraversal(currentNode.right);
        // this.depthFirstTraversal(currentNode.left);
    }
}

module.exports = { BinarySearchTree, TreeNode };

// Your code here
