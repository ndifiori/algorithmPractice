
// key words 
    // binary search tree (BST) = each node has 2 child nodes where the left child node is smaller than the parent node and the right child node is greater than the parent
    // function parameters = BST + target integar value + returns closest value

    // assume only one closest value

// average: 0(log(n)) time and 0(1) space
// worst: 0(n) time and 0(1) space

function findClosestValueInBst(tree, target) {

    // our 2 parameters the tree, the target value, and the rood node tree value = tree.value 
        // tree.value will be initialized as the closest variable
    return findClosestValueInBstHelper(tree, target, tree.value);
  }
  
  function findClosestValueInBstHelper(tree, target, closest) {

    // initialize currentNode as root node of the BST
    let currentNode = tree;

    // let's enter the while loop
    while (currentNode != null) {

        // target is set in problem
        // closest = value of root node
        // currentNode.value = value of root node
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }

        // if target is < currentNode.value
            // search the left side of the tree
            // by setting currentNode to the currentNode.left
        if (target < currentNode.value) {
            currentNode = currentNode.left;

        // if target is > currentNode.value
            // search the right side of the tree
            // by setting currentNode to the currentNode.right
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;

        } else {
            break;
        }
        }
    return closest;
  }






