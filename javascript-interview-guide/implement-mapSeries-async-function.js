// Implement a mapSeries async function that is similar to the
// Array.map() but returns a promise that resolves on the list of output
// by mapping each input through an asynchronous iteratee function or
// rejects it if any error occurs. The inputs are run in a sequence that is
// one after another.
// The asynchronous iteratee function will accept an input and a
// callback. The callback function will be called when the input is
// finished processing, the first argument of the callback will be the error
// flag and the second will be the result.

let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
  // i am async iteratee function and do async operations here

  setTimeout(function () {
    num = num * 2;

    console.log(num);

    // throw error
    if (num === 12) {
      callback(true);
    } else {
      callback(null, num);
    }
  }, 1000);
});

numPromise
  .then((result) => console.log("Success: ", result))
  .catch(() => console.log("no success"));

// Output:
// each number will be printed after a delay of 2 seconds
// 2
// 4
// 6
// 8
// 10

// "success: 2,4,6,8,10"

// SOLUTION
// We will return a new promise and inside this promise, iterate each
// input value in the series using the Array.reduce().
// Pass the Promise.resolve([]) with an empty array as the initial
// accumulator to the Array.reduce() and inside the reduce, once the
// previous promise is resolved listen to it, create a new promise and pass
// the input value to the asynchronous iteratee function, based on the
// callback result from this iteratee function, either resolve or reject the
// current promise.

const mapSeriesSol = (arr, fn) => {
  return new Promise((resolve, reject) => {
    const output = [];

    // for all the values in the input run it in series that is one after another initially it will take an empty array to resolve merge the output fo the current with the previous and pass it on to the next

    const final = arr.reduce((prev, curr) => {
      return prev.then((val) => {
        return new Promise((resolve, reject) => {
          // based on the callback value of the async iteratee function resolve or reject
          fn(curr, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve([...val, result]);
            }
          });
        });
      });
    }, Promise.resolve([]));

    // based on the final promise state invoke the final promise

    final
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
