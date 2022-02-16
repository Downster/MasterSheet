// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let previousNode = this.tail;
            previousNode.next = newNode
            this.tail = newNode;
            this.tail.prev = previousNode;
            this.tail.next = null;
        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        let nextNode = currentNode.next;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return currentNode.value;
        }
        this.length--;
        nextNode.prev = null;
        this.head = nextNode;
        return currentNode.value;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if (!this.tail) return undefined;
        let currentNode = this.tail;
        let previousNode = currentNode.prev;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            previousNode.next = null;
            this.tail = previousNode;
        }
        this.length--;
        return currentNode.value

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        if (!this.tail) return undefined;
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
