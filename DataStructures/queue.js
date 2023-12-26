class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const node = new Node(val);
    if (this.size == 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.size == 0) return null;
    let current = this.first;
    if (this.size == 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return current.val;
  }
}

const queue = new Queue();
for (let i = 0; i < 100; i++) {
  queue.enqueue(i);
}

console.log(queue);
console.log(queue.dequeue());
console.log(queue);
