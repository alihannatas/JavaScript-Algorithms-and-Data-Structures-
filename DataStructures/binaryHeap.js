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
}