//Difference between compiled and interpreted languages
// Compiled Languages:
// 1. Compilation Process: In compiled languages, the source code is translated into machine code by a compiler before execution. This machine code is specific to the target platform.
// 2. Performance: Compiled languages generally offer better performance since the code is directly executed by the machine's CPU without the need for an intermediary.
// 3. Error Detection: Errors are typically caught during the compilation process, allowing developers to fix issues before running the program.
// 4. Examples: C, C++, Rust, Go

// Interpreted Languages:
// 1. Interpretation Process: In interpreted languages, the source code is executed line-by-line by an interpreter at runtime. The interpreter translates the code into machine code on-the-fly.
// 2. Performance: Interpreted languages may have slower performance compared to compiled languages due to the overhead of interpretation during execution.
// 3. Error Detection: Errors are often detected at runtime, which can make debugging more challenging as issues may only surface during execution.
// 4. Examples: JavaScript, Python, Ruby, PHP

// Hybrid Approaches:
// Some languages use a combination of both compilation and interpretation. For example, Java is compiled into bytecode, which is then interpreted or compiled at runtime by the Java Virtual Machine (JVM). Similarly, modern JavaScript engines use Just-In-Time (JIT) compilation to improve performance.    



//Why JS better than other languages
// 1. Versatility: JavaScript can be used for both front-end and back-end development, making it a versatile choice for full-stack development.
// 2. Large Ecosystem: JavaScript has a vast ecosystem of libraries and frameworks (like React, Angular, Node.js) that simplify development and enhance functionality.
// 3. Asynchronous Programming: JavaScript's event-driven, non-blocking architecture allows for efficient handling of I/O operations, making it ideal for web applications.
// 4. Community Support: A large and active community means abundant resources, tutorials, and third-party tools are available for developers.
// 5. Easy to Learn: JavaScript has a relatively simple syntax and is beginner-friendly, making it accessible for new programmers.
// 6. Cross-Platform: JavaScript runs on all major browsers and platforms, ensuring wide compatibility for web applications.
// 7. Continuous Evolution: JavaScript is continuously evolving with regular updates (like ECMAScript versions) that introduce new features and improvements.



//Single Threaded vs Multi Threaded
// Single-Threaded:
// 1. Definition: A single-threaded environment means that only one thread of execution is available to perform tasks at any given time.
// 2. Execution: Tasks are executed sequentially, one after the other. If a task takes a long time to complete, it can block the execution of subsequent tasks.
// 3. Simplicity: Single-threaded programming is generally simpler to implement and debug since there are no concerns about concurrent access to shared resources.
// 4. Example: JavaScript in web browsers operates in a single-threaded environment, using an event loop to handle asynchronous operations without blocking the main thread.

// Multi-Threaded:
// 1. Definition: A multi-threaded environment allows multiple threads of execution to run concurrently, enabling parallel processing of tasks.
// 2. Execution: Tasks can be executed simultaneously on different threads, which can improve performance, especially for CPU-bound operations.
// 3. Complexity: Multi-threaded programming can be more complex due to issues like race conditions, deadlocks, and the need for synchronization when accessing shared resources.
// 4. Example: Languages like Java and C++ support multi-threading, allowing developers to create applications that can perform multiple operations at the same time.



//Garbage Collection in JS
// 1. Definition: Garbage collection is an automatic memory management process that identifies and frees up memory occupied by objects that are no longer in use or reachable in a program.
// 2. Mechanism: JavaScript uses a form of garbage collection called "mark-and-sweep." The garbage collector periodically scans the memory to identify objects that are no longer referenced and reclaims their memory.
// 3. Reachability: An object is considered reachable if it can be accessed through a chain of references from the root (global object, local variables, etc.). If an object is not reachable, it becomes eligible for garbage collection.
// 4. Benefits: Garbage collection helps prevent memory leaks and optimizes memory usage, allowing developers to focus on writing code without worrying about manual memory management.
// 5. Limitations: While garbage collection simplifies memory management, it can introduce performance overhead during its operation, and developers should still be mindful of creating unnecessary references that can delay garbage collection.


