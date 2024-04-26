// Given an nested object which can have any type of object, deep flatten it and return the new object in Javascript.

// Input:
// {
//     A: "12",
//     B: 23,
//     C: {
//       P: 23,
//       O: {
//          L: 56
//       },
//       Q: [1, 2]
//      }
//   }

//   Output:
//   {
//     "A": "12"
//     "B": 23,
//     "C.O.L": 56,
//     "C.P": 23,
//     "C.Q.0": 1,
//     "C.Q.1": 2,
//   }

// SOLUTION

// there are two ways we can solve this , one using stack and another using recursion

// There are three different cases which we need to handle.

// Check if the value of the given key is object or not.
// If it is not an object then add that value to the output.
// Else, check if the value is array or not.
// If it is object then recursively call the same function with value and pass the key to be used as prefix and return the output in existing result.
// Otherwise, iterate the value and use the array’s index along with existing key as a new key and then store it in the output.
// Alternatively, we can convert the array to object and then recursively call the same function as we did in step 4.

// APPRAOCH 1
const flatten = (obj, prefix) => {
  // store the result
  let output = {};

  // iterate the object
  for (let k in obj) {
    let val = obj[k];

    // get the type
    const type = Object.prototype.toString.call(val);
    console.log(type);

    // object
    if (type === "[object Object]") {
      // new key
      const newKey = prefix ? prefix + "." + k : k;
      const newObj = flatten(val, newKey);
      output = { ...output, ...newObj };
    }

    // array
    else if (type === "[object Array]") {
      // iterate array
      for (let i = 0; i < val.length; i++) {
        // new key
        const newKey = prefix ? prefix + "." + k + "." + i : k + "." + i;
        output = { ...output, [newKey]: val[i] };
      }
    }

    // normal value
    else {
      // new key
      const newKey = prefix ? prefix + "." + k : k;
      output = { ...output, [newKey]: val };
    }
  }
  return output;
};

const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

console.log(flatten(nested));

// APPRAOCH 2
// another way : As the problem in the first approach is we have to create the new key in each condition which is not a good and it is because we are iterating the array in between, if we could convert that array to object then we can get rid of this problem.
const flattenAnotherWay = (obj, prefix) => {
  //store the result
  let output = {};

  //iterate the object
  for (let k in obj) {
    let val = obj[k];

    //new key
    const newKey = prefix ? prefix + "." + k : k;

    //array and object both are object in js
    if (typeof val === "object") {
      // if it is array
      if (Array.isArray(val)) {
        //use rest & spread together to convert
        //array to object
        const { ...arrToObj } = val;
        const newObj = flatten(arrToObj, newKey);
        output = { ...output, ...newObj };
      }
      //if it is object
      else {
        const newObj = flatten(val, newKey);
        output = { ...output, ...newObj };
      }
    }
    // normal value
    else {
      output = { ...output, [newKey]: val };
    }
  }

  return output;
};
