"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    return this.top === null;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    ++this.length;
  }

  pop() {
    if (this.top === null) return "empty";
    let temp = this.top;
    this.top = this.top.next;
    --this.length;

    return temp.value;
  }

  getMax() {
    if (this.length === 0) {
      console.log("Stack is empty");
    }
    let maxNum = this.pop(),
      value = null;

    while (this.length !== 0) {
      value = this.pop();

      if (value >= maxNum) {
        maxNum = value;
      }
    }

    return maxNum;
  }

  peek() {
    if (this.top === null) return "empty";
    return this.top.value;
  }
}
let stack = new Stack();
stack.push(133);
stack.push(2);
stack.push(143);
stack.push(14);
stack.push(5);

console.log(stack);
console.log(stack.getMax());
