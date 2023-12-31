class Node {
  constructor(value, priority) {
    this.priority = priority;
    this.value = value;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex].priority < element.priority) break;
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }
  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.bubleUp();
  }
  //dequeue helper func.
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
  //dequeue helper func.
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
        if (left.priority < element.priority) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        let right = this.values[rightIndex];
        if (
          (right.priority < element.priority &&
            right.priority < this.values[swap].priority) ||
          (right.priority < element.priority && swap === null)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.swap(index, swap);
      index = swap;
    }
  }
  dequeue() {
    this.swap(0, this.values.length - 1);
    let popped = this.values.pop();
    this.sinkDown();
    return popped;
  }
}

const heap = new PriorityQueue();
heap.enqueue(1, 1);
heap.enqueue(2, 2);
heap.enqueue(3, 3);
heap.enqueue(14, 14);
heap.enqueue(15, 15);
heap.enqueue(15, 0);

heap.dequeue();
console.log(heap);
