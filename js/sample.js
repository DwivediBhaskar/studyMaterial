1. What is JavaScript?
Answer: JavaScript is a high-level, interpreted programming language primarily used for creating interactive and dynamic web pages.
Example:
alert("Hello, JavaScript is running!");

2. What is the DOM in the context of JavaScript?
Answer: The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content and structure of a web page dynamically.
Example:
document.getElementById("demo").innerText = "DOM Manipulated!";

3. Explain the difference between let, var, and const in JavaScript.
Answer: var is function-scoped, let is block-scoped, and const is also block-scoped but its value cannot be re-assigned after declaration.
Example:
var a = 1;
let b = 2;
const c = 3;
// a and b can be reassigned, c cannot

4. What is the purpose of closures in JavaScript?
Answer: Closures allow functions to access variables from their outer scope even after the outer function has finished executing. They help create private variables and methods.
Example:
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

5. What is the event loop in JavaScript?
Answer: The event loop is a mechanism that allows asynchronous JavaScript code to execute in a non-blocking way. It continuously checks the message queue and executes tasks in a loop.
Example:
console.log("Start");
setTimeout(() => console.log("Async task"), 0);
console.log("End");
// Output: Start → End → Async task

6. What is the difference between == and === in JavaScript?
Answer: == is equality operator that performs type coercion, while === is the strict equality operator that checks both value and type.
Example:
console.log(5 == "5");   // true
console.log(5 === "5");  // false

7. Explain the concept of hoisting in JavaScript.
Answer: Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.
Example:
console.log(x); // undefined
var x = 10;

sayHi(); // "Hi!"
function sayHi() {
  console.log("Hi!");
}

8. How does this keyword work in JavaScript?
Answer: The value of this depends on how a function is called. In the global scope, it refers to the global object. In a method, it refers to the object on which the method is called.
Example:
const obj = {
  name: "Alice",
  greet: function() {
    console.log(this.name);
  }
};
obj.greet(); // Alice

9. What is a callback function in JavaScript?
Answer: A callback function is a function passed as an argument to another function, which will be invoked later when a specific event occurs or a condition is met.
Example:
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
greet("Alice", () => console.log("Callback executed"));

10. Explain the purpose of the bind method in JavaScript.
Answer: The bind method is used to create a new function that, when called, has its this keyword set to a specific value.
Example:
const person = { name: "Alice" };
function greet() {
  console.log("Hello " + this.name);
}
const boundGreet = greet.bind(person);
boundGreet(); // Hello Alice

11. What is the difference between null and undefined in JavaScript?
Answer: null is an assignment value representing the absence of any object value, while undefined is a primitive value automatically assigned to variables that have been declared but not initialized.
Example:
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

12. How does prototypal inheritance work in JavaScript?
Answer: JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects. Each object has a prototype object, and if a property or method is not found on the object itself, JavaScript looks for it in the prototype chain.
Example :
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound.");
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.

13. Explain the concept of debouncing in JavaScript.
Answer: Debouncing is a technique used to ensure that time-consuming tasks do not fire so often, making them more efficient. It involves delaying the execution of a function until after a certain period of inactivity.
Example:
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

window.addEventListener("resize", debounce(() => {
  console.log("Resized!");
}, 500));

14. What is the purpose of the apply and call methods in JavaScript?
Answer: Both apply and call are used to invoke a function with a specified this value. The difference lies in how arguments are passed: apply takes an array of arguments, while call takes the arguments individually.
Example:
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); // Hello Alice!
greet.apply(person, ["Hi", "."]); // Hi Alice.


15. Explain the concept of event delegation in JavaScript.
Answer: Event delegation involves assigning a single event listener to a common ancestor of multiple elements. This way, you can handle events for all these elements in one place, improving performance.
Example :
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked on " + e.target.innerText);
  }
});

16. What is the purpose of the Promise object in JavaScript?
Answer: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It provides a cleaner way to handle asynchronous code compared to callbacks.
Example:
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result)); // Done!

17. What is the difference between let and const in JavaScript regarding variable reassignment?
Answer: let allows variable reassignment, while const does not. Once a value is assigned to a const variable, it cannot be changed.
Example:
let x = 10;
x = 20; // ✅ allowed

