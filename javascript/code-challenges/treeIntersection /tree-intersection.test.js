class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
}

function treeIntersection(tree1, tree2) {
  const valuesMap = new Map();
  const result = [];

  function storeValues(node) {
    if (!node) return;
    valuesMap.set(node.value, true);
    storeValues(node.left);
    storeValues(node.right);
  }

  function checkCommonValues(node) {
    if (!node) return;
    if (valuesMap.has(node.value)) {
      result.push(node.value);
    }
    checkCommonValues(node.left);
    checkCommonValues(node.right);
  }

  storeValues(tree1.root);
  checkCommonValues(tree2.root);

  return result;
}

const tree1 = new BinaryTree();
tree1.insert(1);
tree1.insert(2);
tree1.insert(3);
tree1.insert(10);


const tree2 = new BinaryTree();
tree2.insert(2);
tree2.insert(3);
tree2.insert(4);
tree2.insert(10);


const commonValues = treeIntersection(tree1, tree2);
console.log(commonValues);
// --------------------------------------------




describe('treeIntersection', () => {

  it('should find common values between two binary trees', () => {
    const tree1 = new BinaryTree();
    tree1.insert(1);
    tree1.insert(2);
    tree1.insert(3);

    const tree2 = new BinaryTree();
    tree2.insert(2);
    tree2.insert(3);
    tree2.insert(4);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([2, 3]);
  });

  it('should handle different tree structures', () => {
    const tree3 = new BinaryTree();
    tree3.insert(2);
    tree3.insert(8);
    tree3.insert(1);

    const tree4 = new BinaryTree();
    tree4.insert(8);
    tree4.insert(1);
    tree4.insert(10);


    const result = treeIntersection(tree3, tree4);
    expect(result).toEqual([ 8, 1]);
  });

 
  it('should find common values even with different values and structures', () => {
    const tree5 = new BinaryTree();
    tree5.insert(7);
    tree5.insert(15);
    tree5.insert(3);

    const tree6 = new BinaryTree();
    tree6.insert(7);
    tree6.insert(15);
    tree6.insert(5);


    const result = treeIntersection(tree5, tree6);
    expect(result).toEqual([ 7, 15]);
  });
});
