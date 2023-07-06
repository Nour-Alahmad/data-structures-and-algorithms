const Queue = require("../Satck&Queue/queue.test.js");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class AnimalShelter {
  constructor() {
    this.animals = new Queue();
  }
  enqueue(animal) {
    if (typeof animal === "object") {
      if (animal.species && animal.name) {
        const newNode = new Node(animal);
        if (!this.animals.front && !this.animals.rear) {
          this.animals.front = this.animals.rear = newNode;
        } else {
          this.animals.rear.next = newNode;
        }
        this.animals.rear = newNode;
        ++this.animals.length;
      }
    }
  }

  dequeue() {
    let temp = null;
    //if queue is empty then it will throw an error
    if (!this.animals.isEmpty()) {
      temp = this.animals.front;
      this.animals.front = temp.next;
      --this.animals.length;
      return temp.value;
    } else {
      return "empty";
    }
  }
}

let animal = new AnimalShelter();

animal.enqueue({
  species : 'dog',
  name    :'max'
});

animal.enqueue({
  species : 'dog2',
  name    :'max'
});

animal.enqueue({
  species : 'dog3',
  name    :'max'
});

animal.enqueue({
  species : 'dog4',
  name    :'max'
});

console.log(animal.dequeue());
console.log(animal.dequeue());
console.log(animal.dequeue());
console.log(animal.dequeue());

