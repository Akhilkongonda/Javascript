
const arr=[0,1,2,3,4,5];
const arr2=new Array(1,2,3,4)
console.log(arr)
console.log(arr2);

// array methods
arr.push(6)
arr.push("akhil")
console.log(arr)
arr.pop()

console.log(arr);

//unshift inserts at start of the array 
//shift   removes the 

arr.unshift(9)
console.log(arr);
arr.shift()
console.log(arr);

arr.shift() // removes or delete the first element of the array like pop

console.log(arr);

// arr.includes(9)
//arr.indexof(9)
//arr.join() // binds the array (string , seperated )

// slice ,splice
const myarr=[4,5,6,7,8,9];

console.log("A",myarr)
const myna1=myarr.slice(1,3) // returns  the section of the array 
console.log(myna1);



// Difference between slice() and splice()

// === slice() ===
// - Extracts a portion of an array without modifying the original array.
// - Returns a new array containing the extracted elements.

let array1 = [1, 2, 3, 4, 5];

// Example: Using slice()
let slicedArray = array1.slice(1, 4); // Extract elements from index 1 to 3 (end is exclusive)
console.log(slicedArray); // Output: [2, 3, 4]
console.log(array1);      // Output: [1, 2, 3, 4, 5] (original array unchanged)


// === splice() ===
// - Adds, removes, or replaces elements in the array.
// - Modifies the original array and returns an array of removed elements.

let array2 = [1, 2, 3, 4, 5];

// Example 1: Removing elements using splice()
let removedElements = array2.splice(1, 2); // Remove 2 elements starting at index 1
console.log(removedElements); // Output: [2, 3]
console.log(array2);          // Output: [1, 4, 5] (original array modified)

// Example 2: Adding elements using splice()
let array3 = [1, 2, 3, 4, 5];
array3.splice(2, 0, 'a', 'b'); // Add 'a' and 'b' at index 2 without removing any elements
console.log(array3); // Output: [1, 2, 'a', 'b', 3, 4, 5]

// Example 3: Replacing elements using splice()
let array4 = [1, 2, 3, 4, 5];
array4.splice(1, 2, 'x', 'y'); // Replace 2 elements starting at index 1 with 'x' and 'y'
console.log(array4); // Output: [1, 'x', 'y', 4, 5]

/*
Key Differences:
- slice() does NOT modify the original array; splice() DOES.
- slice() returns a new array; splice() returns the removed elements.
- Use slice() to extract a portion of the array without altering it.
- Use splice() to modify the array by adding, removing, or replacing elements.
*/





