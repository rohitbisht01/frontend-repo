### Javascript Topics

1. let,var and const

   - var is global scope
   - let and const are block scope
   - you can only shadow let with let only if you try to shadow let with var it is called illegal shadowing

2. Javacript Execution Context and Hoisting

   - How JS Execution Context works: two phases, creation and execution phase
   - Hoisting: during creation phase, js moves the variable and function declaration to the top of js file and it undefined.
   - In case of var, the variables are hoisted. But in case of let they are not hoisted (:: they are hoisted but in temporal dead zone ::)
   - What is Temporal Dead Zone: It is a phase when the variables are in the scope but are not yet declared.

3. Map, Filter and Reduce Array Methods

   - map: iterates over the aray and does some modification and returns a new array
   - filter: filter out something based on the condition inside the callback function and return the filtered array
   - reduce: iterates over the array and return the aggregated value. Reduces the array of elements to a single value
   - Create polyfill for map, reduce and reduce methods
   - Difference between map and forEach:
     - Map: used for iterating over an array + does not modify the original array + returns a new array + we can chain other methods like filter or reduce with map
     - forEach: used for iteratng over an array + modifies the original array + does not return the new array + we cannot chain other methods with forEach

4. Functions

   - What is function declaration
   - What is function expression? assigning a function to a variable
   - Called first class functions as it has many features such as (:: Anything a varibale can do in js function can do the same thing ::)
     - functions can be treated as variables
     - functions can be passed as a parameter to another function
     - function can be returned from another function
   - What is IIFE (Immediately invoked Function Expression)
   - Output based question on IFFE
   - Function Scope
   - Function Hoisting: functions are hoisted completely but varibales are hoisted partially. when you try to access a variable before initializing or declaring it prints undefined, in case of functions if you try to call a function before definition it will execute the function.
   - Params vs Arguements
     - Params: values that are received in the function declaration
     - Arguments: values you pass when calling a function
   - Spread vs Rest Operator
     - Spread: expands an array or object into individual elements. Used in array or object literals and function calls.
     - Rest: collects multiple elements into a single array or object. Used in function parameters or destructuring assignments.
   - Callback Function: a function that is passed as an argument to another function and which is invoked later at some point of time.
     - Example like, in window.addEventListner('click',function(params){}) or functions inside map,reduce,filter and setTimeout
   - Arrow Functions: Introduced in ES6 version of js. Clean syntax + don't need to use return keyword
     - Difference between arrow and normal function: syntax + in normal function, you need use return keyword in arrow function, you don't + arguments keyword (you cannot have argument keyword in arrow function) + this keyword (this in arrow function refers to this in global object which returns undefined, but in case of normal function this refers to the current object)

5. Closures

   - What is closure

6. Currying

   - What is currying? converting fun(a,b) to func(a)(b)
   - Why do we need currying: to implement HOC function, to aviod passing same variable again and again
   - Implement sum(2)(3)(4)
   - Implement Infinite Currying: Write a currying function that takes infinite arguments
   - Difference between currying and partial application
     - Currying: in this number of arguments is equal to the number of functions defined or returned in our currying code
     - Partial Application: in this number of argument does not determines how many functions are returned or going to be there.
   - Real world scenario of using currying : DOM manipulation
   - Implement curry() from scratch: convert func(a,b,c) => func(a)(b)(c)

7. Objects

   - What are objects
   - How do you add dynamic key-value pairs to an object
   - How to iterate over the object
     - for in loop
   - What is JSON.stringify and JSON.parse
     - JSON.stringify(obj) => converts to a string
     - JSON.parse(obj) => converts a string to an object
     - Use Case: storing value in our localStorage, when we want to store we store in form of string and when we retrieve and parse it back to an object
   - Arrow function and normal function in objects => value of this
   - Destructing in object
   - What is shallow and deep copy
     - Shallow Copy: when one object holds the reference to another object
     - Deep Copy: when we completely clone a object into a variable, here we don't have any references to original object that is why it is called deep copy
     - How to clone or make a deep copy of an object
       - using destructuring operator
       - using Object.assign function
       - stringify the object and then parse it

8. "this" keyword
   - What is Object binding and its types
