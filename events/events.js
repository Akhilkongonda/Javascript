
// **Understanding Event Listeners in JavaScript**

// **1. What are Event Listeners?**
// Event listeners are functions that wait for specific events (like clicks, key presses, etc.) to occur on a web page.

// Example:
// When you click a button, an event listener can execute a function to respond to the click.

// **2. Adding an Event Listener**
// Syntax: `element.addEventListener(event, listener, options)`

// Example:
const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
    console.log("Button clicked!");
});

/*
Feedback:
- The `event` is the name of the event to listen for (e.g., 'click', 'keydown').
- The `listener` is the callback function to execute when the event occurs.
- Practice with different events and elements.
*/

// **3. Removing an Event Listener**
// Syntax: `element.removeEventListener(event, listener, options)`

function handleClick() {
    console.log("Button clicked and listener removed!");
    button.removeEventListener("click", handleClick);
}
button.addEventListener("click", handleClick);

/*
Feedback:
- The callback function reference must match exactly when adding and removing listeners.
- This is useful for optimizing performance and preventing multiple triggers.
*/

// **4. Common Events and Examples**

// **a) Mouse Events:**
const box = document.querySelector("#box");

box.addEventListener("mouseover", () => {
    console.log("Mouse entered the box!");
});
box.addEventListener("mouseout", () => {
    console.log("Mouse left the box!");
});

// **b) Keyboard Events:**
// Listen for key presses on the entire document.
document.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// **c) Form Events:**
const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from reloading the page.
    console.log("Form submitted!");
});

/*
Feedback:
- Explore different events like 'mousedown', 'mouseup', 'mousemove', 'focus', and 'blur'.
- Experiment with combining multiple event types.
*/

// **5. Event Object**
// The event listener's callback function automatically receives an event object with details about the event.

button.addEventListener("click", (event) => {
    console.log(event.type); // 'click'
    console.log(event.target); // The element that triggered the event.
});

// Example: Preventing default behavior
const link = document.querySelector("#myLink");
link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the link from navigating.
    console.log("Link click prevented!");
});

// Real-World Examples of preventDefault()
// 1. Prevent a Link from Navigating
// In the code example, clicking the link would typically take the user to the href destination. By using preventDefault(), this behavior is blocked.

const link1 = document.querySelector("#myLink");
link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default navigation.
    console.log("Link click prevented!");
});
<a id="myLink" href="https://example.com">Go to Example.com</a>


// What Happens?
// When you click the link:

// Instead of navigating to https://example.com, the event listener executes the custom logic (console.log).
// The link's navigation is blocked.
// Why This Is Useful?

// You might want to validate user input or show a confirmation dialog before navigation.







/*
Feedback:
- Understand the `event` object’s properties (e.g., `type`, `target`, `currentTarget`, etc.).
- Practice using `preventDefault()` and `stopPropagation()` to control behavior.
*/

// **6. Event Delegation**
// Event delegation involves attaching a listener to a parent element to handle events for its children.

const list = document.querySelector("#myList");
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`List item clicked: ${event.target.textContent}`);
    }
});

/*
Feedback:
- Event delegation is efficient for dynamically created elements.
- Use `event.target` to determine the source of the event.
*/

// **7. Capturing vs. Bubbling Phase**

// Events propagate in two phases: capturing (from the root to the target) and bubbling (from the target back to the root).

const outerDiv = document.querySelector("#outerDiv");
const innerDiv = document.querySelector("#innerDiv");

outerDiv.addEventListener("click", () => console.log("Outer DIV clicked!"), true); // Capturing phase
innerDiv.addEventListener("click", () => console.log("Inner DIV clicked!")); // Bubbling phase

// When you click the inner div, the output order is: Outer DIV clicked! -> Inner DIV clicked! (capturing -> bubbling). The capturing phase is optional and can be enabled by passing `true` as the third parameter in `addEventListener()`. 
// The default is the bubbling phase.   // bubbling phase is default     
// The capturing phase is useful for handling events before they reach the target element.
// The bubbling phase is useful for handling events after they reach the target element.
// You can stop event propagation using `event.stopPropagation()`.
// You can prevent the default behavior using `event.preventDefault()`.
// You can use `event.stopImmediatePropagation()` to stop other listeners from being called.


/*
Feedback:
- Add `true` as the third parameter for capturing phase listeners.
- Use this knowledge to control event propagation.
*/

// **8. Custom Events**
// You can create and dispatch your own events.

const customEvent = new Event("myCustomEvent");
button.addEventListener("myCustomEvent", () => {
    console.log("Custom event triggered!");
});
button.dispatchEvent(customEvent);

/*
Feedback:
- Custom events are useful for communication between components.
- Explore `CustomEvent` for passing additional data.
*/

// **Practice Exercises:**
// 1. Add event listeners for mouse and keyboard events on different elements.
// 2. Use event delegation to handle events for a dynamically created list.
// 3. Experiment with capturing and bubbling phases.
// 4. Create and dispatch a custom event with additional data.

