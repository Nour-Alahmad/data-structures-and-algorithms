"use strict";

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

  insert(value) {
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

  append(value) {
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
  insertBefore(value, newValue) {
    let currentNode = this.head;
    if (currentNode.value === value || currentNode === null) {
      this.append(newValue);
    }
    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    const newNode = new Node(newValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  insertAfter(value, newValue) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    const newNode = new Node(newValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
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

  findNodeAtIndex(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === index) {
        return currentNode.value;
      }
      count++;
      currentNode = currentNode.next;
    }
    return "not found";
  }

  findLength() {
    let count = 0;
    let currentnode = this.head;
    while (currentnode !== null) {
      count++;
      currentnode = currentnode.next;
    }
    return count;
  }

  kthNodeFromTail(k) {
    const length = this.findLength();
    if (length < k || k < 0) {
      return "k must be greater than or equal to The length of your linkedlist";
    }

    const kFromHead = length - k;
    console.log(kFromHead);
    return this.findNodeAtIndex(kFromHead);
  }

  zipLists(list1, list2) {
    const zippedList = new LinkedList();

    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 && current2) {
      zippedList.append(current1.value);
      current1 = current1.next;

      zippedList.append(current2.value);
      current2 = current2.next;
    }

    while (current1) {
      zippedList.append(current1.value);
      current1 = current1.next;
    }

    while (current2) {
      zippedList.append(current2.value);
      current2 = current2.next;
    }

    return zippedList;
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

newList.insert(1);
newList.insert(2);
newList.insert(3);
newList.insert(4);
newList.insert(5);

const newList2 = new LinkedList();

// const newList3 = zipLists(newList,newList2);


newList2.append(1);
newList2.append(2);
newList2.append(3);
newList2.append(4);
// newList2.append(5);

console.log(newList2.tostring());
console.log(newList.tostring());


console.log(newList2.kthNodeFromTail(-1));
const newList3 = newList.zipLists(newList,newList2);

console.log(newList3.tostring());

// console.log(newList2.tostring());

//------------------------------------------------------------------

//test

describe("Linked List", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("should instantiate an empty linked list", () => {
    expect(linkedList.head).toBeNull();
  });

  it("should properly insert into the linked list", () => {
    linkedList.insert(5);
    expect(linkedList.head.value).toBe(5);
    expect(linkedList.head.next).toBeNull();
  });

  it("should have the head property properly point to the first node", () => {
    linkedList.insert(5);
    linkedList.insert(10);
    expect(linkedList.head.value).toBe(10);
    expect(linkedList.head.next.value).toBe(5);
  });

  it("should properly insert multiple nodes into the linked list", () => {
    linkedList.insert(5);
    linkedList.insert(10);
    linkedList.insert(15);
    expect(linkedList.head.value).toBe(15);
    expect(linkedList.head.next.value).toBe(10);
    expect(linkedList.head.next.next.value).toBe(5);
  });

  it("should return true when finding an existing value", () => {
    linkedList.insert(5);
    linkedList.insert(10);
    linkedList.insert(15);
    expect(linkedList.includes(10)).toBe(true);
  });

  it("should return false when finding a non-existing value", () => {
    linkedList.insert(5);
    linkedList.insert(10);
    linkedList.insert(15);
    expect(linkedList.includes(20)).toBe(false);
  });

  it("should return a collection of all values in the linked list", () => {
    linkedList.insert(5);
    linkedList.insert(10);
    linkedList.insert(15);
    const values = linkedList.tostring();
    expect(values).toBe("15 >> 10 >> 5 >> NULL");
  });
  it("should successfully add a node to the end of the linked list", () => {
    linkedList.append(1);
    expect(linkedList.tostring()).toBe("1 >> NULL");
  });

  it("should successfully add multiple nodes to the end of a linked list", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.tostring()).toBe("1 >> 2 >> 3 >> NULL");
  });

  it("should successfully insert a node before a node located in the middle of a linked list", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(4);
    linkedList.append(5);
    linkedList.insertBefore(4, 3);
    expect(linkedList.tostring()).toBe("1 >> 2 >> 3 >> 4 >> 5 >> NULL");
  });

  it("should successfully insert a node before the first node of a linked list", () => {
    linkedList.append(0);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertBefore(2, 1);
    expect(linkedList.tostring()).toBe("0 >> 1 >> 2 >> 3 >> NULL");
  });

  it("should successfully insert after a node in the middle of the linked list", () => {
    linkedList.append(1);
    linkedList.append(3);
    linkedList.insertAfter(1, 2);
    expect(linkedList.tostring()).toBe("1 >> 2 >> 3 >> NULL");
  });

  it("should successfully insert a node after the last node of the linked list", () => {
    linkedList.append(1);
    linkedList.insertAfter(1, 2);
    expect(linkedList.tostring()).toBe("1 >> 2 >> NULL");
  });

  it("returns error when k is greater than the length of the linked list", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    const result = linkedList.kthNodeFromTail(4);
    expect(result).toBe("k must be greater than or equal to The length of your linkedlist");
  });

  it("throws an error when k is not a positive integer", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    const result = linkedList.kthNodeFromTail(-1);
    expect(result).toBe("k must be greater than or equal to The length of your linkedlist");
  });

  it("returns the value of the only node when the list size is 1", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    const result = linkedList.kthNodeFromTail(1);
    expect(result).toBe(1);
  });

  it("returns the correct value when k is in the middle of the list", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    const result = linkedList.kthNodeFromTail(3);
    expect(result).toBe(3);
  });
});
