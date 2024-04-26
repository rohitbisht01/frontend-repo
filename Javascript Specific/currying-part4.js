// function sum(a, b, c, d) {
//   return a + b + c + d;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1,2,3,4,5)); // 10
// console.log(curriedSum(1)(2,3)(4,5)); // 10
// console.log(curriedSum(1)(2)(3)(4)); // 10

// If you see the problem statement, we have a callback function sum(a, b, c, d) that accepts four arguments and return total of those. This callback function is passed to curry that returns a new function.

// When the number of arguments in this returned function becomes equal to the number of arguments that callback function is expected, the curriedSum() returns the total, else it keeps returning another function that keeps accepting arguments and so on.

// To implement this, we will create a helper function in the curry() and return it.

// Inside the helper function we will check if the number of arguments it has received is greater than or equal to the arguments that callback function is expecting. For this we will use the length property that is available to the functions in JavaScript function.length that returns the size of arguments it is accepting.

// If the condition fulfils, then pass the arguments to the callback function and return the output.

// Else, return a new function that will accept the argument and recursively pass the combined arguments to the curry function again.

let curry = (fun) => {
  // helper fun
  let helper = (...args) => {
    if (args.length >= fun.length) {
      return fun(...args);
    } else {
      let temp = (...args2) => {
        return helper(...args, ...args2);
      };
      return temp;
    }
  };
  return helper;
};

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1)(2)(3)(4));
