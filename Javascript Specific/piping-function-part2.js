// Create a function that accepts multiple functions as an argument and a value and run this value through each function and return the final output.

// Input:
// const val = { salary: 10000 };

// const getSalary = (person) => person.salary
// const addBonus = (netSalary) => netSalary + 1000;
// const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

// const result = pipe(
//   getSalary,
//   addBonus,
//   deductTax
// )(val);

// Output:
// 7700

// SOLUTION
//The best way to solve this is by forming a closure, create two functions.

// In the first function accept all the functions as argument and inside it create another function and return it. The inner function will accept the value and it will pass the value through the functions that are received in the outer function in the sequence.

// At the end return the final output from the last function.

// accept functions as arguments
// using rest ... operator convert then to array
const pipe = function (...funs) {
  // form a closure with inner function
  return function (val) {
    // run the value through all functions
    for (let f of funs) {
      val = f(val);
    }

    // return teh value after last processing
    return val;
  };
};

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const val = { salary: 10000 };

const result = pipe(getSalary, addBonus, deductTax)({ salary: 10000 });

console.log(result);