const y = 30;
// y = 40; // ❌ Error

18. How does the async/await feature in JavaScript simplify working with asynchronous code?
Answer: async/await is a syntactic sugar on top of promises, making asynchronous code look and behave more like synchronous code. It helps in writing asynchronous code that is easier to read and understand.
Example:
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}
fetchData();

19. What is the purpose of the localStorage and sessionStorage objects in JavaScript?
Answer: localStorage and sessionStorage are web storage objects that allow you to store key-value pairs locally in a user’s browser. The main difference is that data stored in localStorage persists even after the browser is closed, while data in sessionStorage is cleared when the session ends.
Example:
localStorage.setItem("name", "Alice");
sessionStorage.setItem("sessionName", "Bob");

console.log(localStorage.getItem("name")); // Alice
console.log(sessionStorage.getItem("sessionName")); // Bob

20. How can you clone an object in JavaScript?
Answer: To clone an object in JavaScript, you can use methods like Object.assign(), the spread operator (…), or JSON.parse() and JSON.stringify().
Here’s an example using the spread operator:

const originalObject = { key1: 'value1', key2: 'value2' };
const clonedObject = { ...originalObject };

21. Explain the concept of the same-origin policy in JavaScript.
Answer: The same-origin policy is a security measure that restricts web pages from making requests to a different domain than the one that served the web page. This policy helps prevent malicious scripts from accessing sensitive data.
Example:
// Example: Fetching from same origin works
fetch("/api/data").then(res => res.json());

// Fetching from different origin may be blocked by browser unless CORS is enabled


22. What is the purpose of the map function in JavaScript?
Answer: The map function is used to create a new array by applying a provided function to each element of an existing array, without mutating the original array.
Example:
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

23. What is a closure, and how is it used in JavaScript?
Answer: A closure is a combination of a function and the lexical environment within which that function was declared. Closures allow a function to access variables from its outer scope even after the outer function has finished executing.
Example:
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2


24. How does JavaScript handle asynchronous operations?
Answer: JavaScript uses mechanisms such as callbacks, promises, and async/await to handle asynchronous operations. These help manage the flow of asynchronous code and improve readability.
Example:
setTimeout(() => console.log("Callback"), 1000);

new Promise(resolve => resolve("Promise")).then(console.log);

async function asyncFunc() {
  return "Async/Await";
}
asyncFunc().then(console.log);

25. Explain the concept of the prototype chain in JavaScript.
Answer: The prototype chain is a mechanism by which objects in JavaScript inherit properties and methods from their prototypes. If a property or method is not found on the object itself, JavaScript looks for it in the object’s prototype, and so on, forming a chain.
Example:
const obj = {};
console.log(obj.toString()); // inherited from Object.prototype

26. What is the purpose of the splice method in JavaScript?
Answer: The splice method is used to add or remove elements from an array. It can both add new elements at a specified index and remove elements from a specific index.
Example:
const arr = [1, 2, 3, 4];
arr.splice(2, 1); // remove 1 element at index 2
console.log(arr); // [1, 2, 4]

27. How does event bubbling differ from event capturing in JavaScript?
Answer: Event bubbling and event capturing are two phases of event propagation in the DOM. In event bubbling, the innermost element’s event is handled first, and then the event bubbles up to the outer elements. Event capturing involves handling the event at the outermost element first and then capturing it as it goes down to the inner elements.
Example:
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
}, false); // bubbling

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
}, true); // capturing

28. What is the purpose of the filter function in JavaScript?
Answer: The filter function is used to create a new array containing only the elements that pass a provided test. It does not mutate the original array.
Example:
const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

29. Explain the concept of the try…catch statement in JavaScript.
Answer: The try…catch statement is used for handling exceptions (errors) in JavaScript. Code that might throw an exception is placed in the try block, and if an exception occurs, it is caught and handled in the catch block.
Example:
try {
  throw new Error("Something went wrong");
} catch (e) {
  console.log("Caught error:", e.message);
}

