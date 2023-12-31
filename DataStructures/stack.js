class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return true;
  }
  pop() {
    if (this.size == 0) return null;
    let temp = this.first;
    if (this.size == 1) {
      this.last = null;
    }
    this.first = this.first.next;
    temp.next = null;
    this.size--;
    return temp.value;
  }
}
