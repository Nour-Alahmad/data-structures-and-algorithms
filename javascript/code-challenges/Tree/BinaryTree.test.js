let Queue = require('../Satck&Queue/queue.test');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  pre_order() {
    let result = [];
    function traverse(node) {
      if (!node) return;
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  in_order() {
    let result = [];
    const traverse = (node) => {
      if (!node) return;

      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  post_order() {
    let result = [];
    const traverse = (node) => {
      if (!node) return;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  getMax() {
    let max = this.root.value;
    const traverse = (node) => {
      if (!node) return;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node.value > max) max = node.value;
    };
    traverse(this.root);
    return max;
  }

  breadthFirst() {
    if (!this.root) {
      return [];
    }

    const queue = [];
    const result = [];

    queue.push(this.root);

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return result;
  }
}
class BinarySearchTree extends BinaryTree {
  constructor(node = null) {
    super(node);
    this.root = node;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  contains(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

 
}

let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(30);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(70);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

tree = new BinaryTree(one);
// let tree2 = new BinarySearchTree();

// tree2.add(1);
// tree2.add(2);
// tree2.add(30);
// tree2.add(4);
// tree2.add(5);
// tree2.add(6);
// tree2.add(7);

let b = tree.breadthFirst();

console.log(
  b,
  '\n---------------------------------------------------------------'
);

let preOrder = tree.pre_order();
let inOrder = tree.in_order();
let postOrder = tree.post_order();

console.log('preOrder: ', preOrder);
console.log('inOrder: ', inOrder);
console.log('postOrder: ', postOrder);

// ---------------------------------------------------------------

// describe("Binary Search Tree", () => {
//   let BSTree;

//   beforeEach(() => {
//     BSTree = new BinarySearchTree();
//   });

//   it("can successfully instantiate an empty tree", () => {
//     expect(BSTree.root).toBeNull();
//   });

//   it("can successfully instantiate a tree with a single root node", () => {
//     BSTree.add(5);
//     expect(BSTree.root.value).toBe(5);
//   });

//   it("can successfully add a left child and right child properly to a node", () => {
//     BSTree.add(5);
//     BSTree.add(3);
//     BSTree.add(7);

//     expect(BSTree.root.value).toBe(5);
//     expect(BSTree.root.left.value).toBe(3);
//     expect(BSTree.root.right.value).toBe(7);
//   });

//   it("can successfully return a collection from a pre-order traversal", () => {
//     BSTree.add(5);
//     BSTree.add(3);
//     BSTree.add(7);
//     BSTree.add(1);
//     BSTree.add(4);

//     const expected = [5, 3, 1, 4, 7];
//     const result = BSTree.pre_order();

//     expect(result).toEqual(expected);
//   });

//   it("can successfully return a collection from an in-order traversal", () => {
//     BSTree.add(5);
//     BSTree.add(3);
//     BSTree.add(7);
//     BSTree.add(1);
//     BSTree.add(4);

//     const expected = [1, 3, 4, 5, 7];
//     const result = BSTree.in_order();

//     expect(result).toEqual(expected);
//   });

//   it("can successfully return a collection from a post-order traversal", () => {
//     BSTree.add(5);
//     BSTree.add(3);
//     BSTree.add(7);
//     BSTree.add(1);
//     BSTree.add(4);

//     const expected = [1, 4, 3, 7, 5];
//     const result = BSTree.post_order();

//     expect(result).toEqual(expected);
//   });
// });
