const tinderuser={}
tinderuser.id="123abc";
tinderuser.name="akhil"
tinderuser.isloggedin=false;
console.log(tinderuser)



const regularuser={
    email:"akhil@gmail.com",
    fullname:{
        username:{
            firstname:"akhil",
            lastname:"kongonda"
        }
    }
}


console.log(regularuser.fullname.username.firstname+regularuser.fullname.username.lastname);


const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}

const ob3={...ob1,...ob2}

const obj3=Object.assign({},ob1,ob2) // returns the modified target object  (target,source)=>({},source)

console.log("this is ",ob3); // spread operator 


console.log(obj3);
//____________________________________________________________________________________________________________________


// === Object.keys() ===
// Object.keys() returns an array of the object's own enumerable property names (keys).

let person = {
    name: "Akhil",
    age: 24,
    country: "India"
  };
  
  // Example using Object.keys():
  let keys = Object.keys(person); // Returns an array of the keys of the object
  console.log(keys); // Output: ['name', 'age', 'country']
  
  // Explanation:
  // Object.keys(person) returns an array containing the keys of the `person` object.
  // In this case, it returns the keys ["name", "age", "country"] as an array.
  
  // === Object.values() ===
  // Object.values() returns an array of the object's own enumerable property values.
  
  let values = Object.values(person); // Returns an array of the values of the object
  console.log(values); // Output: ['Akhil', 24, 'India']
  
  // Explanation:
  // Object.values(person) returns an array containing the values of the `person` object.
  // In this case, it returns the values ["Akhil", 24, "India"] as an array.
  
  // === Object.entries() ===
  // Object.entries() returns an array of the object's own enumerable property [key, value] pairs.
  
  let entries = Object.entries(person); // Returns an array of [key, value] pairs
  console.log(entries);
  // Output: [['name', 'Akhil'], ['age', 24], ['country', 'India']]
  
  // Explanation:
  // Object.entries(person) returns an array where each element is an array of two elements:
  // the first element is the key, and the second element is the corresponding value.
  // In this case, it returns [["name", "Akhil"], ["age", 24], ["country", "India"]].
  
  /*
  Key Differences:
  
  - Object.keys() gives you an array of the object's keys.
  - Object.values() gives you an array of the object's values.
  - Object.entries() gives you an array of [key, value] pairs.
  
  These methods are useful for iterating over an object and performing operations on its keys and values.
  */
  
  // Example of using these methods in a loop:
  
  // Using Object.keys() in a for loop
  console.log("Using Object.keys():");
  Object.keys(person).forEach(key => {
    console.log(key, ":", person[key]); // Logs each key-value pair
  });
  
  // Using Object.values() in a for loop
  console.log("\nUsing Object.values():");
  
  Object.values(person).forEach(value => {
    console.log(value); // Logs each value
  });
  
  // Using Object.entries() in a for loop
  console.log("\nUsing Object.entries():");
  Object.entries(person).forEach(([key, value]) => {
    console.log(key, ":", value); // Logs each key-value pair
  });




//------------------------------------------------------------------------------------------------------------------------


  // Example of an array of objects representing people
let people = [
    { name: "Akhil", age: 24, country: "India" },
    { name: "John", age: 30, country: "USA" },
    { name: "Maria", age: 28, country: "Spain" }
  ];
  
  // Accessing individual objects in the array
  console.log(people[0]); // Output: { name: "Akhil", age: 24, country: "India" }
  console.log(people[1].name); // Output: John (Accessing the 'name' property of the second object)
  
  // Accessing all the objects' names using a loop
  people.forEach(person => {
    console.log(person.name); // Logs: Akhil, John, Maria
  });


  //----------------------------------------------------------------------------------------------

  // Accessing and modifying the 'age' property of each object
people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old.`);
    person.age += 1; // Incrementing age by 1 for each person
  });
  
  console.log(people);
  // Output: Each person’s age will be incremented by 1

  
 // Filter people who are older than 25
let olderThan25 = people.filter(person => person.age > 25);
console.log(olderThan25);
// Output: [{ name: "John", age: 30, country: "USA" }, { name: "Maria", age: 28, country: "Spain" }]


// Find the person who is from "USA"
let usaPerson = people.find(person => person.country === "USA");
console.log(usaPerson); // Output: { name: "John", age: 30, country: "USA" }



// Sort people by age in ascending order
people.sort((a, b) => a.age - b.age);
console.log(people);
// Output: Array sorted by age


// Create an array of names only from the people array
let names = people.map(person => person.name);
console.log(names); // Output: ['Akhil', 'John', 'Maria']


//-------------------------------------------------------------------------------------




// === Object Destructuring Examples ===

// Basic Destructuring
const person1 = { name: "Akhil", age: 24, country: "India" };
// Extract 'name' and 'age' from the object
const { name, age } = person;
console.log(name); // Output: Akhil
console.log(age);  // Output: 24

// Renaming Variables
// Rename 'name' to 'fullName' and 'age' to 'years'
const { name: fullName, age: years } = person;
console.log(fullName); // Output: Akhil
console.log(years);    // Output: 24

// Default Values
// Provide a default value for 'age' if it doesn't exist in the object
const personWithNoAge = { name: "John" };
const { name: personName, age: personAge = 30 } = personWithNoAge;
console.log(personName); // Output: John
console.log(personAge);  // Output: 30 (default value)

// Nested Object Destructuring
// Extract properties from a nested object
const personWithAddress = {
  name: "Akhil",
  address: { city: "Hyderabad", state: "Telangana" }
};
const { address: { city, state } } = personWithAddress;
console.log(city);  // Output: Hyderabad
console.log(state); // Output: Telangana

// Destructuring with Rest Operator
// Capture remaining properties into a new object
const { name: person1Name, ...otherDetails } = person;
console.log(person1Name);   // Output: Akhil
console.log(otherDetails);  // Output: { age: 24, country: 'India' }

// Destructuring in Function Parameters
// Use object destructuring in function parameters
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet(person); // Output: Hello, my name is Akhil and I am 24 years old.

// Combining Object and Array Destructuring
// Extract properties from an array of objects
const people1 = [
  { name: "Akhil", age: 24 },
  { name: "John", age: 30 }
];
const [{ name: firstName }, { age: secondAge }] = people;
console.log(firstName); // Output: Akhil
console.log(secondAge); // Output: 30




  



  
  




