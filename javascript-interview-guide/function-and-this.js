function example() {
  // in strict mode this refers to undefined
  this.blog = "react";
  this.displyBlog = function () {
    console.log(`Awesome ${this.blog}`);
  };
}

example();
console.log(this.blog);

// this.displyBlog();

// Value of this in strict mode
function test() {
  "use strict";
  console.log(this === undefined);

  // in strict mode the the inner functions, this has undefined value
  function inner() {
    console.log(this === undefined);
  }

  inner();
}

test();

// Value of this in IIFE
// (function examp() {
//   console.log(this === window); // returns true
// })();

const exampleObj = {
  name: "rohit",
  displayName: function () {
    console.log(this === exampleObj);
    console.log(this.name);
  },
};

exampleObj.displayName();

// this keyword in fat arrow function
const temp = {
  name: "Rohit",
  displayName: function () {
    const inner = () => {
      console.log(this === temp);
      console.log(this.name);
    };

    inner();
  },
};

temp.displayName();

// Runtime binding : using call and apply
const tempObj = {
  blog: "learn react",
};

function alphaFunc(name) {
  console.log(`${name} runs ${this.blog}`);
}

alphaFunc.call(tempObj, "Rohit");
alphaFunc.call(tempObj, ["Rohit"]);

// Permanent Binding : using bind method

const obj = {
  name: "rohit",
};

function testBind(blog) {
  console.log(`${this.name} runs ${blog}`);
}

const bounded = testBind.bind(obj);

bounded("learn react");
bounded("MDN");
