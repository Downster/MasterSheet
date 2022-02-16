const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
           this.tail.next = newNode;
           this.tail = newNode;
        }
        return ++this.length;

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        let toDequeue = this.head;
        if (!this.head) return null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = toDequeue.next;
        }
        this.length--;
        return toDequeue.value;

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
