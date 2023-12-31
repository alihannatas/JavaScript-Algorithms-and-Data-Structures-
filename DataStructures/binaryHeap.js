class BinaryHeap {
  constructor() {
    this.values = [];
  }

  bubleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex] > element) break;
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }
  insert(value) {
    this.values.push(value);
    this.bubleUp();
  }
  //extractMax helper func.
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
  //extractMax helper func.
  sinkDown() {
    let index = 0;
    const element = this.values[0];
    let length = this.values.length;
    while (true) {
      let swap = null;
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      if (leftIndex < length) {
        let left = this.values[leftIndex];
        if (left > element) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        let right = this.values[rightIndex];
        if (
          (right > element && right > this.values[swap]) ||
          (right > element && swap === null)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.swap(index, swap);
      index = swap;
    }
  }
  extractMax() {
    this.swap(0, this.values.length - 1);
    let popped = this.values.pop();
    this.sinkDown();
    return popped;
  }
}