30. What is the difference between null and undefined in JavaScript?
Answer: null is an assignment value representing the absence of any object value, while undefined is a primitive value automatically assigned to variables that have been declared but not initialized.
Example:
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

31. What is the purpose of the setTimeout function in JavaScript?
Answer: The setTimeout function is used to delay the execution of a function or code block by a specified amount of time (in milliseconds).
Example:
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

32. Explain the concept of the EventEmitter in Node.js.
Answer: EventEmitter is a class in Node.js that facilitates communication between objects in a publish/subscribe pattern. It allows one object to notify a set of listeners when an event occurs.
Example:
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", name => console.log("Hello " + name));
emitter.emit("greet", "Alice");


33. What is the purpose of the Object.keys() method in JavaScript?
Answer: Object.keys() is used to return an array containing the names of all the enumerable properties of an object.
Example :
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ["a", "b"]

34. How does the for…of loop differ from the for…in loop in JavaScript?
Answer: The for…of loop is used to iterate over the values of an iterable object (arrays, strings, etc.), while the for…in loop is used to iterate over the properties of an object.
Exam[le :
  const arr = [10, 20, 30];
for (const value of arr) console.log(value); // values

const obj = { a: 1, b: 2 };
for (const key in obj) console.log(key); // keys

35. Explain the concept of the fetch API in JavaScript.
Answer: The fetch API is a modern way to make HTTP requests in JavaScript. It returns a Promise that resolves to the Response to that request, allowing for more flexible and powerful handling of network requests.
Example:
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


36. What is the purpose of the reduce function in JavaScript?
Answer: The reduce function is used to reduce an array to a single value by applying a specified function to each element and accumulating the result.
Example : 
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10

37. How does the localStorage differ from sessionStorage in JavaScript?
Answer: Both localStorage and sessionStorage are web storage objects, but localStorage persists even after the browser is closed, while sessionStorage is cleared when the session ends.
Example : 
localStorage.setItem("theme", "dark");
sessionStorage.setItem("temp", "123");

38. Explain the concept of currying in JavaScript.
Answer: Currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. It allows for partial application of functions.
Example:
  function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3)); // 8

39. What is the purpose of the Object.create() method in JavaScript
Answer: Object.create() is used to create a new object with the specified prototype object and properties. It provides a way to implement inheritance in JavaScript.
Example: 
const proto = { greet() { console.log("Hello!"); } };
const obj = Object.create(proto);
obj.greet(); // Hello!

40. How does the Promise.all method work in JavaScript?
Answer: Promise.all is used to wait for all the promises in an iterable to resolve or reject. It returns a single promise that resolves with an array of the resolved values.

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);

Promise.all([p1, p2]).then(values => console.log(values)); // [10, 20]

41. Explain the concept of the typeof operator in JavaScript.
Answer: The typeof operator is used to determine the type of a variable or expression. It returns a string representing the data type.
Example:
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof {});        // "object"

42. What is the purpose of the Array.isArray() method in JavaScript?
Answer: Array.isArray() is used to check if a value is an array. It returns true if the value is an array and false otherwise.
Example:
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false

43. How does the addEventListener method work in JavaScript?
Answer: addEventListener is used to attach an event handler to an element. It takes the event type and the function to be executed when the event occurs.
Example:
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});

44. Explain the concept of the WeakMap in JavaScript.
Answer: WeakMap is a collection of key-value pairs where the keys must be objects. Unlike a Map, a WeakMap allows for garbage collection of its keys.
Example:
const wm = new WeakMap();
let obj = {};
wm.set(obj, "value");
console.log(wm.get(obj)); // "value"
obj = null; // obj can be garbage collected

45. What is the purpose of the Number object in JavaScript?
Answer: The Number object is a wrapper object that allows you to work with numeric values. It provides methods for converting values to numbers and performing mathematical operations.
Example:
let num = new Number(123);
console.log(num.toFixed(2)); // "123.00"

46. How does JavaScript handle variable hoisting?
Answer: Variable and function declarations are hoisted to the top of their containing scope during the compilation phase.
Example:
console.log(a); // undefined
var a = 10;

