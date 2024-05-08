const promiseAny = (promisesArray) => {
  const promiseErrors = new Array(promisesArray.length);
  let counter = 0;

  // return a new promise
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          promiseErrors[counter] = error;
          counter++;

          if (counter === promisesArray.length) {
            // all promises rejected, reject oyter promise
            reject(promiseErrors);
          }
        });
    });
  });
};

// Test case 1
const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});

const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "two");
});

const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

promiseAny([test1, test2, test3])
  .then(function (value) {
    // first and third fails, 2nd resolves
    console.log(value); //  two
  })
  .catch(function (err) {
    console.log(err);
  });

// Test case 2

const testA = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});

const testB = new Promise(function (resolve, reject) {
  setTimeout(reject, 600, "two");
});

const testC = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

promiseAny([testA, testB, testC])
  .then(function (value) {
    console.log(value); // [ 'three', 'one', 'two' ]
  })
  .catch(function (err) {
    // all three fails
    console.log(err);
  });
