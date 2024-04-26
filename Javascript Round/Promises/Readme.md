Callback => Callback Hell => Promises => Async/Await

Callback function is a function that is passed as a argument to another function which will be executed later. We commonly use them in addEventListener, and array methods like filter, map, etc.

Callback Hell => a situation that arises in asynchronous programming when there are multiple nested callbacks, making the code difficult to read and maintain

To understand the internal working of callback hell in javascript, assume we have to achieve a task say D. To achieve task D, we need to execute a series of dependent tasks ranging from A to C asynchronously. In short, first we execute task A, we get the result and task B need to depend on result A to start its execution. Similarly, unless result B is produced we can't execute task C. This leads to the chaining of tasks from A to D, which creates a set of nested callbacks.

Promises => it is a object that may produce a single value some tim in the futture. either a resolve or rejected value.

Promise states => pending, fulfilled and rejected
pending : It is an initial state, when promise is neither fulfilled nor rejected

fulfilled : When resolve() method is executed, indicating that the operation
completed successfully

rejected : When reject() method is executed, indicating that the operation failed

Creating a promise => The Promise() constructor takes a function as an argument.

The function also accepts two functions resolve() and reject().
If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.

Promise Chaining is useful when you have to handle more than one asynchronous task, one after another.

You can perform an operation after a promise is resolved using methods then(), catch() and finally().

Difference between Promises and callback => Promises are easier to read and easy error handling and incase of callback they are hard to read and error handling may be hard.

Before promises we used callback functions to handle asynchrous requests. But there are limitations with callback which Promises overcomed.

Composition Tools => Promise.all() and Promise.race() we can execute multiple promises in parallel.

Promise.all() => If there is a case where we need to fetch data from multiple APIs and process them only if all calls are successful

Promise.race() => If we want the result of the first operation which settles to resolve or reject state

Promise.allSettled() => If we want the result of the all the operation and the code waits until all promises to settle, whether they are rejected or fulfilled

Promise.any() => Similar to Promise.race() but waits for the first promise to get fulfilled or rejects if all the promises are rejected

Cons of Promises
=> They can only return 1 object at a time
=> They are to be polyfilled as they are not compatible with old browsers. Polyfill means we have to provide additional code for older browsers that do not support this feature.
=>Callbacks are much faster and memory efficient than Promises

Async/Await comes to rescue

The async keyword allows you to define a function that handles asynchronous operations. Asynchronous functions execute asynchronously via the event loop. It always returns a Promise.

You use the await keyword to wait for a Promise to settle either in a resolved or rejected state.

For handling errors wrap the function in try and catch block
