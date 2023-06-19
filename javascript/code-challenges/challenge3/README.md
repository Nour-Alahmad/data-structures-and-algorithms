
# LinkedList

The `LinkedList` class is a simple implementation of a singly linked list data structure in JavaScript. It allows you to create and manipulate linked lists efficiently.

## Features

- Insertion of nodes at the head of the list (O(1) time complexity)
- Insertion of nodes at the tail of the list (O(n) time complexity)
- Checking if a value exists in the list
- Converting the linked list into a string representation
- Adds a new node with the given new value immediately before the first node that has the value specified
- Adds a new node with the given new value immediately after the first node that has the value specified

## Whiteboard Process

---

![Whiteboard](./LinkedList.png)

## Usage

To use the LinkedList class in your JavaScript project, follow these steps:

1. Clone or download the repository to your local machine.
2. Include the `LinkedList.js` file in your project.
3. Create a new instance of the `LinkedList` class:

```javascript
const linkedList = new LinkedList();
```

4. Use the available methods to manipulate the linked list:

```javascript
linkedList.insert(value); // Insert a new node with the specified value at the head of the list
linkedList.append (value); // Insert a new node with the specified value at the tail of the list
linkedList.includes(value); // Check if a node with the specified value exists in the list
linkedList.tostring(); // Convert the linked list to a string representation
linkedList.insertAfter(); // inserts a new node with the specified newValue after the first occurrence of a node with the given value in the linked list.
linkedList.insertBefore(); // inserts a new node with the specified newValue before the first occurrence of a node with the given value in the linked list.
```

Please note that the `value` parameter represents the value to be inserted or searched for in the linked list.

## Examples

Here are some examples to demonstrate the usage of the LinkedList class:

```javascript

let newList = new LinkedList();

newList.insert(1);
newList.insert(2);
newList.insert(3);
newList.insert(4);
newList.insert(5);

const newList2 = new LinkedList();

newList2.append (1);
newList2.append (2);
newList2.append (3);
newList2.append (4);
newList2.append (5);

console.log(newList.tostring());// Output: "5 >> 4 >> 3 >> 2 >> 1 >> NULL"
console.log(newList2.tostring());// Output: "1 >> 2 >> 3 >> 4 >> 5 >> NULL"

console.log(newList.includes(1));// Output: true
console.log(newList2.includes(10));// Output: false

```

The above example shows how to create a linked list and perform basic operations such as insertion and checking if a value exists. The `tostring` method is also used to obtain a string representation of the linked list.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code for personal or commercial purposes.

## Acknowledgements

- The implementation of the LinkedList class in this repository is inspired by various resources and tutorials on data structures and algorithms.

