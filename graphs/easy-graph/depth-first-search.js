// key words
  // given Node class that has name + array of optional children nodes
  // when put together, nodes form an acyclic tree like structure

  // implement depthFirstSearh method that takes in empty array
    // traverse tree specifically navigating tree from left to right
    // stores nodes' names in input array
    // return array


class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(v + e) time || O(v) space
  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}