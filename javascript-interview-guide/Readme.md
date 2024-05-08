### Closure

Closure is a bundling of two or more functions where
inner functions have access to the properties and methods of the outer
functions even after the execution of the external function is done.

```
for (var index = 1; index <= 3; index++) {
   setTimeout(function () {
       console.log("after " + index + " seconds: " + index);
   }, index * 1000);
}
```

There are two popular solutions: IIFE & let keyword.

IIFE because an IIFE creates a new scope by declaring a function and immediately executing it.

```
for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}
```

let keyword to declare a variable that is block-scoped.

it will create a new lexical scope in each iteration.

In addition, the new lexical scope is chained up to the previous scope so that the previous value of the index is copied from the previous scope to the new one.

```
for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}
```

### Reduce Method

Accepts a callback function and initial value as an inpu

Used to perform different types of actions like segregation,
aggregation, running things in sequence/series, etc.

```
arr.reduce(callback, initialValue);

arr.reduce(function (previousValue, curValue, curIndex, arr) {
  const nextValue = previousValue + curValue;

  return nextValue;
}, initialValue);
```

### Promises

JavaScript is a synchronous programming language. However,
callback functions enable us to transform it into an asynchronous
programming language.

In JavaS​cript, callback functions were initially used to handle asynchronous operations. However, callbacks were limited in terms of functionality and often led to confusing code, so, ​promises were introduced to cater to these problems

A promise is an object that encapsulates the result of an asynchronous operation.

It has three states: pending, fulfilled and resolved

The Promise takes a callback function taking two parameter: reject and resolve

async/await -
new syntax introduced in ES6 that helps to process the promise
better.

### Function and this

The value of "this" is decided at the execution time,

Functions are called first-class citizens and there are four ways to invoke a function

1. As a normal function

```
function example(){
    console.log("Hello World!");
};
example();
```

2. As a method

```
const obj = {
    blog: "learnjs",
    displayBlog: function (){
        console.log(this.blog);
    }
};
obj.displayBlog();
```

3. As a constructor

```
const number = new Number("10");
console.log(number)
```

4. Indireclty using call, bind and apply

```
function example(arg1, arg2){
    console.log(arg1 + arg2);
};
example.call(undefined, 10, 20);
```

The value of this is decided upon how the function is invoked, each
invocation creates its own context and the context decides the value of
this.

#### Value of "this" when invoked as a normal function

The value of "this" in the function invocation refers to the global object.
"window" in the browser and "global" in Nodejs.

Because this refers to the window object, if we assign any property to it
we can access it outside

```
function example(){
// in strict mode this refers to undefined
    this.blog = "learnreact";
    this.displayBlog = function(){
      console.log(`Awesome ${this.blog}`)
    }
}

example();
console.log(this.blog);
// "learnreact"

this.displayBlog();
// "Awesome learnreact"
```

#### Strict Mode

If you invoke the function with the strict mode the value of this will be
undefined.

#### IIFE (Immediately Invoked Function Expression)

When we immediately invoke the function, it is invoked as a normal
function thus depending upon the mode, the value of this inside it is
decided.

#### Value of "this" when invoked as a normal function

When a function is declared inside an object the value of this inside
that function will refer to the object it is declared in.

#### Fat arrow function does not have "this" of its own

The fat arrow function does not have this of its own, it accesses this in
its nearest scope

#### Using call

We can change the value of this inside a function by calling it
indirectly with the call method.

```
const example = {
    blog: 'learnersbucket',
    displayBlog: function(){
        function inner(){
            // this refers to the example object
            console.log(this === example);
            console.log(this.blog);
        };
        inner.call(this);
    }
};

example.displayBlog();
// true
// "learnersbucket"
```

#### Value of this when invoked as a constructor

The value of this in the function invoked as a constructor refers to a
new object which has the value passed as an argument. Each instance
creates a new object.

```
function Example(blog){
    this.blog = blog;
    this.displayBlog = function(){
        console.log(this.blog);
    };
};

const example = new Example("learnersbucket");
example.displayBlog();
//"learnersbucket"

const example2 = new Example("MDN");
example2.displayBlog();
//"MDN"

console.log(example === example2);
//false
```

#### Value of this when invoked indirectly

When the function is invoked indirectly the value of this is what is
passed as an argument to the call, apply, & bind method.

- Runtime Binding

  - Using the call and apply methods we can invoke the function with new context. The values will be attached to that execution only
  - The difference between call and apply is that apply accepts arguments
    in an array, while call accepts it normally.

- Permanent Binding
  - When using bind, we can create a new function with the new values
    and store it in a variable, and then use it further. It creates fresh
    permanent binding without affecting the original function.

### Promise APIs

1. Promise.all() => If there is a case where we need to fetch data from multiple APIs and process them only if all calls are successful
2. Promise.race() => If we want the result of the first operation which settles to resolve or reject state
3. Promise.allSettled() => If we want the result of the all the operation and the code waits until all promises to settle, whether they are rejected or fulfilled
4. Promise.any() => Similar to Promise.race() but waits for the first promise to get fulfilled or rejects if all the promises are rejected

- Promise Polyfills for Promise.all, Promise.race, Promise.allSettled, Promise.any
