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

  peek() {
    if (this.top === null) return "empty";
    return this.top.value;
  }
}

let stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("5");

// stack.pop();

console.log(`peek:${stack.peek()}, length:${stack.length}`);

// #-----------------------------------------------------------------------------------------

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("can successfully push onto a stack", () => {
    stack.push(5);
    expect(stack.peek()).toBe(5);
  });

  test("can successfully push multiple values onto a stack", () => {
    stack.push(5);
    stack.push(10);
    stack.push(15);

    expect(stack.peek()).toBe(15);
    expect(stack.pop()).toBe(15);
    expect(stack.peek()).toBe(10);
  });

  test("can successfully pop off the stack", () => {
    stack.push(5);
    stack.push(10);
    stack.push(15);

    expect(stack.pop()).toBe(15);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBe(5);
    expect(stack.isEmpty()).toBe(true);
  });

  test("can successfully empty a stack after multiple pops", () => {
    stack.push(5);
    stack.push(10);
    stack.push(15);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.isEmpty()).toBe(true);
  });

  test("can successfully peek the next item on the stack", () => {
    stack.push(5);
    stack.push(10);
    stack.push(15);

    expect(stack.peek()).toBe(15);
    expect(stack.pop()).toBe(15);
    expect(stack.peek()).toBe(10);
    expect(stack.pop()).toBe(10);
    expect(stack.peek()).toBe(5);
  });

  test("can successfully instantiate an empty stack", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("calling pop or peek on empty stack raises exception", () => {
    const result = stack.pop();
    expect(result).toBe("empty");

    const result2 = stack.peek();
    expect(result2).toBe("empty");
  });
});
