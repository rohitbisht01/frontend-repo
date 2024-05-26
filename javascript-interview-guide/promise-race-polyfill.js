const promiseRace = (promisesArray) => {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        // resolve, when any of the input resolves
        .then((resolve, reject))
        // reject, when any of the input rejecets
        .catch(reject);
    });
  });
};

// test case 1
const test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});

const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

promiseRace([test1, test2, test3])
  .then(function (value) {
    // first two resolve, 3rd fails, but promise 2 is faster
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
