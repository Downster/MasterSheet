class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize)
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    //if the length is equal to the capacity
    if (this.length === this.capacity) {
      //resize array and then execute
      this.resize()
    }
    this.data[this.length] = val;
    this.length++
  }


  pop() {
    let item = this.data[--this.length]
    this.data[this.length] = undefined;
    return item
  }

  shift() {
    let item = this.data[0]
    this.data[0] = undefined;
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i]
    }
    this.length--;
    return item;
  }

  unshift(val) {
    //if the length is equal to the capacity
    if (this.length === this.capacity) {
      //resize array and then execute
      this.resize()
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity *= 2
    //create new array with the new capacity
    let newArray = new Array(this.capacity);
    //spread old elements into the new array
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.data[i];
    }
    //assign that to this.data
    this.data = newArray;
  }

}

// let dynamicArr = new DynamicArray();

// dynamicArr.push(1);
// dynamicArr.push(2);
// dynamicArr.push(3);





module.exports = DynamicArray;
