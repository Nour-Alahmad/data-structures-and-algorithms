"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    return this.front === null || this.length === 0;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if (!this.front && !this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    ++this.length;
  }

  dequeue() {
    let temp = null;
    //if queue is empty then it will throw an error
    if (!this.isEmpty()) {
      console.log("Dequeued item: " + this.front.value);
      temp = this.front;
      this.front = temp.next;
      --this.length;
      return temp.value;
    } else {
      return "empty";
    }
  }

  peek() {
    if (this.isEmpty()) {
      return "empty";
    }
    return this.front.value;
  }
}

// let queue = new Queue();

// queue.enqueue('A');
// queue.enqueue('B');
// queue.enqueue('c');
// queue.enqueue('D');

// queue.dequeue();

// console.log(`Queue length after enqueuing : ${queue.length}`);// Output -

// #-----------------------------------------------------------------------------
describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should enqueue into a queue", () => {
    queue.enqueue(5);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.length).toBe(1);
  });

  it("should enqueue multiple values into a queue", () => {
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.length).toBe(3);
  });

  it("should dequeue out of a queue the expected value", () => {
    queue.enqueue(5);
    queue.enqueue(10);
    const dequeuedValue = queue.dequeue();
    expect(dequeuedValue).toBe(5);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.length).toBe(1);
  });

  it("should peek into a queue, seeing the expected value", () => {
    queue.enqueue(5);
    queue.enqueue(10);
    const peekedValue = queue.peek();
    expect(peekedValue).toBe(5);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.length).toBe(2);
  });

  it("should empty a queue after multiple dequeues", () => {
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length).toBe(0);
  });

  it("should instantiate an empty queue", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length).toBe(0);
  });

  it("should raise an exception when calling dequeue on an empty queue", () => {
    const result = queue.dequeue();
    expect(result).toBe("empty");
  });

  it("should raise an exception when calling peek on an empty queue", () => {
    const result = queue.peek();
    expect(result).toBe("empty");
  });
});
