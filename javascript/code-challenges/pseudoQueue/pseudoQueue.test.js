
// import {Stack} from '../Satck&Queue/stack.test.mjs'

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
    if(this.top === null) return true; else return false;;
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
    if (this.top === null) return;
    let temp = this.top;
    this.top = this.top.next;
    --this.length;

    return temp.value;
  }

  peek() {
    if (this.top === null) return ;
    return this.top.value;
  }
}
class PseudoQueue {

  constructor() {
    this.stack1 = new Stack() ;
    this.stack2 = new Stack();
  }

  isEmpty(){

    if (this.stack1.length === 0 ){
      return true;
    }
    return false;
  }

  enqueue(value) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);

    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (!this.isEmpty) {
      console.log("empty");
    }

    return this.stack1.pop();
  }
}


const queue = new PseudoQueue();
queue.stack1.push('A1');
queue.stack1.push('B1');
queue.stack1.push('C1');
queue.stack2.push('A2');
queue.stack2.push('B2');
queue.stack2.push('C2');

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
