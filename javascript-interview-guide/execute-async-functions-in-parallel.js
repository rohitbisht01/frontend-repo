/*
Implement a function that takes a list of async functions as input and a
callback function and executes the input tasks in parallel i.e all at once
and invokes the callback after every task is finished.
*/

/*
Input:
    executeParallel( 
    [asyncTask(3), asyncTask(1), asyncTask(2)],
    (result) => { console.log(result);});

Output:
// output in the order of execution
[2, 1, 3]
*/

function asyncParallel(tasks, callback) {
  // store the result
  const results = [];

  // track the task executed
  let tasksCompleted = 0;

  // run each task
  tasks.forEach((asyncTask) => {
    // invoke the async task
    // ti can be a promise as well
    // for a promise you can chain it with then
    asyncTask((value) => {
      // store the output of the task
      results.push(value);

      // increment the tracker
      tasksCompleted++;

      // if all tasks are executed
      // invoke the callback
      if (tasksCompleted >= tasks.length) {
        callback(results);
      }
    });
  });
}

// Test Case
// To create an async task, we have created a function that accepts a
// callback and runs a setTimeout for a random time and invokes this
// callback inside the timeout.

function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

// Input

const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

asyncParallel(taskList, (result) => {
  console.log("results ", result);
});
