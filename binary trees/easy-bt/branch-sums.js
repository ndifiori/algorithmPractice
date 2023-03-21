
// key words
    // function takes in BINARY TREE
    // return list of its branch sums 
        // ordered from leftmost branch to rightmost branch
    
    // branch sum = sum of all values in binary tree branch
    // a branch = path of nodes in a tree that starts at the root node and ends at any leaf node
        // leaf nodes are at the endpoints at the very bottom


// 0(n) time and 0(n) space where n is the number of nodes in the binary tree

function branchSums(root) {

    // root is the top most node

    // initilize empty array to store branch sums
    const sums = [];

    // pass in the root, a starting value of zero and the array
    calculateBranchSums(root, 0, sums);

    // return the array
    return sums;
  }
  
function calculateBranchSums(node, runningSum, sums) {

    // node is the current node being visited
    // running sum = sum of values of nodes visited so far
    // sums = array containing branch sums

    // check to see if node is null or undefined
    if (!node) return;
  
    // calculate the running sum 
    const newRunningSum = runningSum + node.value;

    // checks if current node is a leaf node 
    if (!node.left && !node.right) {
      sums.push(newRunningSum);
      return;
    }
  
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
  }
  