'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {

    this.head = null;
    this.tail = null;
  }

  insertToHead(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = null;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertToTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = null;
      // console.log(this);
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
    this.tail.next = null;
    // console.log(this);
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  tostring() {
    let currentNode = this.head;
    let str = "";
    while (currentNode.next) {
      str = str + currentNode.value + " >> ";
      currentNode = currentNode.next;
    }
    return str + currentNode.value + " >> NULL";
  }
}


let newList = new LinkedList();

newList.insertToHead(1);
newList.insertToHead(2);
newList.insertToHead(3);
newList.insertToHead(4);
newList.insertToHead(5);

const newList2 = new LinkedList();

newList2.insertToTail(1);
newList2.insertToTail(2);
newList2.insertToTail(3);
newList2.insertToTail(4);
newList2.insertToTail(5);

console.log(newList.tostring());
console.log(newList2.tostring());



//------------------------------------------------------------------

//test

describe('Linked List', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should instantiate an empty linked list', () => {
    expect(linkedList.head).toBeNull();
  });

  it('should properly insert into the linked list', () => {
    linkedList.insertToHead(5);
    expect(linkedList.head.value).toBe(5);
    expect(linkedList.head.next).toBeNull();
  });

  it('should have the head property properly point to the first node', () => {
    linkedList.insertToHead(5);
    linkedList.insertToHead(10);
    expect(linkedList.head.value).toBe(10);
    expect(linkedList.head.next.value).toBe(5);
  });

  it('should properly insertToHead multiple nodes into the linked list', () => {
    linkedList.insertToHead(5);
    linkedList.insertToHead(10);
    linkedList.insertToHead(15);
    expect(linkedList.head.value).toBe(15);
    expect(linkedList.head.next.value).toBe(10);
    expect(linkedList.head.next.next.value).toBe(5);
  });

  it('should return true when finding an existing value', () => {
    linkedList.insertToHead(5);
    linkedList.insertToHead(10);
    linkedList.insertToHead(15);
    expect(linkedList.includes(10)).toBe(true);
  });

  it('should return false when finding a non-existing value', () => {
    linkedList.insertToHead(5);
    linkedList.insertToHead(10);
    linkedList.insertToHead(15);
    expect(linkedList.includes(20)).toBe(false);
  });

  it('should return a collection of all values in the linked list', () => {
    linkedList.insertToHead(5);
    linkedList.insertToHead(10);
    linkedList.insertToHead(15);
    const values = linkedList.tostring();
    expect(values).toBe('15 >> 10 >> 5 >> NULL');
  });
});
