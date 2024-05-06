// arr.reduce(callback, initialValue);

// arr.reduce(function (previousValue, curValue, curIndex, arr) {
//   const nextValue = previousValue + curValue;

//   return nextValue;
// }, initialValue);

// Aggregation
let arr = [1, 3, 4, 5, 6];
const total = arr.reduce(callbackFunc, 0);

function callbackFunc(previousValue, curValue) {
  const nextValue = previousValue + curValue;

  return nextValue;
}

console.log(total);

// Seggregation: We can group a certain set of values depending on our requirements.

arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const seggregate = arr.reduce(function (previousValue, curValue) {
  const floored = Math.floor(curValue);

  // if the key is not present create a new entry with the array value
  if (!previousValue[floored]) {
    previousValue[floored] = [];
  }

  // segregate hte current value in the respective key
  previousValue[floored].push(curValue);

  // return the updated value
  return previousValue;
}, {});

console.log(seggregate);

// Run in sequence: Let’s say we have an array of functions and a value, the value has to be
// passed through these functions in a pipe. Like the initial value has to
// be passed to the first function and then the returned value from the
// first function has to be passed to the next function and so on.

function upperCase(str) {
  return str.toUpperCase();
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function append(str) {
  return "Hello " + str;
}

// array of functions to be piped
arr = [upperCase, reverse, append];

const initialValue = "rohit";
const finalValue = arr.reduce((previousValue, curValue) => {
  const newValue = curValue(previousValue);

  return newValue;
}, initialValue);

console.log(finalValue);

// Similarly, if we want to run a promise in a sequence

// another example for shopping cart reduce price functionality

let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 500,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 10,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20,
  },
];

const totalPrice = shoppingCart.reduce((previousValue, curValue) => {
  const newValue = curValue.price * curValue.qty + previousValue;

  return newValue;
}, 0);

console.log(totalPrice);
