class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.count = 1;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (temp.value > value) {
        if (temp.left === null) {
          temp.left = node;
          return;
        }
        temp = temp.left;
      } else if (temp.value < value) {
        if (temp.right === null) {
          temp.right = node;
          return;
        }
        temp = temp.right;
      } else {
        this.count++;
        return;
      }
    }
  }
  search(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (true) {
      if (temp.value === value) {
        return true;
      } else if (temp.value > value) {
        if (temp.left === null) {
          return false;
        }
        temp = temp.left;
      } else if (temp.value < value) {
        if (temp.right === null) {
          return false;
        }
        temp = temp.right;
      }
    }
  }
}
