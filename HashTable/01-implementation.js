class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
    this.capacity = numBuckets;
  }

  hash(key) {

    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  calculateLoadFactor() {
    let loadFactor = this.count / this.capacity;
    if (loadFactor >= 0.7) this.resize()
  }

  insert(key, value) {
    //console.log(this.data);
    this.calculateLoadFactor();
    let kvp = new KeyValuePair(key, value);
    let index = this.hashMod(key);

    //console.log(index);
    let exists = false;
    let incCount = true;
    if (!this.data[index]) {
      this.data[index] = kvp;
    } else {
      //iterate through the index and see if key exists
      let node = this.data[index];
      while (node) {
        if (node.key === key) {
          exists = true;
          incCount = false;
          break;
        }
        node = node.next;
      }
      if (exists) {
        node.value = value;
      } else {
        kvp.next = this.data[index];
        this.data[index] = kvp;
      }
    }
    incCount && this.count++;
  }

  read(key) {
    let index = this.hashMod(key);
    let node = this.data[index];
    if (node.key !== key) {
      // node = node.next
      while (node) {
        if (node.key === key) {
          return node.value;
        }
        node = node.next;
      }
      return undefined;
    } else {
      return this.data[index].value;
    }
  }

  resize() {
    //declare new variable and set it equal to a new array that is double the size, filled with null values
    const newData = [];
    //reset count
    this.count = 0;
    //insert old data into our new hashmap
    //delcare counter variable
    let index = 0;
    //copy this.data over to newData
    while (index < this.capacity) {
      //check if there is something there
      let node = this.data[index]
      if (node !== null && node.next === null) {
        newData.push(node);
      } else {
        let previousNode = node;
        newData.push(node);
        while (node !== null && node.next) {
          node = node.next;
          previousNode.next = null;
          newData.push(node);
        }

      }
      index++;
    }
    //reassign this.data to a new array of doubled size;
    this.data = new Array(this.capacity * 2).fill(null);
    //for each element of new data
    //assign this.data to our new hashmap
    this.capacity *= 2
    newData.forEach(node => {
      if (node !== null) {
        this.insert(node.key, node.value)
      }
    });
    //console.log(this.data)
    //update capacity
  }

  delete(key) {
    //declare index
    let found = false;
    let index = this.hashMod(key);
    //declare node
    let node = this.data[index];
    if (node.key === undefined) return "Key not found";
    //if the nodes next property is null
    if (node.next === null) {
      node.value = undefined;
      node.key = undefined;
      node = null
      found = true;
      this.count--;
    }
    //set that node equal to null
    else {
      let previousNode = null;
      let nextNode = node.next
      //search for the key while tracking the current and previous node
      while (node.next) {
        previousNode = node;
        console.log(`${previousNode.value} ------>${node.value}------->${nextNode.value}`)
        if (node.key === key) {
          previousNode.next = nextNode;
          node.value = undefined;
          node.key = undefined;
          this.count--;
          found = true;
        }
        node = nextNode;
        nextNode = node.next;

        //when we find the key, set the previous keys next property to current.next
      }
    }
  }
}

module.exports = HashTable;
