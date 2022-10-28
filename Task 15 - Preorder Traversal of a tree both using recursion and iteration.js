// // 1) Recursive Implementation -> As we can see, only after processing any node,
// // the left subtree is processed, followed by the right subtree. These operations can be defined
// // recursively for each node. The recursive implementation is referred to as a Depth–first search (DFS),
// // as the search tree is deepened as much as possible on each child before going to the next sibling.

// // Data structure to store a binary tree node
// class Node {
//   constructor(data = null, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }
// var root;
// // Recursive function to perform preorder traversal on the tree
// function preorder(root) {
//     // return if the current node is empty
//   if (root === null) {
//     return;
//   }

//   // Display the data part of the root (or current node)
//   console.log(root.data);
//   // Traverse the left subtree
//   preorder(root.left);
//   // Traverse the right subtree
//   preorder(root.right);
// }
// //  Construct the following tree
// //                1
// //              /   \
// //             /     \
// //            2       3
// //           /      /   \
// //          /      /     \
// //         4      5       6
// //               / \
// //              /   \
// //             7     8
// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.right.left = new Node(5);
// root.right.right = new Node(6);
// root.right.left.left = new Node(7);
// root.right.left.right = new Node(8);
// preorder(root);

// // 2) Iterative Implementation -> To convert the above recursive procedure into an iterative one,
// // we need an explicit stack. Following is a simple stack-based iterative algorithm to perform preorder traversal:

// // Data structure to store a binary tree node
// class Node {
//   constructor(data = null, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

// var root;
// // Iterative function to perform preorder traversal on the tree
// function preorderIterative(root) {
//   var curr, stack;

//   // return if the tree is empty
//   if (root === null) {
//     return;
//   }

//   // create an empty stack and push the root node
//   stack = [];
//   stack.push(root);

//   // loop till stack is empty
//   while (stack != 0) {
//     // pop a node from the stack and print it
//     curr = stack.pop();
//     console.log(curr.data);

//     // push the right child of the popped node into the stack
//     if (curr.right) {
//       stack.push(curr.right);
//     }

//     // push the left child of the popped node into the stack
//     if (curr.left) {
//       stack.push(curr.left);
//     }
//   }
// }
// // the right child must be pushed first so that the left child
// // is processed first (LIFO order)

// //    Construct the following tree
// //                1
// //              /   \
// //             /     \
// //            2       3
// //           /      /   \
// //          /      /     \
// //         4      5       6
// //               / \
// //              /   \
// //             7     8

// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.right.left = new Node(5);
// root.right.right = new Node(6);
// root.right.left.left = new Node(7);
// root.right.left.right = new Node(8);
// preorderIterative(root);

// 3) The above solution can be further optimized by pushing only the right children to the stack.

// Data structure to store a binary tree node
class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

var root;
// Iterative function to perform preorder traversal on the tree
function preorderIterative(root) {
  var curr, stack;

  // return if the tree is empty
  if (root === null) {
    return;
  }

  // create an empty stack and push the root node
  stack = [];
  stack.push(root);
  // start from the root node (set current node to the root node)
  curr = root;

  // loop till stack is empty
  while (stack != 0) {
    // if the current node exists, print it and push its right child
    // to the stack before moving to its left child
    if (curr) {
      console.log(curr.data);

      if (curr.right) {
        stack.push(curr.right);
      }

      curr = curr.left;
      // if the current node is None, pop a node from the stack
        //  set the current node to the popped node
    } else {
      curr = stack.pop();
    }
  }
}

    //  Construct the following tree
    //            1
    //          /   \
    //         /     \
    //        2       3
    //       /      /   \
    //      /      /     \
    //     4      5       6
    //           / \
    //          /   \
    //         7     8

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);
preorderIterative(root);

// The time complexity of the above solutions is O(n), where n is the total number of nodes in the binary tree. 
// The space complexity of the program is O(n) as the space required is proportional to the tree’s height, 
// which can be equal to the total number of nodes in the tree in the worst case for skewed trees.