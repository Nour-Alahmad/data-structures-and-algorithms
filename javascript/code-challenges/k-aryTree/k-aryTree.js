
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
    if (node.children.length < this.k) {
      node.addChild(value);
    } else {
      for (const child of node.children) {
        this.addNode(child, value);
      }
    }
  }
  
  insert(value) {
    if (!this.root) {
      this.root = new KaryTreeNode(value);
    } else {
      this.addNode(this.root, value);
    }
  }


}
