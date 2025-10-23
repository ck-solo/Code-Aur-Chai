// 📚 Understanding JavaScript Execution Context

// Step 1: Global Execution Context is created

var a = 10;  // 'a' is hoisted with undefined initially
var b = 20;  // 'b' is hoisted with undefined initially

function addNumbers(num1, num2) {
  // When this function is called, a new Function Execution Context is created
  var sum = num1 + num2;
  return sum;
}

// Step 2: Execution Phase starts

var result1 = addNumbers(a, b); // Function Execution Context is created for this call
console.log("Result 1:", result1); // Output: 30

var result2 = addNumbers(5, 7); // New Execution Context created for this call
console.log("Result 2:", result2); // Output: 12

// 📌 Note:
// - During the Memory Phase: 
//   Variables 'a', 'b', 'addNumbers', 'result1', and 'result2' are allocated memory.
// - During the Execution Phase: 
//   Values are assigned and function calls are executed.

// +++++++++++++++++++++++++++++++++++++++++++
// Theory
// "When JavaScript executes code, it first creates a Global Execution Context. Then, in the Memory Phase, all variables are initialized with undefined and all function declarations are stored with their full code.
// In the Execution Phase, variables are assigned real values and functions are executed
// Every time a function is called, a new Function Execution Context is created inside the Call Stack. It has its own memory and code execution thread. After the function finishes, the context is removed and control returns to the previous level."

// +++++++++++++++++++++++++++++++++++
// Code
var a = 10;
var b = 10;
function sum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
let val1 = sum(val1, val2);
let val2 = sum(2, 3);
