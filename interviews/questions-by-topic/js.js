// #############################################################################################
// Explain event delegation.
// #############################################################################################
// Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent.
// That event listener analyzes bubbled events to find a match on child elements.
// Bind to a parent html element that will be on the page when it initially loads.
// Using event delegation we can dynamically add and remove children easier (no need to add/remove handlers).

// #############################################################################################
// Explain how this works in JavaScript.
// #############################################################################################
//‘This’ refers to the object its inside

// #############################################################################################
// Can you give an example of one of the ways that working with this has changed in ES6?
// #############################################################################################

// #############################################################################################
// Explain how prototypal inheritance works.
// #############################################################################################
// Every object in JavaScript has a Prototype. When attempting to access a property on an object, JavaScript will attempt to find a
// property in that object first, if it cannot find it then it will attempt to find it on the object’s prototype and so on. This works like single parent inheritance in a class based language
// The ‘prototype’ property points to an object that will be __proto__ of instances created with that function when using ’new’.
// __proto__ is a reference to prototype

// #############################################################################################
// What's the difference between a variable that is: null, undefined or undeclared?
// #############################################################################################
// undefined is a variable that has been declared but no value.
// null: is a value of a variable and is a type of object.
// undeclared:  variables is a variable that has been declared without 'var' keyword.

// #############################################################################################
// How would you go about checking for any of these states?
// #############################################################################################

// #############################################################################################
// What is a closure, and how/why would you use one?
// #############################################################################################
// A Closure is an inner function that has access to the scope of an enclosing function.
// Closures store references to the outer function’s variable, hence, we will always have access to the updated values of outer function’s variables.
// const counterFunction = () => {
//     let counter = 0;
//     return () => {
//       counter++;
//       return counter;
//     };
//   };
//   const startCounting = counterFunction(); // you always for get this

// #############################################################################################
// What language constructions do you use for iterating over object properties and array items?
// #############################################################################################

// Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?
// What's a typical use case for anonymous functions?
// What's the difference between host objects and native objects?
// Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?
// Explain the differences on the usage of foo between function foo() {} and var foo = function() {}
// Can you explain what Function.call and Function.apply do? What's the notable difference between the two?
// Explain Function.prototype.bind.
// What's the difference between feature detection, feature inference, and using the UA string?
// Explain "hoisting".
// Describe event bubbling.
// Describe event capturing.
// What's the difference between an "attribute" and a "property"?
// What are the pros and cons of extending built-in JavaScript objects?
// What is the difference between == and ===?
// Explain the same-origin policy with regards to JavaScript.
// Why is it called a Ternary operator, what does the word "Ternary" indicate?
// What is strict mode? What are some of the advantages/disadvantages of using it?
// What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
// What tools and techniques do you use debugging JavaScript code?
// Explain the difference between mutable and immutable objects.
// What is an example of an immutable object in JavaScript?
// What are the pros and cons of immutability?
// How can you achieve immutability in your own code?
// Explain the difference between synchronous and asynchronous functions.
// What is event loop?
// What is the difference between call stack and task queue?
// What are the differences between variables created using let, var or const?
// What are the differences between ES6 class and ES5 function constructors?
// Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?
// What advantage is there for using the arrow syntax for a method in a constructor?
// What is the definition of a higher-order function?
// Can you give an example for destructuring an object or an array?
// Can you give an example of generating a string with ES6 Template Literals?
// Can you give an example of a curry function and why this syntax offers an advantage?
// What are the benefits of using spread syntax and how is it different from rest syntax?
// How can you share code between files?
// Why you might want to create static class members?
