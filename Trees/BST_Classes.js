class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        //create new node
        let newNode = new Node(val);
        //if no root val becomes root
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root
        while (true) {
            //if there is a root compare value to root
            if (newNode.value === currentNode.value) currentNode.count++;
            if (newNode.value > currentNode.value) {
                //check to see if there is a node to the right
                //if there isn't this is its new home
                //if there is, repeat these steps
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right
            } else {
                //check to see if there is a node
                //if there is, repeat these steps
                //if there isn't this is its new home
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
        }
    }

    search(value) {
        //check if there is a root if not we are done searching
        //if there is a root check if the value of the new node is the value we are looking for
        if (!this.root) return false;
        let currentNode = this.root
        while (true) {
            //if there is a root compare value to root
            if (value === currentNode.value) return true;;
            //if the valude is greater than the current value move right
            if (value > currentNode.value) {
                if (!currentNode.right){
                    return false;
                }
                currentNode = currentNode.right
            } else {
                if (!currentNode.left) {
                    return false;
                }
                currentNode = currentNode.left;
            }
        }

    }
}

var tree = new BinarySearchTree();
tree.insert(15);
tree.insert(5);
tree.insert(8);
tree.insert(4);
tree.insert(15);
console.log(tree.search(26));
//console.log(tree);