//Static vs Dynamic Typing
// Static Typing:
// 1. Definition: In statically typed languages, the data type of a variable is determined at compile-time and cannot change during runtime.
// 2. Type Checking: Type checking is performed during compilation, which helps catch type-related errors before the program is run.
// 3. Examples: Languages like Java, C, and C++ are statically typed, requiring explicit type declarations for variables.
// 4. Advantages: Static typing can lead to better performance and early error detection, making code more robust and easier to maintain.

// Dynamic Typing:
// 1. Definition: In dynamically typed languages, the data type of a variable is determined at runtime and can change as the program executes.
// 2. Type Checking: Type checking is performed during execution, which allows for more flexibility but can lead to runtime errors if types are misused.
// 3. Examples: Languages like JavaScript, Python, and Ruby are dynamically typed, allowing developers to declare variables without specifying their types.
// 4. Advantages: Dynamic typing offers greater flexibility and faster development cycles, as developers can write code more quickly without worrying about type declarations.



//Simple Primitives in JS(let, const, var)
// 1. let: Used to declare a block-scoped local variable, optionally initializing it to a value.
// 2. const: Used to declare a block-scoped local constant, which cannot be reassigned.
// 3. var: Used to declare a function-scoped or globally-scoped variable, optionally initializing it to a value.

//Example:
let age = 25; // 'age' can be reassigned
const name = "John"; // 'name' cannot be reassigned
var city = "New York"; // 'city' is function-scoped or globally-scoped

//Note: It's generally recommended to use 'let' and 'const' over 'var' due to their block-scoping and reduced risk of unintended behavior.



//let vs var
// 1. Scope:
//    - let: Block-scoped, meaning it is only accessible within the block (e.g., inside a loop or an if statement) where it is defined.
//    - var: Function-scoped, meaning it is accessible throughout the entire function in which it is defined, regardless of block boundaries.

// 2. Hoisting:
//    - let: Variables declared with 'let' are hoisted to the top of their block but are not initialized. Accessing them before declaration results in a ReferenceError.
//    - var: Variables declared with 'var' are hoisted to the top of their function and initialized with 'undefined'. Accessing them before declaration does not throw an error but returns 'undefined'.

// 3. Re-declaration:
//    - let: Cannot be re-declared within the same scope. Attempting to do so will result in a SyntaxError.
//    - var: Can be re-declared within the same scope without any errors, which can lead to unintended behavior.

//Example:
function example() {
    // In JavaScript, variables declared without any keyword (i.e., without let, const, or var) are assigned as global variables and are treated as var by default.
    console.log(a)
    if (true) {
        let x = 10; // Block-scoped
        var y = 20; // Function-scoped
    }
    console.log(x); // ReferenceError: x is not defined
    console.log(y); // 20
}

//To check the example, uncomment the line below
// example();

//Complex Premetives in JS(Object, Array, Function)
// 1. Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type, including other objects.
// 2. Array: An ordered list of values, which can be of any data type. Arrays are zero-indexed and come with various built-in methods for manipulation.
// 3. Function: A reusable block of code that can be defined once and executed multiple times. Functions can take parameters and return values.

//Example:
let person = { name: "Alice", age: 30 }; // Object
console.log(person.name); // Accessing object property

