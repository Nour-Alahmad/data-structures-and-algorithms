class KaryTreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const childNode = new KaryTreeNode(value);
    this.children.push(childNode);
    return childNode;
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }

  addNode(node, value) {
    if (!node) {
      this.root = new KaryTreeNode(value);
    } else if (node.children.length < this.k) {
      node.addChild(value);
    } else {
      let inserted = false;
      for (const child of node.children) {
        if (child.children.length < this.k) {
          child.addChild(value);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        const newNode = new KaryTreeNode(value);
        node.children.push(newNode);
      }
    }
  }


  insert(value) {
    this.addNode(this.root, value);
  }

  postorderTraversal(node = this.root) {
    if (!node) return;

    for (const child of node.children) {
      this.postorderTraversal(child);
    }

    console.log(node.value);
  }

  print(node = this.root) {
    let output = "";
    output += node.value + "\n";
    const num = node.children.length;
    for (let i = 0; i < num; i++) {
      output += this.print(node.children[i]);
    }
    return output;
  }
}

let fizzBuzzTree = (tree) => {

  function traverse(node) {
    if (!node) return;

    const value = node.value;
    let fizzBuzzValue = "";
    if (value % 3 === 0 && value % 5 === 0) fizzBuzzValue = "FizzBuzz";
    else if (value % 3 === 0) fizzBuzzValue = "Fizz";
    else if (value % 5 === 0) fizzBuzzValue = "Buzz";

    node.value = fizzBuzzValue || `${value}`;

    for (let child of node.children) {
      traverse(child);
    }
  }

  traverse(tree.root);

  return tree;
};


const karyTree = new KaryTree(3);
karyTree.insert(10);
karyTree.insert(2);
karyTree.insert(3);
karyTree.insert(4);
karyTree.insert(15);
karyTree.insert(6);

karyTree.postorderTraversal();

const fizzBuzzedTree = fizzBuzzTree(karyTree);
console.log('-----------------------');

fizzBuzzedTree.postorderTraversal();
