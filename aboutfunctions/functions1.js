// **Understanding JavaScript Functions from Scratch**

// **1. What is a Function?**
// A function is a reusable block of code designed to perform a specific task.
// Functions allow modular, reusable, and organized code.

// Example of a basic function:

function greet(name){
    return `hello ,${name}!`
}
console.log("akhil")


/*
Feedback:
- Functions can take parameters (inputs) and return values (outputs).
- Always use functions to reduce repetitive code.
*/

// **2. Types of Functions**

// **a) Function Declaration:**
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5


// **b) Function Expression:**

const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 2)); // Output: 3


// **c) Arrow Function:** (Shorter syntax introduced in ES6)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12



/*
Feedback:
- Use arrow functions for concise code.
- Function declarations are hoisted; expressions are not.
*/


// **3. Understanding Callbacks**

// **What is a Callback Function?**
// A callback is a function passed as an argument to another function and executed later.


function executeCallback(callback) {
    console.log("Before callback");
    callback(); // Executes the passed function.
    console.log("After callback");
}

// Example with a callback function
function myCallback() {
    console.log("Callback is executed!");
}
executeCallback(myCallback);

//------------------------------------------------------------------------------------------

// Array to iterate over
const nums = [1, 2, 3];

// Using the .forEach() method with a callback function
nums.forEach((num, index) => {
    // The function `(num, index) => { console.log(...) }` is a callback.
    // It is passed as an argument to the `forEach()` method.
    // The `forEach()` method executes this function for each element in the array.
    
    // The `num` parameter represents the current element of the array.
    // The `index` parameter represents the current index of the element in the array.
    console.log(`Index ${index}: ${num}`);
    // This line will be executed by `forEach()` for each element in the array.
});

// Output:
// Index 0: 1  --> Callback is executed for the first element (1) at index 0.
// Index 1: 2  --> Callback is executed for the second element (2) at index 1.
// Index 2: 3  --> Callback is executed for the third element (3) at index 2.

/*
Explanation:
1. A callback function is a function passed as an argument to another function.
2. Here, `(num, index) => { console.log(...) }` is the callback function.
3. This callback is passed to the `forEach()` method.
4. The `forEach()` method is responsible for calling the callback function 
   once for each element in the `nums` array.
5. The `forEach()` method supplies the current element (`num`) and its index (`index`)
   as arguments to the callback function.
6. The callback function is executed later by `forEach()` during its iteration over the array.
*/


// **a) forEach():** Iterates over an array.
const nums1 = [1, 2, 3];
nums.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
}); // Output: Index 0: 1, Index 1: 2, Index 2: 3


// **b) map():** Transforms elements of an array.
const squared = nums.map(num => num * num);
console.log(squared); // Output: [1, 4, 9]




const numm2 = [1, 2, 3];

// Apply two transformations in sequence:
// 1. Add 2 to each number
// 2. Multiply the result by 3
const transformed = nums2.map(num => {
    let res = (num + 2) * 3;  // Add 2, then multiply by 3
    return res;  // Return the result
});

console.log(transformed); // Output: [9, 12, 15]


// **c) filter():** Filters elements based on a condition.
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums); // Output: [2]



// **d) reduce():** Reduces the array to a single value.
const sum = nums.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 6



/*
Feedback:
- Practice each array method with examples.
- Understand how callbacks work with these methods.
*/