let persons = [ // Array of Objects
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
console.log(persons[1].name); // Accessing array of objects
let numbers = [1, 2, 3, 4, 5]; // Array
function greet() { // Function
    console.log("Hello, World!");
}
greet(); // Calling the function


//Operators in JS
// 1. Arithmetic Operators: +, -, *, /, %, ++, --
// 2. Assignment Operators: =, +=, -=, *=, /=, %=
// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators: &&, ||, !
// 5. Bitwise Operators: &, |, ^, ~, <<, >>

//Example:
let a = 10;
let b = 5;

console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0
console.log("Increment:", ++a); // 11
console.log("Decrement:", --b); // 4

// == vs === 
// == checks for equality of values, allowing type coercion (e.g., '5' == 5 is true).
// === checks for equality of both value and type, without type coercion (e.g., '5' === 5 is false).
console.log("Equals:", a == b); // false
console.log("Strict Equals:", a === b); // false
console.log("Not Equals:", a != b); // true
console.log("Greater Than:", a > b); // true
console.log("Less Than:", a < b); // false

console.log("Logical AND:", (a > 5) && (b < 10)); // true
console.log("Logical OR:", (a < 5) || (b < 10)); // true
console.log("Logical NOT:", !(a > 5)); // false



//JS Api's
//String API
let str = " Hello, JavaScript World! ";

// Common String methods
console.log("Length:", str.length); // Length of the string
console.log("Trimmed:", str.trim()); // Remove whitespace from both ends
console.log("Uppercase:", str.toUpperCase()); // Convert to uppercase
console.log("Lowercase:", str.toLowerCase()); // Convert to lowercase
console.log("Substring:", str.substring(7, 17)); // Extract substring
console.log("Replace:", str.replace("JavaScript", "JS")); // Replace substring
console.log("Includes 'World':", str.includes("World")); // Check if substring exists
console.log("Split by space:", str.split(" ")); // Split string into array
console.log("Index of 'JavaScript':", str.indexOf("JavaScript")); // Find index of substring
console.log("Character at index 1:", str.charAt(1)); // Get character at specific index

//Array API
let arr = [5, 3, 8, 1, 2];

// Common Array methods
console.log("Length:", arr.length); // Length of the array
console.log("Sorted:", arr.slice().sort((a, b) => a - b)); // Sort array (ascending)
console.log("Reversed:", arr.slice().reverse()); // Reverse array
console.log("Pushed 10:", arr.concat(10)); // Add element to the end
console.log("Popped:", arr.slice(0, -1)); // Remove last element
console.log("Shifted:", arr.slice(1)); // Remove first element
console.log("Unshifted 0:", [0].concat(arr)); // Add element to the beginning
console.log("Joined with '-':", arr.join("-")); // Join array elements into a string
console.log("Sliced (1,4):", arr.slice(1, 4)); // Extract a section of the array



//forEach method
arr.forEach((value, index) => {
    console.log(`Index ${index}: Value ${value}`);
});

//Filter, Map and Reduce in JS
// 1. Filter: Creates a new array with all elements that pass the test implemented by the provided function.
// 2. Map: Creates a new array populated with the results of calling a provided function on every element in the calling array.
// 3. Reduce: Executes a reducer function on each element of the array, resulting in a single output value.

//Example:
// Using filter to get even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [2, 4]

// Using map to square each number
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers); // [1, 4, 9, 16, 25]

// Using reduce to sum all numbers
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers:", sum); // 15



//Callbacks in JS
// A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used for asynchronous operations, such as handling events, making API calls, or reading files.

//Example:
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data); // Execute the callback with the fetched data
    }, 1000); // Simulate a 1-second delay
}

function displayData(data) {
    console.log("Fetched Data:", data);
}

// Using the fetchData function with displayData as a callback
fetchData(displayData);



//Countdown from 30 to 0 using setInterval
const counter = () => {
let i = 30;

const intervalId = setInterval(() => {
    console.log(i + " ");
    i--;
    if (i < 0) {
        clearInterval(intervalId);
    }
}, 1000);
}

counter();



//Time difference between setTimeout call and inner function call
const timeDifference = () => {
    const fun = () => {
        const end = Date.now();
        console.log("Time difference: " + (end - start) + " ms");
    }
    const start = Date.now();
    setTimeout(fun, 0);
}

timeDifference();



//Clock using setInterval
setInterval(() => {
    const date = new Date();
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}, 1000);