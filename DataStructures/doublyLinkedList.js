class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    let current = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
      return current;
    }
    this.tail = current.prev;
    this.tail.next = null;
    current.prev = null;
    this.length--;
    return current;
  }

  shift() {
    if (this.length == 0) return null;
    let current = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }
    this.length--;
    return current;
  }

  unShift(val) {
    let node = new Node(val);
    if (this.length == 0) return this.push(val);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return node;
  }
}
