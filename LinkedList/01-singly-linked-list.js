// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let node = new SinglyLinkedNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        return oldHead;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if (this.length === 0) return undefined;
        let previousNode = this.head;
        let currentNode = previousNode.next;
        if (this.length === 1){
            this.head = null;
            this.length--;
            return previousNode;
        }
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = previousNode.next;
        }
        let value = currentNode;
        previousNode.next = null;
        this.length--;
        return value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        if (!this.head) return;
        let currentNode = this.head;
        console.log(this.head.value);
        while (currentNode.next){
            currentNode = currentNode.next;
            console.log(currentNode.value);
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
