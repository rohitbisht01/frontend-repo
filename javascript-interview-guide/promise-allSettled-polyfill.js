/*
Promise.allSettled() takes an array of promises as input and
returns an array with the result of all the promises whether they
are rejected or resolved.
Reading the problem statement we can break it down into
sub-problems and tackle them individually.
● Map the array of promises to return an object with status
and value/error depending upon the promised settlement.
● Pass this map to the Promise.all to run them at once and
return the result. 
*/

const promiseAllSettled = (promises) => {
  // map the promises to return a custom response
  const mappedPromises = promises.map((p) =>
    Promise.resolve(p).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    )
  );

  // run all the promises onec with promise.all
  return Promise.all(mappedPromises);
};

// Test case
const a = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
const b = new Promise((resolve, reject) => reject(9));
const c = new Promise((resolve, reject) => resolve(5));

promiseAllSettled([a, b, c]).then((val) => console.log(val));
