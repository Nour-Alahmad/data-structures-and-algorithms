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
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  print() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    const asciiCodeSum = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt();
    }, 0);
    const multiPrime = asciiCodeSum * 599;
    const theIndex = multiPrime % this.size;
    return theIndex;
  }

  add(key, value) {
    const hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    this.map[hash].append({ [key]: value });
  }

  set(key, value) {
    const hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    let current = this.map[hash].head;
    while (current) {
      if (key in current.value) {
        current.value[key] = value;
        return;
      }
      current = current.next;
    }

    this.map[hash].append({ [key]: value });
  }

  get(key) {
    const hash = this.hash(key);
    if (this.map[hash]) {
      let current = this.map[hash].head;
      while (current) {
        if (key in current.value) {
          return current.value[key];
        }
        current = current.next;
      }
    }
    return undefined;
  }

  has(key) {
    const hash = this.hash(key);
    if (this.map[hash]) {
      let current = this.map[hash].head;
      while (current) {
        if (key in current.value) {
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  keys() {
    const keys = [];
    for (const list of this.map) {
      if (list) {
        let current = list.head;
        while (current) {
          const key = Object.keys(current.value)[0];
          keys.push(key);
          current = current.next;
        }
      }
    }
    return keys;
  }


}

module.exports = HashMap;

//Test-------------------------------------------------------------

// describe("Hashmap functionality tests", () => {
//   let hashmap;

//   beforeEach(() => {
//     hashmap = new HashMap(10);
//   });

//   test("Setting a key/value to the hashtable", () => {
//     hashmap.add("key1", "value1");
//     expect(hashmap.get("key1")).toBe("value1");
//   });

//   test("Retrieving based on a key", () => {
//     hashmap.add("key2", "value2");
//     expect(hashmap.get("key2")).toBe("value2");
//   });

//   test("Retrieving non-existing key returns null", () => {
//     expect(hashmap.get("nonexistent")).toBeUndefined();
//   });

//   test("List of all unique keys", () => {
//     hashmap.add("key3", "value3");
//     hashmap.add("key4", "value4");
//     hashmap.add("key5", "value5");
//     const keys = hashmap.keys();
//     expect(keys).toEqual(expect.arrayContaining(["key3", "key4", "key5"]));
//     expect(keys.length).toBe(3); // Make sure only unique keys are returned
//   });

//   test("Collision handling", () => {

//     hashmap.add("key6", "value6");
//     hashmap.add("k6y", "value7");

//     expect(hashmap.get("key6")).toBe("value6");
//     expect(hashmap.get("k6y")).toBe("value7");
//   });

//   test("Retrieving a value from a bucket with collision", () => {
//     hashmap.add("key7", "value8");
//     hashmap.add("k7y", "value9");


//     expect(hashmap.get("key7")).toBe("value8");
//     expect(hashmap.get("k7y")).toBe("value9");
//   });

//   test("Hashing a key to an in-range value", () => {
//     const key = "some_key";
//     const hash = hashmap.hash(key);
//     expect(hash).toBeGreaterThanOrEqual(0);
//     expect(hash).toBeLessThan(hashmap.size);
//   });
// });
