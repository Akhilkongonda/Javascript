console.log("async functions");


// **5. Asynchronous JavaScript**

// **What is Asynchronous Programming?**
// In asynchronous programming, tasks don’t block the execution of other tasks.
// Example: Fetching data from an API without stopping the UI from loading.

// **a) setTimeout() Example:**

console.log("start");
setTimeout(()=>{
    console.log("excuted after 2 seconds");
},2000);
console.log("end");


// using call back in async functions 
function fetchdata(callback){
    setTimeout(()=>{
     
        callback("data fetched!");

    },2000)

    console.log("came into function to perform api call");

}

function datareceived(data){
    console.log(data);
}
fetchdata(datareceived)


//can also be written as 
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched!");
    }, 1000);
}
fetchData(data => console.log(data)); // Output: Data fetched!


//------------------------------------------------------------------------------------------

// 1. Callbacks (Basic)
// In this approach, asynchronous operations are handled using callbacks. It was a simple way to handle async code but 
// could lead to nested callbacks (callback hell).


// Simulating an async operation with setTimeout using a callback
function fetchData(callback) {
    // setTimeout simulates a delay (like waiting for data to be fetched)
    setTimeout(() => {
        // Once the delay is over, the callback function is called with the result
        callback("Data fetched using callback!");
    }, 1000); // Delay of 1 second
}

// Calling fetchData and passing a callback function
fetchData(data => {
    // This callback is called when the async operation finishes
    console.log(data);  // Output: Data fetched using callback!
});



// Explanation:
// Callback: A function passed as an argument to be executed later once the asynchronous operation completes.
// Problem: Callback hell (pyramid of doom) happens when multiple callbacks are nested inside each other, making the code harder to maintain.

//---------------------------------------------------------------------------------------------------------------------------------


// 2. Promises (Intermediate)
// Introduced in ES6 (ECMAScript 2015), 
// Promises provide a more structured and
//  readable way to handle asynchronous operations. A Promise represents an operation that may complete in the future (with success or failure).

// Simulating async operation using Promise
function fetchData() {
    // Returning a Promise to handle async operation
    return new Promise((resolve, reject) => {
        // Simulating an async operation with a delay
        setTimeout(() => {
            const success = true;  // Change this to false to simulate error
            if (success) {
                resolve("Data fetched using promise!");  // Resolve the promise with success message
            } else {
                reject("Error: Data fetch failed!");  // Reject the promise with an error message
            }
        }, 1000); // Delay of 1 second
    });
}

// Calling fetchData and handling the resolved value or rejection
fetchData()
    .then(data => {
        // This runs if the Promise is resolved successfully
        console.log(data);  // Output: Data fetched using promise!
    })
    .catch(error => {
        // This runs if the Promise is rejected
        console.error(error);  // Output: Error: Data fetch failed!
    });


//     Explanation:
// Promise: Represents the eventual completion (or failure) of 
// an asynchronous operation. It has three states: pending, resolved, or rejected.
// resolve(): Used when the operation is successful.
// reject(): Used when the operation fails.
// Chaining: .then() handles the successful result,
//  and .catch() handles any errors (rejections).
//---------------------------------------------------------------------------------------------------------------




// 3. Async/Await (Advanced)
// async/await was introduced in ES8 (ECMAScript 2017) to make asynchronous code look synchronous, improving readability and simplifying error handling. It works with Promises but allows you to write async code in a more linear,
//  easy-to-read manner.


// Simulating async operation using Promise with async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;  // Change this to false to simulate error
            if (success) {
                resolve("Data fetched using async/await!");
            } else {
                reject("Error: Data fetch failed!");
            }
        }, 1000); // Delay of 1 second
    });
}

// Async function to handle async code in a more readable way
async function getData() {
    try {
        // Await pauses here until the Promise is resolved or rejected
        const data = await fetchData();  // Fetch data asynchronously
        console.log(data);  // Output: Data fetched using async/await!
    } catch (error) {
        // This block runs if the Promise is rejected (error handling)
        console.error(error);  // Output: Error: Data fetch failed!
    }
}

// Calling the async function to fetch data
getData();


// Explanation:
// async: Marks the function as asynchronous, allowing the use of await inside it.
// await: Pauses execution of the async function until the Promise is resolved or rejected.
// Error Handling: Using try/catch makes error handling much easier, compared to using .catch() in Promises.
// Code Structure: The async function makes it look synchronous, making async code more readable and maintainable.
//----------------------------------------------------------------------------------------------------------------




// Summary of fetch(), Axios, and async/await
// 1. fetch()
// Definition: fetch() is a built-in JavaScript function used to make HTTP requests (GET, POST, etc.) to an external resource (like an API).
// Use Case: Used primarily on the client-side (in the browser) to make requests to APIs or external services.
// Returns a Promise: fetch() returns a Promise that resolves to the Response object representing the response to the request.
// Handling Responses: You need to manually handle the response (e.g., parse it into JSON using .json()).

// Client-Side Example using fetch()

// Asynchronous function to fetch data from an API
async function fetchData() {
    try {
        // Fetching data from an API (GET request)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response JSON and store the data
        const data = await response.json();

        // Display the fetched data
        console.log(data);
    } catch (error) {
        // Handle any error that occurred during the fetch operation
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch the data
fetchData();


// Key Points:

// fetch() is native to the browser.
// You need to handle JSON parsing manually.
// It returns a Promise, so you can use async/await to handle asynchronous operations.

//---------------------------------------------------------------------------------------------------------------------------


// 2. Axios
// Definition: Axios is a promise-based HTTP client for both client-side (browser) and server-side (Node.js) applications.
// Use Case: Axios is used to make HTTP requests to APIs, and it offers more features than fetch() (like automatic JSON parsing and request/response interceptors).
// Advantages:
// Automatic handling of JSON parsing.
// Simplified error handling (throws an error for non-2xx responses).
// Supports request/response interceptors and additional features.


// Client-Side Example using Axios

// Import Axios (ensure Axios is installed or included in the browser)
import axios from 'axios'; // Use CDN for the browser

// Asynchronous function to fetch data using Axios
async function fetchData() {
    try {
        // Making a GET request to the API using Axios
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        // Axios automatically parses the response data
        console.log(response.data); // Display the fetched data
    } catch (error) {
        // Handle any error that occurred during the Axios request
        console.error('Error fetching data with Axios:', error);
    }
}

// Call the function to fetch data
fetchData();


// Key Points:

// Axios simplifies the request/response handling compared to fetch().
// It automatically parses JSON, so you don't need to call .json() like fetch().
// Axios is more feature-rich and is often preferred in complex applications.

//-------------------------------------------------------------------------------------------------------------------

// 3. async/await
// Definition: async/await is a syntactic sugar for handling asynchronous code in JavaScript. It makes asynchronous code look and behave more like synchronous code.
// Use Case: async/await is used to handle Promises in a cleaner and more readable manner.
// async defines a function that will return a Promise.
// await pauses the execution of an async function until the Promise resolves or rejects.

// Using async/await to handle asynchronous operations

// Asynchronous function to fetch data
async function fetchData() {
    try {
        // Using await to wait for the response from the API (fetch or axios)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Wait for the response to be parsed into JSON
        const data = await response.json();

        // Display the fetched data
        console.log(data);
    } catch (error) {
        // Handle any error that occurred during the asynchronous operation
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch the data
fetchData();

// Key Points:

// async functions return Promises and allow us to use await inside them.
// await pauses the function's execution until the Promise resolves, making asynchronous code easier to read and write.



