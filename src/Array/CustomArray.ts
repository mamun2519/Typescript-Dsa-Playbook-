const DEFAULT_CAPACITY = 10;

export class CustomArray {
  capacity: number;
  length: number;
  array: number[];
  index: number;
  constructor(capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.length = 0;
    this.array = new Array(capacity);
    this.index = 0;
  }
  push(value: string | number) {
    this.array[this.length] = value;
    this.length++;
  }
}

// const Array = new CustomArray(5);
// console.log(Array);
