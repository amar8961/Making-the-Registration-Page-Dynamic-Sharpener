// Problem Description

// How to implement stack ?
// Solution ->
// Following example shows how to implement stack by creating user defined push() method for entering elements and pop() method for retrieving elements from the stack.

// class MyStack {
//   constructor() {
//     this.maxSize = 0;
//     this.stackArray = [];
//     this.top = -1;
//   }

//   push(j) {
//     this.stackArray[++this.top] = j;
//   }
//   pop() {
//     return this.stackArray[this.top--];
//   }
//   peek() {
//     return this.stackArray[this.top];
//   }
//   isEmpty() {
//     return this.top == -1;
//   }
//   isFull() {
//     return this.top == this.maxSize - 1;
//   }
// }
// theStack = new MyStack(10);
// theStack.push(10);
// theStack.push(20);
// theStack.push(30);
// theStack.push(40);
// theStack.push(50);
// console.log(theStack.stackArray); // [ 10, 20, 30, 40, 50 ]
// while (!theStack.isEmpty()) {
//   var value = theStack.pop();
//   console.log(value);
//   console.log(" ");
// }
// console.log(""); // 50  40  30  20  10



// The following is an another sample to implement stack by creating user defined push() method 
// for entering elements and pop() method for retrieving elements from the stack.

class MyStack {
  constructor() {
    this.stackArray = [];
    this.top = -1;
  }

  push(j) {
    this.stackArray[++this.top] = j;
    console.log("push(" + j + ")");
    console.log("stack: [" + theStack.stackArray + "]");
  }
  pop() {
    let p = this.stackArray.pop();
    console.log("pop(" + p + ")");
    console.log("stack: [" + theStack.stackArray + "]");
  }
}
theStack = new MyStack();
console.log("stack: [" + theStack.stackArray + "]");
theStack.push(40);
theStack.push(50);
theStack.push(60);
theStack.pop();
theStack.pop();
theStack.pop();
theStack.pop();
theStack.pop();
try {
    pop();
} catch (e) {
  console.log("it Is Empty Stack");
}
