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
