const DEFAULT_CAPACITY = 10;
class CustomArray {
  constructor(capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.length = 0;
    this.array = new Array(capacity);
  }
}

const Array = new CustomArray(5);
console.log(Array);
