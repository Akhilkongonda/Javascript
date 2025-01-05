// === JavaScript Functions ===

// Functions are reusable blocks of code that perform a specific task. 
// They can take inputs (parameters), perform operations, and return outputs.

// === Function Declaration ===
// A named function defined with the 'function' keyword.
function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Akhil")); // Output: Hello, Akhil!
  
  // === Function Expression ===
  // A function stored in a variable. It can be anonymous or named.
  const add = function (a, b) {
    return a + b;
  };
  console.log(add(5, 3)); // Output: 8
  
  // === Arrow Function ===
  // A shorter syntax for writing functions introduced in ES6.
  const multiply = (a, b) => a * b; // Implicit return for single-line functions
  console.log(multiply(4, 2)); // Output: 8
  
  // Arrow function with multiple lines (explicit return required)
  const subtract = (a, b) => {
    return a - b;
  };
  console.log(subtract(10, 4)); // Output: 6
  
  // === Parameters and Arguments ===
  // Functions can take parameters and receive arguments when called.
  function divide(a, b = 1) { // Default value for 'b' is 1
    return a / b;
  }
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(10));    // Output: 10 (default value of b is used)
  
  // === Rest Parameters ===
  // Allows a function to accept an indefinite number of arguments.
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10
  
  // === Anonymous Function ===
  // A function without a name, often used in callbacks.
  setTimeout(function () {
    console.log("This runs after 2 seconds.");
  }, 2000);
  
  // === Immediately Invoked Function Expression (IIFE) ===
  // A function that runs as soon as it is defined.
  (function () {
    console.log("IIFE executed!");
  })(); // Output: IIFE executed!
  

  
  // === Callback Functions ===
  // Functions passed as arguments to other functions.
  function processUserInput(callback) {
    const name = "Akhil";
    callback(name);
  }
  processUserInput(name => console.log(`Welcome, ${name}!`)); // Output: Welcome, Akhil!
  
  // === Higher-Order Functions ===
  // Functions that take other functions as arguments or return functions.
  function higherOrderFunction(operation, a, b) {
    return operation(a, b);
  }
  console.log(higherOrderFunction((x, y) => x + y, 5, 10)); // Output: 15
  
  // === Function Scope ===
  // Variables defined inside a function are not accessible outside it.
  function testScope() {
    const localVariable = "I am local";
    console.log(localVariable); // Output: I am local
  }
  // console.log(localVariable); // Error: localVariable is not defined
  
  // === Closures ===
  // A function that remembers its outer scope even after the scope has closed.
  function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
  }
  const closureExample = outerFunction("outside");
  closureExample("inside"); // Output: Outer: outside, Inner: inside
  
  // === Constructor Functions ===
  // Special functions used to create objects. Starts with an uppercase letter.
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person = new Person("Akhil", 24);
  console.log(person); // Output: Person { name: 'Akhil', age: 24 }
  
  // === Recursion ===
  // A function calling itself to solve smaller sub-problems.
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // Output: 120
  
  // === Generator Functions ===
  // Functions that can pause execution and resume later, using 'yield'.
  function* generatorFunction() {
    yield "First";
    yield "Second";
    yield "Third";
  }
  const gen = generatorFunction();
  console.log(gen.next().value); // Output: First
  console.log(gen.next().value); // Output: Second
  console.log(gen.next().value); // Output: Third
  
  // === Async/Await Functions ===
  // For handling asynchronous code in a synchronous-like manner.
  async function fetchData() {
    const data = await new Promise(resolve => setTimeout(() => resolve("Fetched Data"), 1000));
    console.log(data); // Output: Fetched Data (after 1 second)
  }
  fetchData();
  