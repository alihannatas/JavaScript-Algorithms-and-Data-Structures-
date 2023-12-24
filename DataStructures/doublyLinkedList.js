class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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

  get(index) {
    if (index < 0 || this.length <= index) return null;
    let distanceIndex = this.length - index;
    let current;
    if (index >= this.length / 2) {
      current = this.tail;
      while (distanceIndex - 1 > 0) {
        current = current.prev;
        distanceIndex--;
      }
    } else {
      current = this.head;
      while (index > 0) {
        current = current.next;
        index--;
      }
    }
    return current;
  }

  set(index, val) {
    let current = this.get(index);
    if (!current) return false;
    current.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || this.length < index) return false;
    if (index == 0) return !!this.unShift(val);
    if (index == this.length) return !!this.push(val);
    let node = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = node;
    node.next = nextNode;
    node.prev = prevNode;
    nextNode.prev = node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return !this.pop();
    let prevNode = this.get(index - 1);
    let currentNode = prevNode.next;
    let nextNode = currentNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    currentNode.next = null;
    currentNode.prev = null;
    this.length--;
    return currentNode;
  }
}