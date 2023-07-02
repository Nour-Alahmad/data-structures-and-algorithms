
# Stack and Queue

This is a simple implementation of Stack and Queue data structures in JS.

![Whiteboard](./stack%26Queue.png)

## Stack

The Stack class represents a Last-In-First-Out (LIFO) data structure. It supports the following operations:

- `push(element)`: Adds an element to the top of the stack.
- `pop()`: Removes and returns the element at the top of the stack.
- `peek()`: Returns the element at the top of the stack without removing it.
- `isEmpty()`: Checks if the stack is empty.

## Queue

The Queue class represents a First-In-First-Out (FIFO) data structure. It supports the following operations:

- `enqueue(element)`: Adds an element to the end of the queue.
- `dequeue()`: Removes and returns the element at the front of the queue.
- `peek()`: Returns the element at the front of the queue without removing it.
- `isEmpty()`: Checks if the queue is empty.

## Usage

1. Create instances of the Stack and Queue classes.
2. Use the provided methods to perform operations on the stack and queue.

```JS
// Example usage for Stack
const stack = new Stack();
stack.push(5);
stack.push(10);
console.log(stack.peek()); // Output: 10
console.log(stack.pop()); // Output: 10

// Example usage for Queue
const queue = new Queue();
queue.enqueue("Apple");
queue.enqueue("Banana");
console.log(queue.peek()); // Output: "Apple"
console.log(queue.dequeue()); // Output: "Apple"
```
