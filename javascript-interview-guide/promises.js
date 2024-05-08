const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 5000);
});

promise
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log("task completed"));

// async await

const newPromise = Promise.resolve("I am resolved");

async function example(newPromise) {
  // promise is wrapped around try-catch block
  try {
    const resp = await newPromise;
    console.log(resp);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("completed");
  }
}

example(newPromise);
