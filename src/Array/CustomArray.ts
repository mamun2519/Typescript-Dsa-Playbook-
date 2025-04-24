const DEFAULT_CAPACITY = 10;

export class CustomArray {
  constructor(capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.length = 0;
    this.array = new Array(capacity);
  }
  push(value) {
    this.array[this.length] = value;
    this.length++;
  }
}

// const Array = new CustomArray(5);
// console.log(Array);
