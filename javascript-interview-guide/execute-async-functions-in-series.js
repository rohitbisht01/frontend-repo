/*
Implement a function that takes a list of async functions as input and
executes them in a series that is one at a time. The next task is
executed only when the previous task is completed. 
*/

/*
Input:
    [ asyncTask(3),asyncTask(1),asyncTask(2) ]

Output:
3
1
2
*/

// Approach 1: Using async-await
// we will use "For…of" loop allows using await keyword performing the next iteration
// only when the previous one is finished.

async function executeAsyncInSeries(promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}

// Approach 2: Using recursion
// We can execute the async tasks in series by recursively calling the
// same function after the current task is executed.

async function executeAsyncInSeriesRecursion(promises) {
  // get the top task
  let promise = promises.shift();

  // execute the task
  promise.then((data) => {
    console.log(data);

    // recusively call the same function
    if (promises.length > 0) {
      executeAsyncInSeriesRecursion(promises);
    }
  });
}

// Approach 3: Using Array.reduce()

async function executeAsyncInSeriesReduce(promises) {
  promises.reduce((acc, cur) => {
    return acc.then(() => {
      return cur.then((val) => console.log(val));
    });
  }, Promise.resolve());
}

const asyncTask = (i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completing ${i}`);
    }, 100 * 1);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

executeAsyncInSeries(promises);
executeAsyncInSeriesRecursion(promises);
executeAsyncInSeriesReduce(promises);