sayHi(); // "Hi!"
function sayHi() {
  console.log("Hi!");
}

47. What is the purpose of the Array.from() method in JavaScript?
Answer: Array.from() is used to create a new array instance from an array-like or iterable object.
Example:
const str = "hello";
const arr = Array.from(str);
console.log(arr); // ["h", "e", "l", "l", "o"]

48. Explain the concept of memoization in JavaScript.
Answer: Memoization optimizes function calls by caching results of expensive calls and returning cached results for the same inputs.
Example:
function memoizedAdd() {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    console.log("Calculating...");
    cache[n] = n + 10;
    return cache[n];
  };
}
const add = memoizedAdd();
console.log(add(5)); // Calculating... 15
console.log(add(5)); // 15 (cached)

49. What is the purpose of the Object.freeze() method in JavaScript?
Answer: Object.freeze() is used to freeze an object, making it immutable.
Example:
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // ignored
console.log(obj.a); // 1

50. How does the this keyword work in arrow functions in JavaScript?
Answer: In arrow functions, this is lexically scoped, determined by the surrounding scope.
Example:
const obj = {
  name: "Alice",
  arrow: () => console.log(this.name)
};
obj.arrow(); // undefined

51. What is the purpose of the Object.getOwnPropertyDescriptor() method in JavaScript?
Answer: It gets the descriptor for a property of an object.
Example:
const obj = { a: 1 };
console.log(Object.getOwnPropertyDescriptor(obj, "a"));

52. Explain the concept of the Event Loop in JavaScript concurrency.
Answer: The Event Loop checks the call stack and message queue, ensuring async operations run non-blocking.
Example:
console.log("Start");
setTimeout(() => console.log("Async"), 0);
console.log("End");

53. How can you handle errors in asynchronous code in JavaScript?
Answer: Use try…catch in async functions or .catch() with promises.
Example:
async function fetchData() {
  try {
    let res = await fetch("invalid-url");
  } catch (err) {
    console.log("Error caught:", err.message);
  }
}

54. What is the purpose of the Array.map() method, and how does it differ from Array.forEach()?
Answer: map creates a new array with transformed elements; forEach executes a function but returns nothing.
Example:
const arr = [1, 2, 3];
const mapped = arr.map(x => x * 2);
arr.forEach(x => console.log(x * 2));
console.log(mapped); // [2, 4, 6]

55. Explain the concept of the Symbol data type in JavaScript.
Answer: Symbol is a primitive type used to create unique identifiers for object properties.
Example:
const sym1 = Symbol("id");
const obj = { [sym1]: "value" };
console.log(obj[sym1]); // "value"

56. What is the purpose of the Object.is() method in JavaScript?
Answer: Object.is() compares two values for equality, handling NaN and -0 correctly.
Example:
console.log(Object.is(NaN, NaN));   // true
console.log(Object.is(-0, +0));     // false

57. How does the rest parameter work in JavaScript functions?
Answer: Rest parameter collects remaining arguments into an array.
Example:
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

58. What is the difference between window and document in the browser?
Answer: window represents the global browser window; document represents the HTML document loaded in it.
Example:
console.log(window.innerWidth);
console.log(document.title);

59. Explain the concept of the WeakSet in JavaScript.
Answer: WeakSet is a collection of unique objects, allowing garbage collection of elements.
Example:
const ws = new WeakSet();
let obj = {};
ws.add(obj);
console.log(ws.has(obj)); // true
obj = null;

60. What is a closure, and how can it lead to memory leaks in JavaScript?
Answer: A closure is a function with its lexical environment. Memory leaks occur if closures retain unused references.
Example:
function outer() {
  let bigData = new Array(1000000).fill("x");
  return function inner() {
    console.log(bigData[0]);
  };
}
const leak = outer();

61. How does the Array.reduce() method work, and what is an accumulator function?
Answer: reduce applies an accumulator function to each element, reducing the array to a single value.
Example:
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10

62. Explain the purpose of the async keyword in JavaScript function declarations.
Answer: async defines asynchronous functions that return promises.
Example:
async function greet() {
  return "Hello async!";
}
greet().then(console.log);

