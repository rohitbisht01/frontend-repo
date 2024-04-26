// Implement a function in JavaScript that takes a list of async functions as input and a callback function and executes the async tasks in parallel that is all at once and invokes the callback after every task is executed.

// Example,
// Input:
// executeParallel([asyncTask(3), asyncTask(1), asyncTask(2)], (result) => {
//   console.log(result);
// });

// output in the order of execution
// Output: [2, 1, 3];

// SOLUTION
// We can use the simple forEach loop on each task and execute them parallel. We just need to use a tracker to determine the no of task that has been finished so that when each task is executed, we can invoke the callback function.

// Invoking the callback function at the end of the loop won’t work as the async tasks could be in different stacks and queues and may execute after some time.

function asyncParallel(tasks, callback) {
  // store the results
  const results = [];

  // track the task executed
  let tasksCompleted = 0;

  // run each task
  tasks.forEach((asyncTask) => {
    // invoke the async task
    // it can be a promise as well
    // for a promise you can chain it with then
    asyncTask((value) => {
      // store the output
      results.push(value);

      // increment the tracker
      tasksCompleted++;

      // if all tasks are executed invoke the callback
      if (tasksCompleted >= tasks.length) {
        callback(results);
      }
    });
  });
}

// To create an async task, we have created a function that accepts a callback and runs a setTimeout for a random time and invokes this callback inside the timeout.

function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

// Using this we can create multiple tasks and then test the async parallel.
const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

asyncParallel(taskList, (result) => {
  console.log("results ", result);
});
