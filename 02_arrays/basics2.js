let ar1=[2,3,4,5]
let ar2=[3,4,5,6]
let allarr=[...ar1,...ar2] // spread operator

console.log(allarr)



// isArray checks is array or not  
// from 

console.log(Array.from("akhil"))

console.log(Array.from({name:"akhil"})) // interesting for interviews

// Example using Array.from() with a plain object
console.log(Array.from({ name: "akhil" }));

// Output: [NaN]

// Explanation:
// Array.from() is used to create a new array from an array-like or iterable object.
// In this case, { name: "akhil" } is a plain object with a key-value pair.
// Objects are not iterable by default and don't have numeric indices or a length property like arrays.
// Because of this, Array.from() can't convert the object into an array of elements.

// Since the object does not have the expected properties, Array.from() defaults to [NaN], 
// indicating that it couldn't process the object as an iterable.

// Example of Array.from() working correctly with an iterable object:
let str = "akhil";
console.log(Array.from(str)); // Output: ['a', 'k', 'h', 'i', 'l']

// Explanation:
// Array.from() works as expected when used with iterable objects like strings.
// A string is an iterable object with indexed characters, so Array.from() can create an array 
// from each character in the string, resulting in ['a', 'k', 'h', 'i', 'l'].

// Key Takeaway:
// - Array.from() works well with iterable objects (e.g., strings, arrays, the arguments object).
// - It does not work as expected with plain objects that lack iterable properties (like { name: "akhil" }).





