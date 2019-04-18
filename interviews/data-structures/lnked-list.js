// it is a sorted list.
// it does not have indexes.
// you only have a head pointer
// random access is not allowed
// it is could for insertion and deletion because not everything have to be reindewed (that is the reason to use it)
// there are only stair you have to go through all them.
// -> 0 -> 0 -> 0 -> single linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("one")
// first.next = new Node("two")
// first.next.next = new Node("tree")

class SingleList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (!current.next) {
      newTail = current;
      current = current.nexy;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) return undefined;
    // this.head = null;
    // this.tail = null;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index > this.length) return undefined;
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      if (index !== counter) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  }
}

const single = new SingleList();
single.push("one");
single.push("two");
single.push("three");
console.log(single.get(1), "index 1");
// console.log(single.head, "head");
// console.log(single.tail, "tail");
single.pop();
// console.log(single.head, "head");
// console.log(single.tail, "tail");
single.shift();
// console.log(single, "tail");