63. What is the purpose of the RegExp object in JavaScript?
Answer: RegExp is used for matching text patterns.
Example:
const regex = /hello/i;
console.log(regex.test("Hello World")); // true

64. How does the Array.filter() method work in JavaScript?
Answer: filter creates a new array with elements that pass a test.
Example:
const arr = [1, 2, 3, 4];
const evens = arr.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

65. What is the purpose of the Promise.race() method in JavaScript?
Answer: Promise.race returns the result of the first promise that resolves or rejects.
Example:
const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 500));
const p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 1000));
Promise.race([p1, p2]).then(console.log); // "First"

66. Explain the concept of function currying and how it is achieved in JavaScript.
Answer: Currying transforms a multi-argument function into a series of single-argument functions.
Example:
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3)); // 8

67. What is the purpose of the encodeURIComponent() function in JavaScript?
Answer: It encodes special characters in a URL.
Example:
console.log(encodeURIComponent("hello world")); // "hello%20world"

68. How does the Object.values() method work in JavaScript?
Answer: Object.values() returns an array of property values.
Example:
const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // [1, 2]

69. Explain the concept of the Proxy object in JavaScript.
Answer: Proxy wraps another object and intercepts operations.
Example:
const target = {};
const proxy = new Proxy(target, {
  set(obj, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    obj[prop] = value;

70. What is the purpose of the Array.slice() method in JavaScript?
Answer: Array.slice() is used to extract a portion of an array into a new array without modifying the original array. It takes start and end indices as arguments.
Example:
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]

71. Explain the concept of the Web Workers in JavaScript.
Answer: Web Workers allow for parallel execution of scripts in the background, separate from the main execution thread.
Example:
// main.js
const worker = new Worker("worker.js");
worker.postMessage("Hello Worker!");
worker.onmessage = e => console.log(e.data);

// worker.js
onmessage = e => postMessage("Worker received: " + e.data);

72. What is the purpose of the Array.some() method in JavaScript?
Answer: Array.some() tests whether at least one element in the array passes the provided function’s test.
Example:
const arr = [1, 2, 3];
console.log(arr.some(n => n > 2)); // true

73. How does the try…finally statement differ from try…catch in JavaScript?
Answer: try…finally executes the finally block regardless of whether an exception is thrown or caught.
Example:
try {
  console.log("Try block");
} finally {
  console.log("Finally block always runs");
}

74. What is the Event Loop in JavaScript, and how does it contribute to the language’s asynchronous nature?
Answer: The Event Loop handles execution of code, including async operations, in a non-blocking way.
Example:
console.log("Start");
setTimeout(() => console.log("Async"), 0);
console.log("End");

75. Explain the purpose of the Array.unshift() method in JavaScript.
Answer: Array.unshift() adds one or more elements to the beginning of an array.
Example:
const arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]

76. What is the super keyword used for in JavaScript classes?
Answer: super is used to call the parent class’s constructor or methods.
Example:
class Parent {
  greet() { console.log("Hello from Parent"); }
}
class Child extends Parent {
  greet() {
    super.greet();
    console.log("Hello from Child");
  }
}
new Child().greet();

77. How does the Object.setPrototypeOf() method work in JavaScript?
Answer: It sets the prototype of an object.
Example:
const proto = { greet() { console.log("Hi"); } };
const obj = {};
Object.setPrototypeOf(obj, proto);
obj.greet(); // Hi

78. What is the purpose of the Array.concat() method in JavaScript?
Answer: Array.concat() merges two or more arrays into a new array.
Example:
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]

79. Explain the concept of the event.preventDefault() method in JavaScript.
Answer: It stops the default action of an event.
Example:
document.getElementById("link").addEventListener("click", e => {
  e.preventDefault();
  console.log("Default prevented");
});

80. How does the Array.every() method work in JavaScript?
Answer: Array.every() tests whether all elements pass a test.
Example:
const arr = [2, 4, 6];
console.log(arr.every(n => n % 2 === 0)); // true

81. What is the purpose of the Object.isExtensible() method in JavaScript?
Answer: It checks if new properties can be added to an object.
Example:
const obj = {};
console.log(Object.isExtensible(obj)); // true

