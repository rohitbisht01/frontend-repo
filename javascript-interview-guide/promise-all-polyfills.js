// Promise.all Polyfill Implementation

const myPromiseAll = function (taskLists) {
  const results = [];

  // track how many promises has been completed
  let promisesCompleted = 0;

  // return new Promise
  return new Promise((resolve, reject) => {
    taskLists.forEach((promise, index) => {
      // if promise passes
      promise
        .then((val) => {
          // store its outime in results and increment the count
          results[index] = val;
          promisesCompleted++;

          // if all the promises are completed, resolve and return the result
          if (promisesCompleted === taskLists.length) {
            resolve(results);
          }
        }) // if any promise fails, reject
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// Test case 1
function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

const taskLists = [task(1000), task(5000), task(3000)];

// run promise.all
myPromiseAll(taskLists)
  .then((results) => console.log("results : ", results)) // results :  [ 1000, 5000, 3000 ]
  .catch((error) => console.log(error));

// Test case 2
function task2(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}

const taskLists2 = [task2(1000), task2(5000), task2(3000)];

myPromiseAll(taskLists2)
  .then((results) => console.log("results : ", results))
  .catch((error) => console.log(error)); // Rejected
