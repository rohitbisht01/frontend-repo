// with currying we can transform a function with multiple arguments into a sequence of nesting functions

// sum(1,2,3) => sum(1)(2)(3) ====> 6

// Currying in JavaScript is a concept of functional programming in which we can pass functions as arguments (callbacks) and return functions without any side effects (Changes to program states).

// In simple terms, in currying we return a function for each function invoked which accepts next argument inline. With the help of currying we can transform a function with multiple arguments into a sequence of nesting functions.

// variations of currying and all of them returing same output which is 6
// sum(1)(2)(3);
// sum(1, 2)(3);
// sum(1)(2, 3);
// sum(1, 2, 3);

// Now you may be wondering each function call returns a new function then how the value is returned from it. Well for that we have to decide a base condition in which should return the output like if no argument is passed in the next function call then return the value or if we have reached 5 arguments then return the value, etc.

// sum(1)(2)(3)()
// sum(1, 2)(3)()
// sum(1)(2, 3)()
// sum(1, 2, 3)()

//all of these should return 6

//OR

//when we reach 5 arguments then return the value rather than new function
// sum(1, 2, 3, 4, 5)
// sum(1, 2)(3, 4, 5)
// sum(1)(2, 3, 4, 5)
// sum(1, 2, 3)(4, 5)
// sum(1)(2)(3)(4)(5)
// sum(1, 2, 3, 4)(5)

//all should return 15

// let's handle the base condition
// if the number of args === limit provided then return the sum of them

const sumBaseCondition = (...args) => {
  const storage = [...args];

  if (storage === 4) {
    return storage.reduce((currentValue, previousValue) => {
      const nextValue = currentValue + previousValue;
      return nextValue;
    }, 0);
  }
};

// if we haven't reached the base condition then proceed by returning a new function until the limit is reached

const sum = (...args) => {
  const storage = [...args];

  // base case
  // if we have reached the limit
  if (storage.length === 4) {
    return storage.reduce((a, b) => a + b, 0);
  }

  // otherwise return a function
  else {
    // create a inner function
    const temp = function (...args2) {
      // get the arguments of inner function merge them in existing storage
      storage.push(...args2);

      // if we have reached the limit return the value
      if (storage.length === 4) {
        return storage.reduce((a, b) => a + b, 0);
      }

      // else return the same function again
      else {
        return temp;
      }
    };
    // return the function
    return temp;
  }
};

const result1 = sum(1, 2, 3, 4);
// const result2 = sum(1, 2, 3, 4)(); // throws error
const result3 = sum(1)(2, 3, 4);
console.log(result1, result3);

// we have created a closure using an inner function

// Thus we will still be able to access the storage variable from the returned function.

// We merge the arguments of inner function in the existing storage and check if we have reached the limit or not in each call.

// If we have reached the limit return the sum of them other wise return the same function again.

//  BUT WHAT IF YOU HAVE TO CHECK FOR LAST INPUT IF NO ARGUEMNENTS ARE PASSED
// EG,

// sum(1, 2, 3, 4)();
// sum(1)(2)(3)(4)();
// sum(1, 2)(3, 4)();
// sum(1, 2, 3)(4)();
// sum(1)(2, 3, 4)();
// sum();

// OUTPUT : 10 10 10 10 10 0

// For the last input when no argument is passed it should return 0.

// The solution for this is quite straight forward, all we have to do is update the condition and instead of checking the no of arguments available in the storage, we have to check if there is any argument passed or not. If it is not passed then return the sum of arguments we have in storage.

const sumWithEmptyParenthesis = (...args) => {
  const storage = [...args];

  //base case
  //if invoked without any argument
  if (storage.length === 0) {
    return 0;
  }

  // closure
  else {
    // create a inner function
    const temp = function (...args2) {
      // get the arguments of inner function merge them in existing storage
      storage.push(...args2);

      // if no arguments are passed
      // return the value
      if (args2.length === 0) {
        return storage.reduce((a, b) => a + b, 0);
      }

      // else return the same function again
      else {
        return temp;
      }
    };
    // return the function
    return temp;
  }
};

const res1 = sumWithEmptyParenthesis(1, 2, 3, 4)();
const res2 = sumWithEmptyParenthesis(1)(2, 3, 4)();
const res3 = sumWithEmptyParenthesis(1)(2)(3)(4)();
console.log(res1, res2, res3);
