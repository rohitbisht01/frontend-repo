function func(a) {
  return function (b) {
    console.log(a, b);
  };
}

func(2)(3);

// Implement func(1)(2)(3)
function test(a) {
  return function (b) {
    return function (c) {
      //   return a + b + c;
      console.log(a + b + c);
    };
  };
}

test(2)(3)(4);

// implement this
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("subtract")(4)(2) => 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "subtract") return a - b;
      else return "Invalid operation";
    };
  };
}

console.log(evaluate("sum")(2)(4));

const mul = evaluate("multiply");

console.log(mul(2)(3));

// Implement Infinite Currying: Write a currying function that takes infinite arguments
// sum(1)(2)(3)....(n)

function infiniteCurring(a) {
  return function (b) {
    if (b) {
      return infiniteCurring(a + b);
    }
    return a;
  };
}

console.log(infiniteCurring(2)(3)(4)(5)());

// DOM Manipulation
function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}
const updateHeader = updateElementText("heading");
updateHeader("Hello Road side coder");

// Curry Implementation
function curry(func) {
  return function curriedFunc(...args) {
    if (func.length <= args.length) {
      return func(args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);
console.log(totalSum(1)(2)(3));
