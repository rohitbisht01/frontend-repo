// We will see how to create a javascript function that will remember its previously passed values and return the sum of the current and previous value.

// sum(5); // 5
// sum(3); // 8
// sum(4); // 12
// sum(0); // 12

// SOLUTION

// we know that js functions have access to the state ( properties and methods ) of its parent function even after it is executed

// So to create a function that will return the sum of the previous values in javascript we will use this technique of closure.

const curry = () => {
  // store the previous value
  let sum = 0;

  // return an inner function
  // which will have access to its parent function's store
  return function (num = 0) {
    sum += num;
    return sum;
  };
};

let sum = curry();
console.log(sum(5));
console.log(sum(3));
console.log(sum(4));
console.log(sum(0));
console.log(sum());