82. Explain the concept of the Promise.finally() method in JavaScript.
Answer: finally runs after a promise is settled, regardless of outcome.
Example:
Promise.resolve("Done")
  .finally(() => console.log("Cleanup"));

83. What is the arguments object in JavaScript and how is it used?
Answer: arguments is an array-like object containing function arguments.
Example:
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6

84. How does the String.trim() method work in JavaScript?
Answer: It removes whitespace from both ends of a string.
Example:
const str = "  hello  ";
console.log(str.trim()); // "hello"

85. Explain the purpose of the Object.seal() method in JavaScript.
Answer: Object.seal() prevents adding/removing properties but allows modifying existing values.
Example:
const obj = { a: 1 };
Object.seal(obj);
obj.a = 2; // allowed
obj.b = 3; // ignored
console.log(obj); // { a: 2 }

86. What is the purpose of the Map object in JavaScript?
Answer: Map stores key-value pairs with keys of any type.
Example:
const map = new Map();
map.set("a", 1);
console.log(map.get("a")); // 1

87. How does the Array.findIndex() method work in JavaScript?
Answer: It returns the index of the first element that satisfies a test.
Example:
const arr = [10, 20, 30];
console.log(arr.findIndex(n => n > 15)); // 1

88. Explain the concept of the Blob object in JavaScript.
Answer: Blob represents binary large objects like files or images.
Example:
const blob = new Blob(["Hello"], { type: "text/plain" });
console.log(blob.size); // 5

89. What is the purpose of the instanceof operator in JavaScript?
Answer: instanceof checks if an object is an instance of a class.
Example:
class Person {}
const p = new Person();
console.log(p instanceof Person); // true

90. How does the JSON.stringify() method work in JavaScript?
Answer: It converts objects to JSON strings.
Example:
const obj = { a: 1 };
console.log(JSON.stringify(obj)); // '{"a":1}'

91. What is the purpose of the Object.create() method in JavaScript?
Answer: It creates a new object with a specified prototype.
Example:
const proto = { greet() { console.log("Hi"); } };
const obj = Object.create(proto);
obj.greet(); // Hi

92. How does the String.replace() method work in JavaScript?
Answer: It replaces a substring or pattern with another string.
Example:
const str = "Hello World";
console.log(str.replace("World", "JS")); // "Hello JS"

93. Explain the concept of memoization in JavaScript.
Answer: Memoization caches results of expensive function calls.
Example:
function memoized() {
  const cache = {};
  return n => cache[n] || (cache[n] = n * 2);
}
const fn = memoized();
console.log(fn(5)); // 10
console.log(fn(5)); // 10 (cached)

94. What is the purpose of the Object.isFrozen() method in JavaScript?
Answer: It checks if an object is frozen.
Example:
const obj = { a: 1 };
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true

95. How does the Array.splice() method work in JavaScript?
Answer: splice adds/removes elements at a specified index.
Example:
const arr = [1, 2, 3, 4];
arr.splice(2, 1, 99);
console.log(arr); // [1, 2, 99, 4]

96. Explain the purpose of the Object.defineProperty() method in JavaScript.
Answer: It defines or modifies a property with a descriptor.
Example:
const obj = {};
Object.defineProperty(obj, "a", { value: 1, writable: false });
console.log(obj.a); // 1

97. What is the purpose of the Array.reverse() method in JavaScript?
Answer: It reverses the order of elements in an array.
Example:
const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]

98. How does the parseInt() function work in JavaScript, and what is the radix parameter?
Answer: parseInt() parses a string into an integer. Radix specifies the numeral system.
Example:
console.log(parseInt("10"));      // 10
console.log(parseInt("10", 2));   // 2

99. Explain the concept of the Promise.allSettled() method in JavaScript.
Answer: Promise.allSettled() waits for all promises to settle and returns their outcomes.
Example:
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");
Promise.allSettled([p1, p2]).then(console.log);

100. What is the purpose of the Object.keys() method in JavaScript?
Answer: Object.keys() returns an array of enumerable property names.
Example:
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ["a", "b"]
