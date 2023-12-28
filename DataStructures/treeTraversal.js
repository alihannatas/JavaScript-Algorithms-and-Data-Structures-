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
  BFS() {
    let data = [];
    let queue = [];
    let current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      data.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
